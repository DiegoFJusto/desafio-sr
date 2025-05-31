# Desafio SR - Infraestrutura com CDK na AWS

Este projeto define a infraestrutura necessária para o desafio, utilizando **AWS CDK com TypeScript**.

## ✅ O que já foi feito

- Inicialização do projeto com CDK e TypeScript (`cdk init app --language typescript`)
- Criação de stack chamada `DesafioSrInfraStack`
- Provisionamento de:
  - VPC padrão
  - Cluster ECS
  - Banco de dados RDS MySQL
  - Secrets Manager para armazenar credenciais do banco
  - Auto Scaling configurado
  - Load Balancer (ALB) configurado
- Deploy bem-sucedido na AWS via `cdk deploy`

## 📌 O que ainda será feito

- Criar imagem Docker da aplicação NestJS
- Criar task definition e service no ECS apontando para a imagem
- Configurar variáveis de ambiente e acesso ao banco MySQL
- Configurar domínio e HTTPS (opcional)
- Automatizar CI/CD com GitHub Actions (opcional)
- Realizar testes de acesso e conexão ao banco via aplicação

## 🛠 Comandos úteis

### Git

```bash
# Clonar o repositório
git clone https://github.com/DiegoFJusto/desafio-sr.git

# Verificar status local vs remoto
git status

# Adicionar e commitar alterações
git add .
git commit -m "mensagem do commit"

# Subir alterações para o GitHub
git push

# Compilar TypeScript para JS
npm run build

# Ver o que será criado/alterado
cdk diff

# Deploy na AWS
cdk deploy

# Remover recursos da AWS
cdk destroy

# Verificar diferenças antes do deploy
cdk diff

# Fazer deploy da stack
cdk deploy

# Checar status da stack na AWS
cdk ls

# Ver logs da aplicação ECS
aws logs describe-log-groups

# Kafka Nest API

Este projeto contém uma API em NestJS integrada com Apache Kafka, com objetivo de produzir e consumir mensagens via endpoints HTTP e listeners.

## Tecnologias

- NestJS
- KafkaJS
- @nestjs/microservices
- Docker
- AWS ECS (infra definida com CDK)

## Executar localmente

```bash
docker-compose up -d      # Inicia Kafka local
npm install               # Instala dependências
npm run start:dev         # Roda NestJS com hot reload

# 📦 Kafka NestJS API

Projeto de API utilizando NestJS com integração ao Apache Kafka para comunicação assíncrona baseada em eventos.

---

## 🚀 Tecnologias Utilizadas

- [NestJS](https://nestjs.com/)
- [Kafka](https://kafka.apache.org/)
- [KafkaJS](https://kafka.js.org/)
- [Docker & Docker Compose](https://www.docker.com/)
- [AWS](https://aws.amazon.com/) (estrutura pensada para futura implantação)

---

## ✅ Etapas Concluídas

### 🛠️ Estruturação Inicial do Projeto
- Inicialização do projeto com `NestJS CLI`
- Criação do repositório no GitHub: `kafka-nest-api`
- Configuração do controle de versão com `.gitignore`
- Primeiro commit com estrutura básica da aplicação

### 🐳 Configuração de Ambientes com Docker
- Adição do `docker-compose.yml` contendo os serviços:
  - **Zookeeper**
  - **Kafka**
- Containers sobem com `docker-compose up -d`
- Testes com utilitário `kafkacat` ou `kafka-console-producer` (futuramente)

### ⚙️ Integração Kafka com NestJS
- Adição de suporte a Kafka no `main.ts` como microserviço
- Configuração de `@nestjs/microservices`
- Primeira execução com `npm run start:dev` funcionando sem erros

### 💡 Testes de Rota Padrão
- Criação do `AppController` com rota `GET /`
- Teste local via `curl`:
  ```bash
  curl http://localhost:3000/
