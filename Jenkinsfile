pipeline {
    agent any

    //  environment {
    //    Editor_Credentails=credentials('credentials')
    // }

    stages {
        stage('Install Dependency') {
            steps {
                bat 'npm install'
            }
        }
        stage('Execute Test') {
            steps {
               // bat "npx cypress run --env userID=%Editor_Credentails_USR%,password=%Editor_Credentails_PSW%,grepTags=%Modules%"
               bat "npx cypress run --env userID=%USERID%,password=%USERPWD%,grepTags=%Modules%"
            }
        }

        stage('Publish Reports'){
            steps {   
                     publishHTML([allowMissing: false, alwaysLinkToLastBuild: true, keepAll: true, reportDir: 'cypress\\reports\\html\\', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: ''])
            }
        }
    }
}
