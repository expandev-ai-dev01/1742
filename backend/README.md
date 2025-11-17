# Catálogo de Carros - Backend API

## Description
Backend API for car catalog application with vehicle listing, details viewing, and contact form functionality.

## Features
- Vehicle listing with filtering and sorting
- Detailed vehicle information
- Contact form submission

## Technology Stack
- Node.js
- Express.js
- TypeScript
- MS SQL Server

## Setup

### Prerequisites
- Node.js 18+
- MS SQL Server

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
```bash
cp .env.example .env
```

4. Update `.env` with your database credentials

5. Run database migrations (SQL scripts in `database/` folder)

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
npm start
```

## API Endpoints

### Health Check
- `GET /health` - Server health status

### API v1
Base URL: `/api/v1`

#### External Routes (Public)
- Available at `/api/v1/external`

#### Internal Routes (Authenticated)
- Available at `/api/v1/internal`

## Project Structure

```
src/
├── api/              # API controllers
├── routes/           # Route definitions
├── middleware/       # Express middleware
├── services/         # Business logic
├── utils/            # Utility functions
├── instances/        # Service instances
└── server.ts         # Application entry point
```

## Environment Variables

See `.env.example` for required environment variables.

## License
ISC
