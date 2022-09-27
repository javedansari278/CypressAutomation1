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
                bat 'npx cypress run --env userID=%USERID%,password=%USERPWD%'
            }
        }
    }
}
