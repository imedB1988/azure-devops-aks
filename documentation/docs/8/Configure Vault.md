---
sidebar_position: 3
---
# Configure Vault Cluster

## Step 1: Initialize and unseal one Vault pod

To start, Vault needs to be initialized and unsealed. Follow these steps:

1. Initialize Vault with one key share and one key threshold:

```shell
kubectl exec -n secrets vault-0 -- vault operator init -key-shares=1 -key-threshold=1 -format=json > cluster-keys.json
```

2. Display the unseal key found in `cluster-keys.json`:

```shell
cat cluster-keys.json | jq -r ".unseal_keys_b64[]"
```

3. Create a variable named `VAULT_UNSEAL_KEY` to capture the Vault unseal key:

```shell
VAULT_UNSEAL_KEY=$(cat cluster-keys.json | jq -r ".unseal_keys_b64[]")
```

4. Unseal Vault running on the `vault-0` pod:

```shell
kubectl exec -n secrets vault-0 -- vault operator unseal $VAULT_UNSEAL_KEY
```

### Step 2: Join the other Vaults to the Vault cluster

To create a Vault HA cluster, you need to join the other Vaults to the cluster. Here's how:

1. Display the root token found in `cluster-keys.json`:

```shell
cat cluster-keys.json | jq -r ".root_token"
```

2. Create a variable named `CLUSTER_ROOT_TOKEN` to capture the Vault root token:

```shell
CLUSTER_ROOT_TOKEN=$(cat cluster-keys.json | jq -r ".root_token")
```

3. Login with the root token on the `vault-0` pod:

```shell
kubectl exec -n secrets vault-0 -- vault login $CLUSTER_ROOT_TOKEN
```

4. List all the nodes within the Vault cluster for the `vault-0` pod:

```shell
kubectl exec -n secrets vault-0 -- vault operator raft list-peers
```
---
5. Join the Vault server on `vault-1` to the Vault cluster:

```shell
kubectl exec -n secrets vault-1 -- vault operator raft join http://vault-0.vault-internal:8200
```

6. Unseal the Vault server on `vault-1` with the unseal key:

```shell
kubectl exec -n secrets vault-1 -- vault operator unseal $VAULT_UNSEAL_KEY
```
---
7. Join the Vault server on `vault-2` to the Vault cluster:

```shell
kubectl exec -n secrets vault-2 -- vault operator raft join http://vault-0.vault-internal:8200
```

8. Unseal the Vault server on `vault-2` with the unseal key:

```shell
kubectl exec -n secrets vault-2 -- vault operator unseal $VAULT_UNSEAL_KEY
```
---
9. List all the nodes within the Vault cluster for the `vault-0` pod:

```shell
kubectl exec -n secrets vault-0 -- vault operator raft list-peers
```

## Verify Cluster Status

To ensure the Vault cluster is properly set up, follow these steps:

1. Get all the pods within the default namespace:

```shell
kubectl get pods -n secrets
```

2. Check that the `vault-0`, `vault-1`, and `vault-2` pods are running and ready (1/1).



















<!-- 
## Initialize and unseal one Vault pod
Vault starts uninitialized and in the sealed state. Prior to initialization the Integrated Storage backend is not prepared to receive data.

Initialize Vault with one key share and one key threshold.
```
kubectl exec -n secrets vault-0 -- vault operator init -key-shares=1 -key-threshold=1 -format=json > cluster-keys.json                                         
```

The operator init command generates a root key that it disassembles into key shares -key-shares=1 and then sets the number of key shares required to unseal Vault -key-threshold=1. These key shares are written to the output as unseal keys in JSON format -format=json. Here the output is redirected to a file named cluster-keys.json.

Display the unseal key found in cluster-keys.json.
```
 cat cluster-keys.json | jq -r ".unseal_keys_b64[]"
 ```

 :::Danger  Insecure operation

Do not run an unsealed Vault in production with a single key share and a single key threshold. This approach is only used here to simplify the unsealing process for this demonstration.
:::

Create a variable named VAULT_UNSEAL_KEY to capture the Vault unseal key.

```
VAULT_UNSEAL_KEY=$(cat cluster-keys.json | jq -r ".unseal_keys_b64[]")
```

After initialization, Vault is configured to know where and how to access the storage, but does not know how to decrypt any of it. Unsealing is the process of constructing the root key necessary to read the decryption key to decrypt the data, allowing access to the Vault.

Unseal Vault running on the vault-0 pod.
```
 kubectl exec vault-0 -- vault operator unseal $VAULT_UNSEAL_KEY
 ```
 The operator unseal command reports that Vault is initialized and unsealed.

:::danger Insecure operation

Providing the unseal key with the command writes the key to your shell's history. This approach is only used here to simplify the unsealing process for this demonstration.
:::

Insecure operation

Providing the unseal key with the command writes the key to your shell's history. This approach is only used here to simplify the unsealing process for this demonstration.

```
kubectl exec  -n secrets vault-0 -- vault status
```

## Join the other Vaults to the Vault cluster
The Vault server running on the vault-0 pod is a Vault HA cluster with a single node. To display the list of nodes requires that you are logging in with the root token.

Display the root token found in cluster-keys.json.
```
 cat cluster-keys.json | jq -r ".root_token"
```
Create a variable named CLUSTER_ROOT_TOKEN to capture the Vault unseal key.
```
 CLUSTER_ROOT_TOKEN=$(cat cluster-keys.json | jq -r ".root_token")
```

Login with the root token on the vault-0 pod.
```
 kubectl exec -n secrets vault-0 -- vault login $CLUSTER_ROOT_TOKEN
```

:::danger Insecure operation

The login command stores the root token in a file for the container user. Subsequent commands are executed with that token. This approach is only used here to simplify the cluster configuration demonstration.
:::
List all the nodes within the Vault cluster for the vault-0 pod.
```
 kubectl exec -n secrets vault-0 -- vault operator raft list-peers
 ```

 This displays the one node within the Vault cluster. This cluster is addressable through the Kubernetes service vault-0.vault-internal created by the Helm chart. The Vault servers on the other pods need to join this cluster and be unsealed.

Join the Vault server on vault-1 to the Vault cluster.

```
kubectl exec -n secrets vault-1 -- vault operator raft join http://vault-0.vault-internal:8200
```

This Vault server joins the cluster sealed. To unseal the Vault server requires the same unseal key, VAULT_UNSEAL_KEY, provided to the first Vault server.

Unseal the Vault server on vault-1 with the unseal key.
```
 kubectl exec -n secrets vault-1 -- vault operator unseal $VAULT_UNSEAL_KEY
```
The Vault server on vault-1 is now a functional node within the Vault cluster.

Join the Vault server on vault-2 to the Vault cluster.
```
 kubectl exec -n secrets vault-2 -- vault operator raft join http://vault-0.vault-internal:8200
```

Unseal the Vault server on vault-2 with the unseal key.
```
 kubectl exec -n secrets vault-2 -- vault operator unseal $VAULT_UNSEAL_KEY
```
The Vault server on vault-2 is now a functional node within the Vault cluster.

List all the nodes within the Vault cluster for the vault-0 pod.
```
 kubectl exec -n secrets vault-0 -- vault operator raft list-peers
```
This displays all three nodes within the Vault cluster.

Get all the pods within the default namespace.
```
 kubectl get pods -n secrets
```

The vault-0, vault-1, and vault-2 pods report that they are Running and ready (1/1). -->

----------------------------------------------------------------