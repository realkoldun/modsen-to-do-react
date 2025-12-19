pipeline {
    agent any

    tools {
        nodejs "NodeJS_18"
        yarn "Yarn_1"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install dependencies') {
            steps {
                sh 'yarn install --frozen-lockfile'
            }
        }

        stage('Lint') {
            steps {
                sh 'yarn lint:es'
            }
        }

        stage('Test') {
            steps {
                sh 'yarn test --ci --coverage'
            }
            post {
                always {
                    junit 'coverage/jest-junit.xml' // если используешь jest-junit репортер
                }
            }
        }

        stage('Build') {
            steps {
                sh 'yarn build'
            }
            post {
                success {
                    archiveArtifacts artifacts: 'dist/**', fingerprint: true
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished'
        }
        success {
            echo 'Build and tests passed!'
        }
        failure {
            echo 'Pipeline failed'
        }
    }
}
