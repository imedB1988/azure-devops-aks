---
sidebar_position: 2
---

# Installation of Jenkins

The following steps outline the process of installing and configuring Jenkins for continuous integration.

## Step 1: Prepare the Jenkins Environment

1. Ensure that you have a dedicated machine or a local environment to deploy Jenkins.
2. Create a separate directory for your continuous integration setup.

```
.
├── README.md
├── docker-compose.yaml
├── infrastructurePipeline
│   └── Jenkinsfile
└── installgcloud.bash
```

3. Navigate to the continuous integration folder.

```bash
cd ContinousIntegration
```

## Step 2: Launch Jenkins Docker Container

Create a `docker-compose.yaml` file with the following content to configure and launch the Jenkins Docker container:

```yaml
version: '3'
services:
  jenkins:
    image: jenkins/jenkins:2.401.1-lts-jdk11
    container_name: jenkins
    user: root
    ports:
      - 8080:8080
      - 50000:50000
    volumes:
      - jenkins_home:/var/jenkins_home
    restart: always
volumes:
  jenkins_home:
```

Start the Jenkins container by running the following command:

```bash
docker-compose up -d
```

## Step 3: Install Required Plugins

1. Access the Jenkins web interface by opening a browser and visiting `http://localhost:8080`.
2. Install the following plugins through the Jenkins Plugin Manager:
   - Pipeline
   - Terraform
   - Docker
   - Kubernetes (Kube)
   - Google Cloud CLI (gcloud)

## Step 4: Configure Jenkins Credentials

1. Add your service account credentials as a secret file in Jenkins. This will allow Jenkins to access the necessary resources for deployment.
2. Follow the Jenkins documentation to add the credentials as a secret file.

## Step 5: Create and Configure the Pipeline

1. Create a new pipeline in Jenkins.
2. Copy the contents of the `Jenkinsfile` located in the `infrastructurePipeline` folder and paste it into the pipeline configuration.

## Step 6: Configure Triggers

Configure the triggers for your pipeline according to your requirements. For example, you can trigger the pipeline on code commits or on a schedule.

## Step 7: Build the Pipeline

Save your pipeline configuration and build the pipeline. Jenkins will now execute the defined steps in the pipeline, deploying your infrastructure as specified in the Jenkinsfile.
:::tip NOTE
This is a general overview of the installation and configuration process. Further customization and adjustments may be required based on your specific requirements.
:::