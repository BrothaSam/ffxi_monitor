# Final Fantasy XI Monitoring

Monitor services and execute scripts on your [project-topaz Final Fantasy XI server](https://github.com/project-topaz/topaz).

#  
## Prerequisites
1. [Download and install Node.js](https://nodejs.org/)
2. [Download and install Sqlite](https://www.sqlitetutorial.net/download-install-sqlite/)
3. Create /prisma/dev.db and /prisma/prod.db 
4. Create .env.local and/or .env.development.local, referencing .env.local.example. 
    - https://nextjs.org/docs/basic-features/environment-variables
5. Install with ``` npm i ```
6. Create database with ``` npx prisma migrate dev --preview-feature ```

## Commands
### Run Development
```bash
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