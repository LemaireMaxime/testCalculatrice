pipeline {
  agent any

  tools {nodejs "nodejs"}

  stages {
    stage('install dependencies'){
      steps{
        sh 'node -v'
        sh 'npm install'
      }
    }
  }
}
