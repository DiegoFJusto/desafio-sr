🧠 Desafio Sr. Engenheiro de Infraestrutura

Este projeto foi desenvolvido como resposta a um desafio técnico voltado para uma vaga de engenheiro de infraestrutura.
A proposta envolvia a criação de uma aplicação completa, com frontend em React, backend em Node.js e Kafka como mensageria, utilizando também práticas modernas de infraestrutura com Docker e provisionamento em nuvem (AWS).


🔧 Tecnologias Utilizadas

Frontend: React + Vite + TailwindCSS

Backend: Node.js + Express + KafkaJS

Mensageria: Apache Kafka

Infraestrutura: Docker, Docker Compose, AWS (EC2, S3 opcional)

Banco de Dados: MySQL (provisionado, mas não utilizado diretamente na lógica atual)


🛆 Estrutura do Projeto

desafio-sr/
│
├── backend/            # Aplicação Node.js com Kafka
│   └── src/
│       └── consumer.js
│
├── frontend/           # Aplicação React com Vite
│   └── src/
│       └── components/
│
├── docker-compose.yml  # Orquestra containers (backend, frontend, kafka, zookeeper)
└── README.md


🧽 Integração entre os componentes

graph LR
A[Frontend (React)] -->|POST message| B[Backend (Node.js)]
B -->|Produz mensagem| C[Kafka Topic]
C -->|Consome mensagem| B

Resumo da integração:

O usuário envia mensagens via frontend (React).

O backend (Node.js) recebe e envia a mensagem para o Kafka.

O backend também consome as mensagens do Kafka para processá-las.

A visualização acontece em tempo real no frontend via polling ou response.


❓ Por que o MySQL está presente, mas não utilizado?

O MySQL foi incluído no docker-compose.yml para simular um ambiente real de produção com banco de dados relacional. No entanto, o desafio proposto não exigia persistência de dados, por isso a aplicação não interage com o MySQL atualmente. Ele está disponível para evolução futura do projeto.


🚀 Como executar o projeto localmente

1. Clone o repositório

git clone https://github.com/DiegoFJusto/desafio-sr.git
cd desafio-sr

2. Suba os containers com Docker

docker-compose up --build

Isso criará os serviços: backend, frontend, zookeeper, kafka e mysql.

3. Acesse o frontend

Abra o navegador e acesse:

http://localhost:5173


📆 Build para produção

Se quiser fazer o build do frontend para ambiente de produção (por exemplo, deploy no S3, Vercel, etc):

cd frontend
npm run build

Os arquivos otimizados serão gerados na pasta dist/.


📄 Scripts importantes

# Rodar o frontend em modo dev
cd frontend && npm run dev

# Rodar o backend localmente
cd backend && npm install && node src/index.js


🌐 Deploy na AWS (exemplo)

O projeto pode ser hospedado em uma instância EC2 com Docker ou o frontend pode ser enviado para o S3 (como site estático). O backend pode ser exposto via Nginx reverso em EC2.


📌 Possíveis melhorias e escalabilidade

Integração com MySQL para persistência das mensagens

Autenticação no frontend

Exibir mensagens em tempo real via WebSocket

Monitoramento com Prometheus e Grafana

