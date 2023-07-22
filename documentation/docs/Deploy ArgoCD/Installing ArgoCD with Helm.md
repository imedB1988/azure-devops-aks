---
sidebar_position: 2
---
# 
## How to install ArgoCD using Helm
To install ArgoCDX using Helm, follow these steps:

### 1. 

```bash
git clone https://github.com/argoproj/argo-helm.git
```

### 2. Verify the content of the following files:

```bash
cd argo-helm/charts/argo-cd/
```

```bash
kubectl create ns argocd
```

```bash
helm dependency up
```
```bash
helm install argocd . -f values.yaml -n argocd
```


```bash

kubectl port-forward service/argocd-argocd-server 8090:80 -n argocd

```


```bash
az aks get-credentials --resource-group crudapp --name crudappaks

```