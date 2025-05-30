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
