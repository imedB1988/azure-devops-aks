---
sidebar_position: 1
---




# Infrastructure Creation Pipeline

## Overview
The Infrastructure Creation pipeline is responsible for creating the Developer Instances along side the GKE Cluster using Terraform. This pipeline automates the process of provisioning infrastructure resources on Google Cloud Platform (GCP).

## Prerequisites
Before running the Infrastructure Creation pipeline, make sure you have the following prerequisites:

1. Jenkins: Set up Jenkins on your system or cluster.
2. Google Cloud SDK: Install and configure the Google Cloud SDK on the Jenkins agent or the system running the pipeline.
3. Jenkins Credentials: Create a Jenkins credential of type "File" to store the service account key JSON file. This credential should be referenced as `serviceaccount` in the pipeline.

## Plugins to Install
To execute this pipeline, ensure that the following Jenkins plugins are installed:

- Pipeline
- Credentials Binding
- Google OAuth Credentials
- Google Cloud SDK
- Terraform

## Pipeline Configuration
The infrastructure pipeline is defined using the Jenkins Declarative Pipeline syntax. Here is an example of the pipeline configuration:

```bash
pipeline {
    agent any
    tools {
        terraform 'terraform'
    }
    environment {
        SERVICE_ACCOUNT_KEY = credentials('serviceaccount')
    }
    stages {
        stage('Clone') {
            steps {
                echo 'Cloning the repo'
                git branch: 'main', url: 'https://github.com/Chamssiddine/remote-development-environment.git'
            }
        }

        stage('Authenticate with Google Cloud') {
            steps {
                withCredentials([file(credentialsId: 'serviceaccount', variable: 'SERVICE_ACCOUNT_KEY')]) {
                    sh """
                    gcloud auth activate-service-account --key-file=${SERVICE_ACCOUNT_KEY}
                    gcloud config set account \$(gcloud auth list --filter=status:ACTIVE --format='value(account)')
                    gcloud config set project remotedevenv-383413
                    """
                }
            }
        }

        stage('Initialize Infrastructure') {
            steps {
                dir('infrastructure') {
                    withEnv(["GOOGLE_APPLICATION_CREDENTIALS=${SERVICE_ACCOUNT_KEY}"]) {
                        sh '''
                        terraform init
                        '''
                    }
                }
            }
        }
        
        stage('Plan Infrastructure Changes') {
            steps {
                dir('infrastructure') {
                    withEnv(["GOOGLE_APPLICATION_CREDENTIALS=${SERVICE_ACCOUNT_KEY}"]) {
                        sh '''
                        terraform plan
                        '''
                    }
                }
            }
        }
        
        stage('Apply Infrastructure Changes') {
            steps {
                dir('infrastructure') {
                    withEnv(["GOOGLE_APPLICATION_CREDENTIALS=${SERVICE_ACCOUNT_KEY}"]) {
                        sh '''
                        terraform apply -auto-approve
                        '''
                    }
                }
            }
        }
    }
}

```

## Stages and Steps
The Infrastructure Creation pipeline consists of the following stages:

1. **Clone**: This stage clones the repository containing the Terraform configuration files.
2. **Authenticate with Google Cloud**: This stage authenticates with Google Cloud using the provided service account key file.
3. **Initialize Infrastructure**: This stage initializes Terraform within the `infrastructure` directory.
4. **Plan Infrastructure Changes**: This stage generates the execution plan for Terraform to determine the changes required to provision the infrastructure.
5. **Apply Infrastructure Changes**: This stage applies the changes defined in the Terraform configuration to provision the infrastructure resources on Google Cloud Platform.

Each stage contains steps that execute specific commands or actions required for that stage.

Please note that this is a simplified overview of the pipeline, and you may need to modify it according to your specific requirements and environment. Make sure to have the necessary credentials, plugins, and configurations in place before running the pipeline.