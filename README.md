# Service Name

Cognitive Quiz [Service Type] Service

## Overview

Brief description of this service's purpose in the CogQuiz platform.

## Tech Stack

- Node.js / Express
- TypeScript
- PostgreSQL (via Prisma)
- Docker

## Getting Started

```bash
# Install dependencies
npm install

# Run in development
npm run dev

# Run tests
npm test

# Build for production
npm run build
```

## Docker

```bash
# Build image
docker build -t cogquiz-[service-name] .

# Run container
docker run -p 3000:3000 cogquiz-[service-name]
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| PORT | Server port | Yes |
| DATABASE_URL | PostgreSQL connection string | Yes |
| JWT_SECRET | Secret for JWT signing | Yes |

## License

MIT
