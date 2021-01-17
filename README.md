# Final Fantasy XI Monitoring

Monitor services and execute scripts on your [project-topaz Final Fantasy XI server](https://github.com/project-topaz/topaz).

#  
## Prerequisites
1. [Download and install Node.js if not installed.](https://nodejs.org/)
2. [Download and install MariaDB if not installed.](https://mariadb.org/download/)
3. Create 'ffxi_monitor_\<env>' database.
    - ```CREATE DATABASE IF NOT EXISTS ffxi_mointor_dev;```
4. Create development.env and/or production.env based on ```.env.example```.
5. Install with ``` npm i ```

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