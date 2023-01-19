# decoupled-pern-jwt-auth-template-back-end 

## Getting Started
```
npm i
touch .env
npx sequelize-cli db:migrate
```


## Quick reference

Command to create a model (generates model and migration):
```
npx sequelize-cli model:generate --name User --attributes name:string,email:string,password:string
npx sequelize-cli model:generate --name Profile --attributes name:string,photo:string,userId:integer
```

Command to run migrations (updates the database):
```
npx sequelize-cli db:migrate
```

Command to create migrations:
```
npx sequelize-cli migration:generate --name name-of-migration
```


## Alex Merced Writeup:

[Original Repo](https://github.com/AlexMercedCoder/model-express-app/tree/api-postgres-auth)

This branch shows an express app that deliver a JSON API with CRUD functionality using a Postgres Database with the Sequelize ORM.

This API implement multi-user JWT token authentication.

Keep in mind you'll need to run migration, documentation can be found here on how:

https://sequelize.org/docs/v6/other-topics/migrations/#running-migrations

The models/migration folders reflect setting up models using the sequelize CLI, the models_ folder represents writing out a database connection and models manually which requires to pre-make tables.

|Route|Method|Path|Response|
|-----|------|----|--------|
|Index|GET|/todo| returns all todos as json |
|Show|GET|/todo/:id| returns a single todo as json |
|Create|POST|/todo| receives json body, creates new todo, returns updated list of todos |
|Update|PUT|/todo/:id| receives json body, updates todo, returns updated list as json |
|Destroy|Delete|/todo/:id| Deletes a todo and returns updated list as json |

checkout comments for more details

Any variables like `process.env.PORT` are assumed to have been defined in a .env file like so...

```
PORT=4000
```