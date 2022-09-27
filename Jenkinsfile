pipeline {
    agent any

     environment {
        userID = 'env.USERID'
        password = 'env.USERPWD'
    }

    stages {
        stage('Install Dependency') {
            steps {
                bat 'npm install'
            }
        }
        stage('Execute Test') {
            steps {
                bat 'npx cypress run --headed --env userID=${userID},password=${password}'
            }
        }
    }
}
