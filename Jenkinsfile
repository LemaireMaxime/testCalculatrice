pipeline {
  agent any
  stages {
    stage('install dependencies'){
      steps{
        sh 'brew install node'
        sh 'node -v'
        sh 'npm install'
      }
    }
  }
}
