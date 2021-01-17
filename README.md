# Final Fantasy XI Monitoring

Monitor services and execute scripts on your [project-topaz Final Fantasy XI server](https://github.com/project-topaz/topaz).

#

## Prerequisites

1. [Download and install Node.js if not installed.](https://nodejs.org/)
2. [Download and install MariaDB if not installed.](https://mariadb.org/download/)
3. Create ffxi_mointor_env database.
   - Dev Example
   ```sql
   CREATE DATABASE IF NOT EXISTS ffxi_mointor_dev;
   ```
4. Create development.env and/or production.env based on `.env.example`.
5. Install with `npm i`
6. Run db migrations if not running in dev. (Dev will run migrations on start.)
   - Powershell
   ```powershell
   $env:DB_NAME="db_name_here"; $env:DB_USER="user_here"; $env:DB_PASSWORD="password_here"; npx mikro-orm migration:list
   ```
   - Bash
   ```bash
   DB_NAME=db_name_here DB_USER=user_here DB_PASSWORD=password_here && npx mikro-orm migration:list
   ```

## Commands

### Run Development

```bash
#watch for file changes
npm run watch

#in separate tab start the server
npm run dev
```

### Build for Production

```bash
npm run build
```

### Run Production

```bash
npm run start
```
