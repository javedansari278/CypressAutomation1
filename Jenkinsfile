pipeline {
    agent any

    stages {
        stage('Install Dependency') {
            steps {
                bat 'npm install'
            }
        }
        stage('Execute Test') {
            envi
            steps {
                bat 'npx cypress run --env userID=env.USERID,password=env.USERPWD'
            }
        }
    }
}
