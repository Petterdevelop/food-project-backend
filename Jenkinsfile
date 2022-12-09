
node {
  // variables
  def imageTag = "food-project-backend:latest"

  checkout scm

    stage('Deploy application') {
      sh "echo ${env.BRANCH_NAME}"

      switch (env.BRANCH_NAME) {
        case "DEV":
          sh "echo 'ENVIROMENT=development' >> .env"
          sh "echo 'PORT=3001' >> .env"
          sh "docker build -t ${imageTag} ."
          // sh ‘ssh user@server “rm -rf /var/www/example.com/dist/ && mv /var/www/temp_deploy/dist/ /var/www/example.com/”’

          break
        case "QA":
          sh "echo 'ENVIROMENT=development' >> .env"
          sh "echo 'PORT=3001' >> .env"
          // Lint  
          sh "docker run --rm ${imageTag} npm run lint"
          // Test unitarios
          sh "docker run --rm ${imageTag} npm test"
          break
        case "PROD":
          sh "echo 'ENVIROMENT=production' >> .env"
          sh "echo 'PORT=3001' >> .env"
          break

        default:
          echo "Mensaje para todas las ramas"
      }
    }
  
}