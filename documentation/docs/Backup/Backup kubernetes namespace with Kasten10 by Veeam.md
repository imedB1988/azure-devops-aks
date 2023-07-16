---
sidebar_position: 3
---

# Backup kubernetes namespace with Kasten10 by Veeam

This documentation provides a step-by-step guide on how to configure backup policies using the GCP Veeam service. By following these instructions, you can effectively manage and store backups for your namespaces in Google Cloud Platform (GCP). Video tutorials are included to demonstrate the configuration process.

## Prerequisites
Before proceeding with the backup policy configuration, ensure the following prerequisites are met:
- Deployed Kasten10 by Veeam to GKE cluster (previous Documentation)
- Access to GCP.
- IAM service account with appropriate privileges for accessing and managing backups.

## Step 1: Adding Storage for Namespace Backups

Folow the steps in the video tutorial below that demonstrates how to add the storage location for namespace backups:

<div className="video__wrapper">
    <ReactPlayer className="video__player" controls height="100%" url="/veeam.m4v" width="100%" />
</div>


## Step 2: Adding Backup Policies for Each Namespace


Folow the steps in the video tutorial below that explains how to add backup policies for each namespace:

<div className="video__wrapper">
    <ReactPlayer className="video__player" controls height="100%" url="/veeampolicy.m4v" width="100%" />
</div>




:::danger Additional Considerations
Here are some additional considerations to keep in mind while configuring backup policies with GCP Veeam service:

- Regularly review and update backup policies to accommodate changing requirements.
- Perform periodic tests and validations to ensure the backup and restore processes are functioning properly.
- Monitor backup operations and review logs for any potential errors or warnings.
- Adhere to backup retention policies that align with your organization's data retention and regulatory requirements.
:::