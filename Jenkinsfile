pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
                echo "Ветка: ${env.BRANCH_NAME}"
                echo "Билд: ${env.BUILD_NUMBER}"
                echo "Ссылка на билд: ${env.BUILD_URL}"
            }
        }

        stage('Check Node Version') {
            steps {
                bat 'node --version'
                bat 'npm --version'
            }
        }

        stage('Lint') {
            steps {
                // В Windows нет "|| true", поэтому используем exit 0
                bat 'npm run lint || exit 0'
            }
        }

        stage('Test') {
            steps {
                bat 'npm run test'
            }
        }

        stage('Build') {
            when {
                anyOf { branch 'develop'; branch 'main' }
            }
            steps {
                bat 'npm run build'
                echo 'Приложение собрано в dist/'
            }
        }

        stage('Archive Artifacts') {
            when { branch 'main' }
            steps {
                archiveArtifacts artifacts: 'dist/**', fingerprint: true
                echo 'Артефакты сохранены'
            }
        }

        stage('Deploy to Staging') {
            when { branch 'develop' }
            steps {
                echo '=== ДЕПЛОЙ НА STAGING ==='
                echo 'В реальном проекте здесь деплой на staging-сервер'
            }
        }

        stage('Deploy to Production') {
            when { branch 'main' }
            steps {
                input message: 'Одобрить деплой в ПРОДАКШЕН?', ok: 'Да'
                echo '=== ДЕПЛОЙ В ПРОДАКШЕН ==='
                echo 'Приложение задеплоено в продакшен!'
            }
        }
    }

    post {
        always {
            cleanWs()
        }
        success {
            echo 'Пайплайн успешно завершён!'
        }
        failure {
            echo 'Пайплайн упал!'
        }
    }
}
