# Desafio SR - Infraestrutura com CDK (AWS)

Este projeto configura a infraestrutura da aplicação utilizando **AWS CDK** com **TypeScript**.

---

## ✅ Etapas já concluídas

1. Criação do repositório GitHub [`desafio-sr`](https://github.com/DiegoFJusto/desafio-sr)
2. Setup de projeto CDK com TypeScript (`cdk init app --language typescript`)
3. Criação de:
   - VPC padrão
   - Cluster ECS (Fargate)
   - Banco de dados RDS (MySQL)
   - Secrets para senha do banco
   - Security Groups e Subnets
4. Link com repositório GitHub
5. Deploy inicial com `cdk bootstrap` e `cdk deploy`

---

## 📦 Comandos úteis

```bash
# Instalar dependências
npm install

# Ver stacks disponíveis
cdk ls

# Compilar o TypeScript
npm run build

# Preparar a conta AWS (necessário apenas 1x por região)
cdk bootstrap

# Fazer deploy da infraestrutura
cdk deploy

# Ver estado atual da stack
cdk diff

# Desfazer (destroy) a infraestrutura provisionada
cdk destroy
