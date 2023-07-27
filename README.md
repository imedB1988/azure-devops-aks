---

# Introduction

We will migrate a 3-Tier Application to Azure Kubernetes Service and automate the deploying process with Azure DevOps and ArgoCD

![diagram](/images/diagram.png)

# Architecture


https://github.com/Chamssiddine/azure-devops-aks/assets/62959061/ae618f06-9db8-41f7-a099-6ae6ff67cdff


## YouTube Tutorial

Check out my [Youtube Tutorial](https://www.youtube.com/watch?v=_3vswaY7oYA&ab_channel=Chamssiddineabd) for a detailed step-by-step guide. The video covers Dockerfile creation ,Docker-compose, Kubernetes manifest files, Azure DevOps Pipeline, and continuous deployment with Argo CD.

## Description

This project demonstrates the process of migrating a 3-tier application to Kubernetes on Azure. The application consists of a frontend built with ReactJS, a backend using Node.js, and a MongoDB database.

## Table of Contents

- [Project Name](#project-name)
  - [YouTube Tutorial](#youtube-tutorial)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Prerequisites](#prerequisites)
  - [Getting Started](#getting-started)
    - [Cloning the Repository](#cloning-the-repository)
    - [Installation](#installation)
  - [Usage](#usage)
  - [Deployment](#deployment)
  - [Contributing](#contributing)

## Introduction

The purpose of this project is to provide a step-by-step guide on how to migrate a 3-tier application to Kubernetes on Azure. It covers setting up Dockerfiles for the frontend and backend, Kubernetes manifest files for deployment, and implementing Azure DevOps to automate the building and pushing of the docker images to Azure Container Registry and for continuous deployment with Argo CD on Azure Kubernetes Service (AKS).

## Prerequisites

Before getting started, ensure you have the following prerequisites:

- NPM installed.
- MongoDB installed and running for the database.
- Docker and Docker Compose installed.

## Getting Started

### Cloning the Repository

Clone the project repository using the following command:

```bash
git clone https://github.com/Chamssiddine/azure-devops-aks.git
```

### Installation

To set up the application and its dependencies, follow these steps:

1. **Backend Setup:**
   - Navigate to the `/src/backend/` directory.
   - Install the required Node.js packages using `npm install`.
   - Set up environment variables (if applicable).
   - Start the backend server using `npm run start:dev`.

2. **Frontend Setup:**
   - Navigate to the `/src/frontend/` directory.
   - Install the required React.js packages using `npm install`.
   - Start the frontend development server using `npm run start`.

3. **Database Setup:**
   - Ensure MongoDB is installed and running on your system.
   - Update the database connection settings in the backend configuration.
   - Create an Database named `crud-users-db`

## Usage

Once the application is set up and running, you can access the frontend by navigating to `http://localhost:3000` in your web browser.

## Deployment

For deploying the application on Azure Kubernetes Service (AKS), please refer to my YouTube tutorial.


## Contributing

Contributions are welcome! If you find any issues or want to enhance the project, please feel free to create a pull request.
