---
sidebar_position: 4
---
import ReactPlayer from 'react-player'

# Configuring AWX

## Requirements
:::danger Important

  Service account file
  
  Public key must be imported to developers's GCP instances

:::


## Steps to Configure AWX

1. **Create Organization**: In AWX, an organization represents a logical grouping of related projects, credentials, and inventories. To create an organization, follow these steps:
   - Access the AWX interface and navigate to the "Organizations" section.
   - Click on "Add" to create a new organization.
   - Provide the necessary details, such as the organization name and description.
   - Save the organization configuration.

2. **Create Credentials**: Credentials in AWX are used to store information necessary to access various systems and services. Follow these steps to create credentials:
   - Go to the "Credentials" section in AWX.
   - Click on "Add" to create a new set of credentials.
   - Select the appropriate credential type (SSH and GCP) and provide the required details.
   - Save the credentials.

3. **Dynamic Inventory**: AWX supports dynamic inventories, which can automatically discover and manage hosts. To set up a dynamic inventory, perform the following steps:
   - Navigate to the "Inventories" section in AWX.
   - Click on "Add" to create a new inventory.
   - Choose the inventory type as "Dynamic" and configure the necessary settings (e.g., source, credential, etc.).
   - Save the dynamic inventory configuration.

4. **Create Project**: Projects in AWX are used to manage source code repositories and define playbooks. To create a project, follow these steps:
   - Access the "Projects" section in AWX.
   - Click on "Add" to create a new project.
   - Provide the project name, select the appropriate SCM type (e.g., Git, Mercurial), and provide the repository URL.
   - Save the project configuration.

5. **Create Template**: Templates in AWX define the jobs to be executed. To create a template, follow these steps:
   - Go to the "Templates" section in AWX.
   - Click on "Add" to create a new template.
   - Provide the template name, select the project and playbook, and configure any required variables and options.
   - Save the template configuration.

6. **Test Job Template**: After creating the job template, you can test it to ensure it runs successfully. Follow these steps:
   - Access the "Templates" section in AWX.
   - Find the desired job template and click on the rocket icon to launch the job.
   - Monitor the job status and output to verify its success.

Step-by-Step Video Explanation: Here's a video tutorial that provides a detailed walkthrough of the AWX configuration process.

<div className="video__wrapper">
    <ReactPlayer className="video__player" controls height="100%" url="/awxconf.m4v" width="100%" />
</div>

By following these steps, you can configure AWX and set up organizations, credentials, dynamic inventories, projects, templates, and execute job templates successfully.