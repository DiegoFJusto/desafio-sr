# 🖥️ Kafka React Client

Frontend simples criado com **React + TypeScript + TailwindCSS** utilizando **Vite**. Este cliente consome uma API construída com NestJS, que se comunica com o Apache Kafka para envio e consumo de mensagens.

---

## 🚀 Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/) para requisições HTTP

---

## 🎯 Funcionalidades

- ✅ Envio de mensagens para a API NestJS (e consequentemente para um tópico Kafka)
- ✅ Exibição das mensagens processadas recebidas do Kafka
- ✅ Layout simples e responsivo com Tailwind
- ✅ Tratamento de erros e feedback para o usuário
- ✅ Comentários no código explicando cada etapa
- 🚧 Monitoramento básico de falhas no frontend (em breve)

---

## 🛠️ Instalação e Execução

```bash
# A partir da raiz do projeto, acesse o diretório do frontend:
cd kafka-react-client

# Instale as dependências:
npm install

# Rode o servidor de desenvolvimento:
npm run dev
