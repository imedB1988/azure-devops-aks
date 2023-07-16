---
sidebar_position: 3
---
# Serverspec Testing Pipeline

The Serverspec Testing pipeline is responsible for executing Serverspec tests on multiple instances in parallel. It automates the process of installing Serverspec on developers' instances, copying the test files, and running the tests.

## Prerequisites
Before running the Serverspec Testing pipeline, ensure the following prerequisites are met:

1. Jenkins: Set up Jenkins on your system or cluster.
2. Google Cloud SDK: Install and configure the Google Cloud SDK on the Jenkins agent or the system running the pipeline.
3. Jenkins Credentials: Create a Jenkins credential of type "File" to store the service account key JSON file. This credential should be referenced as `serviceaccount` in the pipeline.

## Pipeline Configuration

```bash
def getInstances() {
    def instances = sh(
        script: "gcloud compute instances list --filter=\"zone:(europe-west9-a)\" --format=\"value(name)\"",
        returnStdout: true
    ).trim().split("\n")

    return instances
}

pipeline {
    agent any

    environment {
        SERVICE_ACCOUNT_KEY = credentials('serviceaccount')
    }

    stages {
        stage('Clone Repository') {
            steps {
                echo 'Cloning the repository'
                git branch: 'main', url: 'https://github.com/Chamssiddine/remote-development-environment.git'
            }
        }

        stage('Authenticate with Google Cloud') {
            steps {
                withCredentials([file(credentialsId: 'serviceaccount', variable: 'SERVICE_ACCOUNT_KEY')]) {
                    sh '''
                    gcloud auth activate-service-account --key-file=${SERVICE_ACCOUNT_KEY}
                    gcloud config set account $(gcloud auth list --filter=status:ACTIVE --format='value(account)')
                    gcloud config set project remotedevenv-383413
                    '''
                }
            }
        }

        stage('Install Serverspec On Developers Instances') {
            steps {
                echo 'Installing Serverspec on all instances...'
                script {
                    def instances = getInstances()

                    parallel instances.collectEntries { instance ->
                        return [
                            "${instance}" : {
                                sh "gcloud compute ssh ${instance} --zone=europe-west9-a --command=\"sudo gem install serverspec >/dev/null && sudo gem install serverspec | tail -n 2\""
                            }
                        ]
                    }
                }
            }
        }

        stage('Docker Serverspec Tests') {
            steps {
                echo 'Copying docker_spec.rb to all instances...'
                script {
                    def instances = getInstances()
                    def specFile = "provision/server_spec/spec/docker_spec.rb"

                    parallel instances.collectEntries { instance ->
                        return [
                            "${instance}" : {
                                sh "gcloud compute scp ${specFile} ${instance}:~/ --zone=europe-west9-a"
                                sh "gcloud compute ssh ${instance} --zone=europe-west9-a --command=\"sudo rspec ~/docker_spec.rb --format documentation\""
                            }
                        ]
                    }
                }
            }
        }

        stage('Run Dev Tools Serverspec Tests') {
            steps {
                echo 'Copying dev_tools.rb and running additional tests on all instances...'
                script {
                    def instances = getInstances()
                    def devTools = "provision/server_spec/spec/dev_tools.rb"

                    parallel instances.collectEntries { instance ->
                        return [
                            "${instance}" : {
                                sh "gcloud compute scp ${devTools} ${instance}:~/ --zone=europe-west9-a"
                                sh "gcloud compute ssh ${instance} --zone=europe-west9-a --command=\"sudo rspec ~/dev_tools.rb --format documentation\""
                            }
                        ]
                    }
                }
            }
        }
    }
}

```

## Stages and Steps
The Serverspec Testing pipeline consists of the following stages:

1. **Clone Repository**: This stage clones the repository containing the Serverspec test files.
2. **Authenticate with Google Cloud**: This stage authenticates with Google Cloud using the provided service account key file.
3. **Install Serverspec On Developers Instances**: This stage installs Serverspec on all instances used by developers in parallel.
4. **Docker Serverspec Tests**: This stage copies the `docker_spec.rb` file to each instance and runs the Serverspec tests for Docker.
5. **Run Dev Tools Serverspec Tests**: This stage copies the `dev_tools.rb` file to each instance and runs additional Serverspec tests for dev tools.

Each stage contains steps that execute specific commands or actions required for that stage. You can further customize these steps according to your specific Serverspec tests and requirements.

Please note that the `getInstances()` function is not defined in the provided code snippet. You need to implement this function to retrieve the instance names based on your criteria, such as zone or any other relevant filter.

Remember to adjust the zone (`europe-west9-a`) and project ID (`remotedevenv-383413`) values according to your specific project details.

Make sure to have the necessary credentials, plugins, and configurations in place before running the pipeline.

Please note that this is a simplified overview of the pipeline, and you may need to modify it according to your specific requirements and environment.