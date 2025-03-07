# Eventrue APP

## Development

## Prerequisites

- Node.js 18.x
- PNPM installed globally (`npm install -g pnpm`)
- tsx installed globally (`npm install -g tsx`)
- A Neon account (or access to a postgresql instance)

### Links

- locale app: http://localhost:3000

### Setup

1. Clone the repository:

```bash
git clone https://github.com/Muugen/evently-app.git
```

2. Install dependencies:

```bash
pnpm install
```

3. Configure environment variables in `.env`:

```bash
DATABASE_URL=""
```

4. Generate the Prisma client:

```bash
pnpm prisma:generate
```

---

## After pulling

### Apply Prisma schema to neon/cloud database

```bash
pnpx prisma migrate dev
```

note: this command will create a new migration file in the `prisma/migrations` directory and it will also generate the Prisma client.

### Seed

- Seed mock data:

```bash
pnpm prisma:seed
```

### Running the Application

- Development mode:

```bash
pnpm dev
```

### Tests

- Run tests:

```bash
pnpm test
```

## Good to know

- if `schema.prisma` changes:

```bash
pnpm prisma:generate
```
