pipeline {
    agent any

    //  environment {
    //     userID = 'env.USERID'
    //     password = 'env.USERPWD'
    // }

    stages {
        stage('Install Dependency') {
            steps {
                bat 'npm install'
            }
        }
        stage('Execute Test') {
            steps {
                bat 'npx cypress run --env userID=${env.USERID},password=${env.USERPWD}'
            }
        }

        stage('Publish Reports'){
            steps {
                publishHTML([allowMissing: false, alwaysLinkToLastBuild: true, keepAll: true, reportDir: 'cypress\\reports\\html\\', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: ''])
            }
        }
    }
}
