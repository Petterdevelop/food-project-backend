
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

  stage("Static analysis") {
    sh "docker build -t ${imageTag} ."

    // Check style    
    sh "docker run --rm ${imageTag} npm run lint"
    // step([
    //   $class: "hudson.plugins.checkstyle.CheckStylePublisher",
    //   checkstyle: "reports/checkstyle.xml",
    //   unstableTotalAll: "10",
    //   failedTotalAll: "5",
    //   usePreviousBuildAsReference: true
    // ])

    // Unit test
    sh "docker run --rm ${imageTag} npm test"
    // step([
    //   $class: "XUnitBuilder",
    //   thresholds: [
    //     [$class: "FailedThreshold", failureThreshold: "1"]
    //   ],
    //   tools: [
    //     [$class: "JUnitType", pattern: "reports/clover.xml"]
    //   ]
    // ])
  }

  if (currentBuild.result == null || currentBuild.result == "SUCCESS") {
    stage("Build image") {
      sh "docker build -t ${imageTag} ."
    }

    stage("Push image to registry") {
      sh "gcloud docker -- push ${imageTag}"
    }

    stage('Deploy application') {
      // Replace variables within deployment files into values provided above
      sh "echo ${env.BRANCH_NAME}"


      switch (env.BRANCH_NAME) {
        case "master":
          sh "echo http://`kubectl --namespace=production get service/${feSvcName} --output=json | jq -r '.status.loadBalancer.ingress[0].ip'` > ${feSvcName}"
          break

        default:
          echo "To access your environment run `kubectl proxy`"
          echo "Then access your service via http://localhost:8001/api/v1/proxy/namespaces/${env.BRANCH_NAME}/services/${feSvcName}:80/"
      }
    }
  }
}