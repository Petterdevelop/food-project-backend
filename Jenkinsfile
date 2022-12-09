
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
          sh "scp -i /var/jenkins_home/.ssh/id_rsa.pub ./docker-compose.yml test@192.168.21.153:~/backend/docker-compose.yaml "
          sh 'ssh -i /var/jenkins_home/.ssh/id_rsa.pub test@192.168.21.153 "cd backend && docker-compose down && docker-compose up -d"'
          break

        case "QA":
          sh "echo 'ENVIROMENT=development' >> .env"
          sh "echo 'PORT=3001' >> .env"
          // Lint  
          sh "docker run --rm ${imageTag} npm run lint"
          // Test unitarios
          sh "docker run --rm ${imageTag} npm test"
          sh "scp -i /var/jenkins_home/.ssh/id_rsa.pub ./docker-compose.yml test@192.168.21.153:~/backend/docker-compose.yaml "
          sh 'ssh -i /var/jenkins_home/.ssh/id_rsa.pub test@192.168.21.153 "cd backend && docker-compose down && docker-compose up -d"'
          break

        case "PROD":
          sh "echo 'ENVIROMENT=production' >> .env"
          sh "echo 'PORT=3001' >> .env"
          sh "scp -i /var/jenkins_home/.ssh/id_rsa.pub ./docker-compose.yml test@192.168.21.153:~/backend/docker-compose.yaml "
          sh 'ssh -i /var/jenkins_home/.ssh/id_rsa.pub test@192.168.21.153 "cd backend && docker-compose down && docker-compose up -d"'
          break

        default:
          echo "Mensaje para todas las ramas"
      }
    }
  
}