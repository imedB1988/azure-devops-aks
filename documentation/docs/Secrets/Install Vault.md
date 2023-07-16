---
sidebar_position: 2
---


## Install the Vault Helm chart

The recommended way to run Vault on Kubernetes is via the [Helm chart](https://developer.hashicorp.com/vault/docs/platform/k8s/helm).

Go to the helm values folder in `/helm_charts/vault_chart`

Add the HashiCorp Helm repository.

```bash
 helm repo add hashicorp https://helm.releases.hashicorp.com
```

Update all the repositories to ensure helm is aware of the latest versions.

```
helm repo update
```

Search for all the Vault Helm chart versions and choose a version.

```
 helm search repo vault --versions
```


Install the version you chose of the Vault Helm chart in HA mode with integrated storage.
```
 helm install vault hashicorp/vault \
    --set='server.ha.enabled=true' \
    --set='server.ha.raft.enabled=true' \
    -f vault_values.yaml \
    --version  0.24.0 \
    -n secrets --create-namespace

```
this the offical documentation on installing vault [link](https://developer.hashicorp.com/vault/tutorials/kubernetes/kubernetes-google-cloud-gke)


## Installing the Vault Helm Chart on Kubernetes

To run Vault on Kubernetes, it is recommended to use the Helm chart provided by HashiCorp. The following steps outline the process of installing Vault on Kubernetes using the Helm chart:

### Step 1: Add HashiCorp Helm Repository
Add the HashiCorp Helm repository to your local Helm installation by executing the following command:

```bash
helm repo add hashicorp https://helm.releases.hashicorp.com
```

### Step 2: Update Helm Repositories
Update all the repositories to ensure that Helm is aware of the latest available versions of the charts:

```bash
helm repo update
```

### Step 3: Choose a Vault Helm Chart Version
Search for all available versions of the Vault Helm chart and choose the version that suits your requirements. Use the following command to search for available versions:

```bash
helm search repo vault --versions
```

### Step 4: Install the Vault Helm Chart
Install the chosen version of the Vault Helm chart in High Availability (HA) mode with integrated storage. You can use the provided `vault_values.yaml` file located `helm_chart/vault_chart` to customize the chart's configuration. Execute the following command to install the Vault Helm chart:

```bash
helm install vault hashicorp/vault \
  --set='server.ha.enabled=true' \
  --set='server.ha.raft.enabled=true' \
  -f vault_values.yaml \
  --version 0.24.0 \
  -n secrets --create-namespace
```

### Additional Resources
For more detailed instructions and information on installing Vault on Kubernetes, you can refer to the official documentation: [Kubernetes-Google Cloud GKE Tutorial](https://developer.hashicorp.com/vault/tutorials/kubernetes/kubernetes-google-cloud-gke).

By following these steps, you will be able to successfully install and configure Vault on your Kubernetes cluster using the Helm chart.
