# WorldScope

<p align="center">
  <img src="./src/assets/appLogoDark.svg" alt="WorldScope Logo" width="220" />
</p>

<p align="center">
  Explore countries, flags, regions, currencies, languages and borders through a clean and responsive country data platform.
</p>

<p align="center">
  <img alt="React" src="https://img.shields.io/badge/React-v19.1.0-blue" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-blue" />
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/TailwindCSS-v4-38BDF8" />
  <img alt="Status" src="https://img.shields.io/badge/Status-Development-yellow" />
</p>

## 📌 Sobre

> Este projeto foi desenvolvido como parte do desafio técnico para a vaga de **Desenvolvedor Front-End** no Processo Seletivo 2026.2 da **Knex Consultoria Jr.**

**WorldScope** é uma aplicação web para consulta de informações geográficas de países.

O projeto permite pesquisar, filtrar, ordenar e visualizar detalhes de países de forma simples, rápida e responsiva. A proposta é transformar dados geográficos em uma interface limpa, organizada e agradável de usar.

A aplicação consome a **RestCountries API v5**, exibindo dados como bandeira, nome, região, população, moeda, capital, idiomas, fusos horários, área territorial e países fronteiriços.

## 🚀 Deploy

🔗 **Acesse o projeto:** [https://worldscope-navy.vercel.app](https://worldscope-navy.vercel.app)

## ✨ Funcionalidades

### Listagem de países

- Exibição de países em cards
- Bandeira, nome, região, população e moeda principal
- Busca por nome em tempo real
- Filtro por região
- Ordenação por nome e população
- Paginação dos resultados

### Página de detalhes

- Bandeira do país
- Nome comum e nome oficial
- Capital
- Região e sub-região
- População
- Área territorial
- Moedas
- Idiomas falados
- Fusos horários
- Países fronteiriços clicáveis

## 🛠️ Tecnologias

- **React** — utilizado para construir a interface em componentes reutilizáveis.
- **TypeScript** — utilizado para tipar os dados da API, props dos componentes e funções auxiliares, reduzindo erros durante o desenvolvimento.
- **Vite** — escolhido pelo setup simples, build rápido e boa integração com React.
- **Tailwind CSS** — utilizado para criar uma interface responsiva, consistente.
- **React Router DOM** — utilizado para controlar a navegação entre a listagem de países e a página de detalhes.
- **TanStack Query** — gerenciador de requisições, estados de carregamento, erros e cache dos dados. Como os dados de países mudam com pouca frequência, o cache ajuda a reduzir chamadas desnecessárias à API. O trade-off é adicionar uma dependência extra, mas com ganho em organização e performance percebida.
- **Lucide React** — utilizado para ícones leves e consistentes na interface.
- **RestCountries API v5** — fonte dos dados geográficos exibidos pela aplicação.

---

## 📦 Como rodar

### 1. Clone o repositório

```bash
git clone https://github.com/not2nder/worldscope-knex-challenge.git
```

### 2. Acesse a pasta do projeto

```bash
cd worldscope-knex-challenge
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Configure as variáveis de ambiente

Crie um arquivo `.env` na raíz do projeto com base no template `.env.example`.

```bash
VITE_BASE_URL=https://api.restcountries.com/countries/v5
VITE_API_KEY=sua_chave_da_api
```

### 5. Rode o projeto localmente

```bash
npm run dev
```

A aplicação estará disponível em: `http://localhost:5173`

## 🗂️ Estrutura do Projeto

```txt
src/
├── assets/         Logos e arquivos estáticos usados pela UI
├── components/     Componentes reutilizáveis de UI
├── hooks/          Hooks customizados da aplicação
├── layouts/        Estruturas visuais compartilhadas entre páginas
├── pages/          Páginas principais da aplicação
├── routes/         Configuração das rotas da aplicação
├── services/       Comunicação com APIs externas
├── styles/         Estilos globais
├── types/          Tipagens TypeScript compartilhadas
├── utils/          Funções auxiliares e regras puras
├── App.tsx         Componente raiz da aplicação
└── main.tsx        Ponto de entrada do React
```
