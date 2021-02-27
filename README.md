# Pair Yo' Pet

[![Contributors](https://img.shields.io/github/contributors/markhv-code/pair-yo-pet)](https://www.github.com/markhv-code/pair-yo-pet/contributors)
[![Open Issues](https://img.shields.io/github/issues/markhv-code/pair-yo-pet)](https://www.github.com/markhv-code/pair-yo-pet/issues)
[![Forks](https://img.shields.io/github/forks/markhv-code/pair-yo-pet)](https://www.github.com/markhv-code/pair-yo-pet/forks)
[![Stars](https://img.shields.io/github/stars/markhv-code/pair-yo-pet)](https://www.github.com/markhv-code/pair-yo-pet/stars)

## What is it?

Pair Yo' Pet is a clone of the popular web app [OKCupid](https://www.okcupid.com/) with an fun pet lovin' twist. 

## Developing

To run this application locally, you'll need to:

1. `git clone` this repo
2. `cd` into the local repo
3. `npm install` to install the dependencies
4. Create a `.env` file based on the `.env.example` file included in the repo with your own values
5. Create a user on your local machine with the username and password specified in your `.env` file in PostgreSQL
6. Run `npx dotenv sequelize db:create` to create the database
    * If the `sequelize` module is not found, try running `npx dotenv sequelize-cli db:create` and replace `sequelize` with `sequelize-cli` for the rest of these commands
7. Run `npx dotenv sequelize db:migrate` to run the migrations
8. Run `npx dotenv sequelize db:seed:all` to seed the database
9. Finally, start the development server with `npm start`. The scripts in the `package.json` should do the work. You'll see the local address you can use show up in the terminal.

## Technologies Used

* Python
* PostgreSQL
* SQLAlchemy
* React
* Redux
* JavaScript
* Vanilla CSS
* Node.js

## Live Site

[Here's](https://https://pairyopet.herokuapp.com//) a link to our live app!

## Documentation

[Here's](https://github.com/markhv-code/pair-yo-pet/wiki/) a link to our Wiki!

## Features

Users can:
- View open pets and choose to connect

## Challenges

Some of our challenges included:
- Too many to count

## Best Snippets

Include some cool code on page at `/route`.
```js
a = 1
b = 1

a is b
true
```
