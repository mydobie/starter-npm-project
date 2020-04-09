pipeline {
  agent {
    docker {
      image 'node:12.6.0'
      args '-u root:root'
    }
  }
  environment {
    ARTIFACTORY = credentials('artifactory.umn.edu')
  }
  stages {
    stage('Get Modules') {
      steps {
        sh 'npm ci'
      }
    }
    stage('NPM Audit') {
      steps {
        sh 'npm run npmAudit'
      }
    }
    stage('Test') {
      steps {
        sh 'npm run test'
      }
    }
    stage('Code Linting') {
      steps {
        catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
          sh 'npm run lint:all'
        }
      }
    }
    stage('Code Coverage') {
      steps{
        catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
          sh 'npm run coverage'
        }
      }
    }
  }
}
