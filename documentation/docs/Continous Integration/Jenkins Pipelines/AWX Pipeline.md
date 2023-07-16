---
sidebar_position: 2 
---
# AWX Trigger Pipeline

The AWX Trigger pipeline is responsible for triggering Ansible Tower jobs in AWX. It allows you to automate the execution of specific job templates from within your Jenkins pipeline.

## Prerequisites
Before running the AWX Trigger pipeline, ensure the following prerequisites are met:

1. Jenkins: Set up Jenkins on your system or cluster.
2. Ansible Tower: Install and configure Ansible Tower, also known as AWX, and set up the necessary job templates.
3. Jenkins Credentials: Create a Jenkins credential of type "Username with password" to store the AWX credentials. This credential should be referenced as `awxcredentials` in the pipeline.

## Pipeline Configuration

```bash
pipeline {
    agent any

    stages {
        stage('Trigger Docker Ansible Tower Job') {
            steps {
                ansibleTower jobTemplate: 'docker',
                jobType: 'run', scmBranch: 'main', 
                throwExceptionWhenFail: false, 
                towerCredentialsId: 'awxcredentials ',
                towerLogLevel: 'full', towerServer: 'awx'            
                
            }
        }
        stage('Trigger Dev Tools Ansible Tower Job') {
            steps {
                ansibleTower jobTemplate: 'devtools',
                jobType: 'run', scmBranch: 'main', 
                throwExceptionWhenFail: false, 
                towerCredentialsId: 'awxcredentials ',
                towerLogLevel: 'full', towerServer: 'awx'            
                
            }
        }
    }
}

```

## Stages and Steps
The AWX Trigger pipeline consists of the following stages:

1. **Trigger Docker Ansible Tower Job**: This stage triggers the Docker job template in AWX.
2. **Trigger Dev Tools Ansible Tower Job**: This stage triggers the Dev Tools job template in AWX.

Each stage uses the `ansibleTower` step to trigger the corresponding job template in AWX.

```bash
stage('Trigger Docker Ansible Tower Job') {
    steps {
        ansibleTower jobTemplate: 'docker',
        jobType: 'run', scmBranch: 'main', 
        throwExceptionWhenFail: false, 
        towerCredentialsId: 'awxcredentials',
        towerLogLevel: 'full', towerServer: 'awx'            
    }
}
```

In this example, the `ansibleTower` step is used to trigger the `docker` job template. Adjust the `jobTemplate` parameter to match the name of your Docker job template in AWX. You can also customize other parameters according to your specific requirements.

```bash
stage('Trigger Dev Tools Ansible Tower Job') {
    steps {
        ansibleTower jobTemplate: 'devtools',
        jobType: 'run', scmBranch: 'main', 
        throwExceptionWhenFail: false, 
        towerCredentialsId: 'awxcredentials',
        towerLogLevel: 'full', towerServer: 'awx'            
    }
}
```

In this example, the `ansibleTower` step is used to trigger the `devtools` job template. Adjust the `jobTemplate` parameter to match the name of your Dev Tools job template in AWX. Customize other parameters as needed.

Make sure to replace `awxcredentials` with the actual Jenkins credential ID for your AWX credentials.

Remember to adjust the `towerServer` value to match the AWX server you are using.

Please note that this is a simplified overview of the pipeline, and you may need to modify it according to your specific requirements and environment.