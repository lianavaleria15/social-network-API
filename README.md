# Social Network API

An application builds an API for a social network where users can share their thoughts, react to friends' thoughts and create a friend list. It uses Express.js.

## Table of Contents

- [Social Network API](#social-network-api)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Demo](#demo)
  - [User Story](#user-story)
  - [Technical steps](#technical-steps)
  - [Getting Started](#getting-started)
    - [Installation](#installation)
      - [Clone repository](#clone-repository)
      - [Install packages](#install-packages)
    - [Usage](#usage)
      - [Seed the data](#seed-the-data)
    - [Test requests](#test-requests)
  - [Packages used](#packages-used)
  - [Contributing & Questions](#contributing--questions)

## Description

A backend application which provides an API for a social network web application where users can share their thoughts, react to friend's thoughts and create a friend list. It uses Express.js for routing, MongoDB for data storage and Mongoose ODM. Timestamps were formatted using Date-fns package.

A Postman collection file contains the seeded data.

## Demo

Click [here](https://drive.google.com/file/d/13CYqop9OyAED9ZENxZVzFYK9P-SrVL59/view) to watch the demo for `users` and `thoughts` routes.
Click [here](https://drive.google.com/file/d/1xzO68pYh-APUTBENMmBKZLyUNbOhrKIu/view) to watch the demo for `reactions` and `friends` routes.

## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Technical steps

- created `user` and `thought` models, together with `reaction` schema
- created virtuals to calculate total number of `reactions` for each `thought` and total number of `friends` for `user`
- created `API` routes and correspondent controller functions to `get all` users and thoughts, `get` user and thought by id, `create` user, thought, reaction and friend, `update` user, thought, reaction and friend, `delete` user, thought, reaction and friend
- synced Sequelize to MongoDB database using Mongoose
- tested all routes in Postman and attached a postman collection to the repo

## Getting Started

### Installation

To run and test the application, you will need to have [node.js](https://nodejs.org/en/) and [PostMan](www.postman.com) installed.

#### Clone repository

`git@github.com:lianavaleria15/social-network-API.git`

#### Install packages

- use `npm init -y` to install package.json

### Usage

- run `npm run start` in the terminal to connect to the server

#### Seed the data

- run `npm run seed` in the terminal to seed data to your database so that you can test your routes

### Test requests

- run `GET`, `POST`, `PUT` & `DELETE` requests using Postman.

## Packages used

- Node.js
- Sequelize
- MongoDB
- Mongoose
- Date-fns

## Contributing & Questions

If you have any questions related to the application or repository, would like to collaborate or open an issue, please use the contact details below:

- 👩 [Liana Laurentiu](https://github.com/lianavaleria15)
- 📧 [liana.valeria15@gmail.com](mailto:liana.valeria15@gmail.com)
