---
sidebar_position: 0
---
import ReactPlayer from 'react-player'

# CRUD 3-Tier Application

## Project Purpose

The purpose of this project is to showcase the step-by-step process of migrating a 3-tier application to be containerized using Docker. Additionally, it demonstrates automating the application's build, test, and deployment process using Azure DevOps. Finally, the project aims to prepare the application for deployment on Azure Kubernetes Service (AKS).

The key objectives of this project are:

1. **Containerization with Docker**: Demonstrate how to containerize each layer of the 3-tier application using Docker. This allows for consistent and efficient deployment across different environments.

2. **Automation with Azure DevOps**: Showcase how to automate the build, test, and deployment process using Azure DevOps. This includes setting up pipelines and leveraging DevOps practices for continuous integration and delivery (CI/CD).

3. **Preparation for AKS**: Provide guidance on preparing the application for deployment on Azure Kubernetes Service (AKS). This involves optimizing the application's configuration, scaling capabilities, and leveraging AKS features for increased reliability and scalability.

## Front End Layer

The front end layer of the application is developed using React.js. To containerize the front end using Docker, follow the instructions mentioned earlier in the documentation.

## Back End Layer

The back end layer of the application is implemented using Node.js. To containerize the back end using Docker, refer to the provided Dockerfile and build instructions in the documentation.

## Database Layer

The database layer utilizes MongoDB for storing and managing the application data. Ensure you have a MongoDB instance set up and running, and update the connection settings in the back end code accordingly.

## Getting Started

To begin the migration and automation process of the CRUD 3-tier application, follow these steps:

1. **Containerization with Docker**: Containerize the front end and back end layers of the application by following the provided instructions in the documentation.

2. **Automation with Azure DevOps**: Set up Azure DevOps pipelines to automate the build, test, and deployment processes of the application. Configure the pipelines to trigger on code changes and follow best practices for CI/CD.

3. **Preparation for AKS**: Optimize the application's configuration and dependencies for deployment on AKS. Leverage AKS features such as scaling, load balancing, and secrets management to enhance the application's reliability and security.

## Conclusion

The CRUD 3-Tier Application project aims to showcase the migration of a 3-tier application to Docker, automation of the build-test-deploy process with Azure DevOps, and preparation of the application for deployment on Azure Kubernetes Service (AKS). By following the outlined steps and utilizing the provided instructions, you can gain insights into modernizing and streamlining the application development and deployment processes.

---





