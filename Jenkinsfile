pipeline {
  agent any

  tools {node "node"}

  stages {
    stage('install dependencies'){
      steps{
        sh 'node -v'
        sh 'npm install'
      }
    }
  }
}
