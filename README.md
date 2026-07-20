# WorldScope

<p align="center">
  <img src="./src/assets/appLogo.svg" alt="WorldScope Logo" width="220" />
</p>

<p align="center">
  Explore countries, flags, regions, currencies, languages and borders through a clean and responsive country data platform.
</p>

<p align="center">
  <img alt="React" src="https://img.shields.io/badge/React-v19.1.0-blue" />
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/TypeScript-5-blue" />
  <img alt="Status" src="https://img.shields.io/badge/Status-Desenvolvimento-yellow"/>
</p>

## 📌 Sobre

> Este projeto foi desenvolvido como parte do desafio técnico para a vaga de Desenvolvedor Front-End no Processo Seletivo 2026.2 da **Knex Consultoria Jr.**

<p
**WorldScope** é uma aplicação web para consulta de informações geográficas de países.

O projeto permite pesquisar, filtrar, ordenar e visualizar detalhes de países de forma simples, rápida e responsiva. A proposta é transformar dados geográficos em uma interface limpa, organizada e agradável de usar.

A aplicação consome a **RestCountries API v5**, exibindo dados como bandeira, nome, região, população, moeda, capital, idiomas, fusos horários, área territorial e países fronteiriços.

## ✨ Funcionalidades

### Listagem de países

- Exibição de todos os países em cards
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

- **React** — construção da interface
- **TypeScript** — tipagem estática dos dados e componentes
- **Vite** — ambiente de desenvolvimento e build
- **Tailwind CSS** — estilização responsiva e utilitária
- **React Router DOM** — navegação entre páginas
- **TanStack Query** — cache e gerenciamento de requisições
- **Lucide React** — ícones da interface
- **RestCountries API v5** — fonte dos dados geográficos

---

## 📦 Como rodar

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/worldscope.git
```

### 2. Acesse a pasta do projeto

```bash
cd worldscope-knex-challenge
```

### 3. Instale as dependências do projeto

```bash
npm install
```

### 4. Configure as variáveis de ambiente

Crie um arquivo `.env` na raíz do projeto com base no template `.env.example`.

Preencha as variáveis:

```env
VITE_BASE_URL=https://api.restcountries.com/countries/v5
VITE_API_KEY=sua_chave_da_api
```

### Rode o projeto locamente

```bash
npm run dev
```

A aplicação estará disponível em:

```bash
https://localhost:5173
```
