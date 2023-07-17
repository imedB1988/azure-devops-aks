---
sidebar_position: 5
---

### Why Use ServerSpec with Ansible

While Ansible is a powerful infrastructure automation tool that can provision, configure, and orchestrate servers, it does not provide built-in testing capabilities. ServerSpec, on the other hand, is a testing framework specifically designed to verify the state and configuration of servers.

Here are a few reasons why using ServerSpec with Ansible can be beneficial:

1. **Validation of Desired State**: Ansible ensures that servers are provisioned and configured according to the desired state defined in your Ansible playbooks. However, it's essential to validate that the applied configurations are accurate and meet the expected outcomes. ServerSpec enables you to write tests in a human-readable format to verify the state of the provisioned servers, ensuring that they adhere to the desired configuration.

2. **Continuous Integration and Deployment**: ServerSpec tests can be integrated into your continuous integration and deployment pipelines. By including ServerSpec tests alongside your Ansible playbooks, you can perform automated testing to validate the correctness of your infrastructure and catch any configuration issues or unexpected changes before deploying to production.

3. **Documentation and Compliance**: ServerSpec tests serve as documentation for your infrastructure. They provide clear and concise statements about the expected configuration and behavior of your servers. Additionally, ServerSpec can help you meet compliance requirements by ensuring that your servers adhere to specific security or regulatory standards.

By combining the automation capabilities of Ansible with the testing capabilities of ServerSpec, you can have more confidence in the correctness and stability of your infrastructure.

### Docker ServerSpec File: `docker_spec.rb`

```ruby
require 'serverspec'
set :backend, :exec

describe package('docker-ce') do
  it { should be_installed }
end

describe package('docker-ce-cli') do
  it { should be_installed }
end

describe package('containerd.io') do
  it { should be_installed }
end

describe service('docker') do
  it { should be_enabled }
  it { should be_running }
end
```

The `docker_spec.rb` file is a ServerSpec test file that verifies the state of Docker on a server. It contains a series of tests using the ServerSpec syntax to check if Docker packages are installed and if the Docker service is enabled and running.

The tests in the `docker_spec.rb` file perform the following verifications:
- Check if the `docker-ce` package is installed.
- Check if the `docker-ce-cli` package is installed.
- Check if the `containerd.io` package is installed.
- Check if the `Docker service` is enabled and running.

By running these ServerSpec tests, you can ensure that Docker is correctly installed and functioning on the target servers.
### Dev Tools ServerSpec File: `dev_tools.rb`

```ruby
require 'serverspec'

# Define the packages to be installed
packages = %w[curl wget rsync golang-go ansible vagrant ruby git]
set :backend, :exec

# Check if the packages are installed
packages.each do |package|
  describe package(package) do
    it { should be_installed }
  end
end
```
The `dev_tools.rb` file is a ServerSpec test file that verifies if the dev tools are installed on the dev workstations or not. It contains a series of tests using the ServerSpec syntax to check if the packages installed by AWX(ansible) are installed.

The tests in the `docker_spec.rb` file perform the following verifications:

- Check if `curl wget rsync golang-go ansible vagrant ruby git` package are installed.

### Bash Script: `serverspec.bash`

```bash
#!/bin/bash
# Generate the list of instances with zone europe-west9-a
instances=$(gcloud compute instances list --filter="zone:(europe-west9-a)" --format="value(name)")

# Path to the docker_spec.rb file
spec_file="docker_spec.rb"
dev_tools="dev_tools.rb"
# Copy docker_spec.rb to each instance and run the tests
for instance in $instances; do
  echo "Copying docker_spec.rb and dev_tools to $instance..."
  gcloud compute scp $spec_file $instance:~/ --zone=europe-west9-a
  gcloud compute scp $dev_tools $instance:~/ --zone=europe-west9-a

  echo "Installing Serverspec on $instance..."
  # SSH into the instance and install Serverspec
  gcloud compute ssh $instance --zone=europe-west9-a --command="sudo gem install serverspec >/dev/null && sudo gem install serverspec | tail -n 2"

  echo "Running tests on $instance..."
  # SSH into the instance and run the tests, suppressing the warning message
  gcloud compute ssh $instance --zone=europe-west9-a --command="sudo rspec ~/docker_spec.rb --format documentation"
  gcloud compute ssh $instance --zone=europe-west9-a --command="sudo rspec ~/dev_tools.rb   --format documentation"

  echo "Cleaning up docker_spec.rb and dev_tools on $instance..."
  # Remove the copied docker_spec.rb file from the instance
  gcloud compute ssh $instance --zone=europe-west9-a --command="rm ~/docker_spec.rb ~/dev_tools.rb"
done

```

### Run the serverspec tests

Navigate to the serverspec folder by typing the following command:
```bash
cd provision/serverspec/spec
```

the script will copy the serverspec files to each of the instance in `europe-west9-a` zone, install serverspec with gem and run the serverspec files

To run the `run_docker_serverspec.bash` script, run the following command:

```bash
bash serverspec.bash
```

The script will execute the ServerSpec tests on each instance and display the output, including the status of the tests and any error messages.
