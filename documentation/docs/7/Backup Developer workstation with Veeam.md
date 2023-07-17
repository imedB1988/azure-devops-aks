---
sidebar_position: 4
---
import ReactPlayer from 'react-player'


# Documentation: Configuring Backup Policies with GCP Veeam Service

## Overview
This documentation provides a step-by-step guide on how to configure backup policies using the GCP Veeam service. By following these instructions, you can ensure effective backup management for your developer instances in Google Cloud Platform (GCP). This documentation also references a video tutorial that demonstrates the configuration process.

## Prerequisites
Before proceeding with the backup policy configuration, ensure the following prerequisites are met:
- Access to GCP Veeam service.
- IAM service account with appropriate privileges for accessing and managing backups.
- Familiarity with the GCP console and Veeam backup concepts.

## Step-by-Step Guide

### Step 1: Creating a Veeam Server
1. Access the GCP console and navigate to the Veeam service page.
2. Click on "Create Veeam Server" and provide the necessary details, such as server name and configuration settings.
3. Review and confirm the server creation.
<div className="video__wrapper">
    <ReactPlayer className="video__player" controls height="100%" url="/veeamserver.m4v" width="100%" />
</div>

4. Access Veeam
<div className="video__wrapper">
    <ReactPlayer className="video__player" controls height="100%" url="/veeamisready.m4v" width="100%" />
</div>

5. Create a veeam account and sign in to the dashboard
<div className="video__wrapper">
    <ReactPlayer className="video__player" controls height="100%" url="/veeamsignin.m4v" width="100%" />
</div>

### Step 2: Updating IAM Service Account Privileges
1. Identify the IAM service account associated with the Veeam server.
2. Access the IAM & Admin section in the GCP console.
3. Locate the IAM service account and click on it.
4. Update the account privileges to include the necessary roles or permissions required for backup operations.

### Step 3: Configuring Backup Policy
1. Open the GCP Veeam service console and select the desired Veeam server.
2. Navigate to the backup policies section and click on "Create Backup Policy."
3. Configure the backup policy settings, including retention periods, scheduling, and backup targets.
4. Save the backup policy settings.

### Step 4: Assigning Backup Policy to Developer Instances
1. Access the GCP Compute Engine console.
2. Identify the developer instances that require backup.
3. Assign the previously created backup policy to the respective instances.
<div className="video__wrapper">
    <ReactPlayer className="video__player" controls height="100%" url="/configureveeambackup.m4v" width="100%" />
</div>



:::danger Additional Considerations
- Regularly review and update backup policies to align with changing requirements.
- Perform periodic tests and validate the backup and restore processes to ensure data recoverability.
- Monitor backup operations and review logs for any errors or warnings.
- Consider implementing backup retention policies that comply with your organization's data retention and regulatory requirements.
:::
