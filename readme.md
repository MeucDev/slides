# Slides

- Create a copy of `.env.example` and rename it to `.env`

## Database instance

- Run `docker compose up -d` on the root folder of the project
  - This is used to run our PostgreSQL instance, as well as an Adminer to access the database from the browser when required

## API

- Run `npm install` and `npm run start` in the `/api` folder of the project
  - Alternatively, `npm run start:dev` has the "watch" feature to schek for changed files
- Access the Swagger documentation by going to the `localhost:3000/api` URL

## App

- Run `npm install` and `npm start` in the `/app` folder of the project
- Access the home page by going to the `localhost:4200` URL
