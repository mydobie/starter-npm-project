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
    stage('Get modules and build') {
      steps {
        sh 'npm ci'
        sh 'npm run build --if-present'
      }
    }
    stage('NPM Audit') {
      steps {
        sh 'npm run npmAudit'
      }
    }
    stage('Unit tests') {
      steps {
        sh 'npm run test'
      }
    }
    stage('Code Coverage') {
      steps{
        catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
          sh 'npm run coverage'
        }
      }
    }
    stage('Code Linting') {
      steps {
        catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
          sh 'npm run lint:all'
        }
      }
    }
    
  }
}
