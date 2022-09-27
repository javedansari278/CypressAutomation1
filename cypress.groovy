pipeline {
    agent any

    stages {
        stage('Install Dependency') {
            steps {
                bat 'npm install'
            }
        }
        stage('Execute Test') {
            steps {
                echo 'Testing..'
            }
        }
    }
}
