# Catálogo de Carros

Listagem de carros, onde ao clicar no card consigo ver detalhes e preencher um formulário de contato.

## Tecnologias

- React 19.2.0
- TypeScript 5.6.3
- Vite 5.4.11
- React Router DOM 7.9.3
- TanStack Query 5.90.2
- Tailwind CSS 4.1.17
- React Hook Form 7.63.0
- Zod 4.1.11

## Estrutura do Projeto

```
src/
├── assets/          # Estilos globais
├── core/            # Componentes e utilitários compartilhados
│   ├── components/  # Componentes UI genéricos
│   ├── lib/         # Configurações de bibliotecas
│   └── utils/       # Funções utilitárias
├── domain/          # Domínios de negócio
├── layouts/         # Layouts da aplicação
├── pages/           # Páginas da aplicação
└── router/          # Configuração de rotas
```

## Instalação

```bash
npm install
```

## Configuração

1. Copie o arquivo `.env.example` para `.env`:
```bash
cp .env.example .env
```

2. Configure as variáveis de ambiente no arquivo `.env`:
```
VITE_API_URL=http://localhost:3000
VITE_API_VERSION=v1
VITE_API_TIMEOUT=30000
```

## Desenvolvimento

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Funcionalidades

- **Listagem de carros**: Exibição de todos os veículos disponíveis no catálogo
- **Detalhes do veículo**: Visualização completa das informações do carro
- **Formulário de contato**: Manifestação de interesse e contato com a empresa

## Estrutura de Rotas

- `/` - Página inicial com listagem de carros
- `/carros/:id` - Página de detalhes do veículo

## API

O frontend se comunica com o backend através de duas bases de URL:

- **Public API** (`/api/v1/external`): Endpoints públicos
- **Authenticated API** (`/api/v1/internal`): Endpoints autenticados