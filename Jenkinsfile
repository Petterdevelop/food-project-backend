
node {
  // Change values here
  def project = "nestjs"
  def appName = "nestjs-starter"
  def port = "3000"
  def staticIp = ""

  // Other variables
  def feSvcName = "${appName}"
  def imageTag = "gcr.io/${project}/${appName}:${env.BRANCH_NAME}.${env.BUILD_NUMBER}"

  checkout scm

    stage('Deploy application') {
      sh "echo ${env.BRANCH_NAME}"

      switch (env.BRANCH_NAME) {
        case "DEV":
          sh "echo 'ENVIROMENT=development' >> .env"
          sh "echo 'PORT=3000' >> .env"
          sh "docker build -t ${imageTag} ."
          break
        case "QA":
          sh "echo 'ENVIROMENT=development' >> .env"
          sh "echo 'PORT=3000' >> .env"
          // Lint  
          sh "docker run --rm ${imageTag} npm run lint"
          // Test unitarios
          sh "docker run --rm ${imageTag} npm test"

          break
        case "PROD":
          sh "echo 'ENVIROMENT=production' >> .env"
          sh "echo 'PORT=3000' >> .env"
          break

        default:
          echo "mensaje todas las ramas."

      }
    }
  
}