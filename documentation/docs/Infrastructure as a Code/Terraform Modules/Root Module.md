---
sidebar_position: 1
---

# Root Module

The root module is responsible for calling the workstation and kubernetes modules to provision the necessary infrastructure.

## Usage

If you're not using Jenkins to create the infrastructure, follow these steps:

1. Navigate to the `infrastructure` directory in your terminal.
2. Run the following commands:

```shell
terraform init
# This installs the necessary Terraform dependencies.

terraform plan
# This shows the changes that will be made in the infrastructure.

terraform apply -auto-approve
# This applies the changes to the infrastructure automatically without asking for confirmation.
```

## Terraform Configuration

Here's the Terraform code for the root module:

```terraform
module "workstation" {
  source          = "./modules/workstation"
  gcp_project     = var.gcp_project
  gcp_region      = var.gcp_region
  gcp_zone        = var.gcp_zone
  storage_class   = var.storage_class
}

output "allworkstationip" {
  value = module.workstation.ip
}

module "kubernetes" {
  source        = "./modules/kubernetes"
  gcp_project   = var.gcp_project
}

output "k8sclustersname" {
  value = module.kubernetes.k8sclustername
}
```

## Dependencies

This module has the following dependencies:

- Google Cloud Terraform Provider: Version 3.0 or later.
- Google Cloud SDK: The GCP SDK must be installed and authenticated.

Make sure to install and configure these dependencies before using this module.

:::tip NOTE
Feel free to modify and customize the content based on your specific module and requirements.
:::