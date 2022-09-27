pipeline {
    agent any

     environment {
       Editor_Credentails=credentials('credentials')
    }

    stages {
        stage('Install Dependency') {
            steps {
                bat 'npm install'
            }
        }
        stage('Execute Test') {
            steps {
                sh('echo ${Editor_Credentails_USR}  ${Editor_Credentails_PSW}')
                //bat "npx cypress run --env userID='$Editor_Credentails_USR',password='$Editor_Credentails_PSW'"
            }
        }

        // stage('Publish Reports'){
        //     steps {
        //         publishHTML([allowMissing: false, alwaysLinkToLastBuild: true, keepAll: true, reportDir: 'cypress\\reports\\html\\', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: ''])
        //     }
        // }
    }
}
