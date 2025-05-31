# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

Kafka React Client Frontend
Frontend em React com Vite que consome dados via Kafka. Utiliza Tailwind CSS para estilização.

🚀 Tecnologias utilizadas
React 18

Vite (build tool)

Tailwind CSS (CSS utilitário)

Kafka (para comunicação)

Node.js / npm

📋 Pré-requisitos
Node.js (versão recomendada >= 18.x)

npm (versão recomendada >= 9.x)

Kafka broker rodando (para comunicação do backend)

Backend Kafka Client disponível e configurado

🔧 Instalação e execução local
Clone este repositório:

bash
Copiar
Editar
git clone <url-do-repositorio>
cd kafka-react-client/frontend
Instale as dependências:

bash
Copiar
Editar
npm install
Configure as variáveis de ambiente caso existam (exemplo .env):

env
Copiar
Editar
VITE_KAFKA_BROKER=localhost:9092
VITE_KAFKA_TOPIC=meu-topico
Obs: Ajuste conforme a configuração do seu backend e Kafka.

Rode o projeto em modo desenvolvimento:

bash
Copiar
Editar
npm run dev
Abra o navegador em:

arduino
Copiar
Editar
http://localhost:5173/
⚙️ Build para produção
Para gerar os arquivos otimizados para produção:

bash
Copiar
Editar
npm run build
Os arquivos ficarão na pasta dist/.

🧹 Scripts disponíveis
Script	Descrição
npm run dev	Inicia o servidor de desenvolvimento
npm run build	Gera build para produção
npm run preview	Preview da build gerada

📝 Configurações importantes
O Tailwind CSS está configurado via PostCSS.

O projeto usa módulos ES ( "type": "module" no package.json ).

O backend Kafka precisa estar rodando e acessível conforme as variáveis de ambiente.

📚 Referências úteis
Vite

React

Tailwind CSS

Apache Kafka

