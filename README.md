## Sequelize Migrations
* Why do we need migrations?
* What command allows you to generate a migration file?
  - `sequelize migration:create`
* What do you need to run in the command line in order to run a migration?
  - `sequelize db:migrate`
* How do you revert(undo) a migration?
  - `sequelize db:migrate:undo`
* What is the difference between `up` and `down`?
  - `up`: implements a change to the database
  - `down`: reverts or reverses the change implement by the `up`

## Sequelize Seeds
* What do you need to run in the command line in order to seed your database?
* What command allows you to generate a seed file?
* What format does the seed file have to be in?
* What is the `queryInterface`?
* What issue with `createdAt` and `updatedAt` do you run into?
