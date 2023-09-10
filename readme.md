# Polling API

#### Table of Contents

- [Introduction](#introduction)
- [Directory Structure](#directory-structure)
- [Environment Variable](#environment-variable)
- [API References](#api-reference)
- [Run Locally](#run-locally)

## Introduction

Polling API is a backend project created using NodeJS, Express and MongoDB. This app allows you to create a poll with multiple option and users can vote those options.

User can Perform following actions:

- Create a new Poll
- Add options to the pole
- Delete the poll entirely
- Delete options
- Vote options

## Directory Structure

```bash
  ├── server
  │   ├── controllers
  │   │     ├── questions_controller.js
  │   │     └── students_controller.js
  │   ├── models
  │   │     ├── question.js
  │   │     └── option.js
  │   ├── routes
  │   │     ├── index.js
  │   │     ├── questions.js
  │   │     └── students.js
  │   ├── config
  │   │     ├── mongoose.js
  │   └── index.js
  ├── package.json
  └── README.md
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file on root directory.

`MONGODB = "<your mongodb connection string>"`

`HOSTED_URL = "<url where the app is hosted>" || "http://localhost:8000"`

## API Reference

### Question:

#### Create new Question

```http
    POST http://localhost:8000/question/create
```

#### Get all Questions

```http
  GET http://localhost:8000/question
```

#### Get Question by Id

```http
  GET http://localhost:8000/question/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Delete Question

```http
  DELETE http://localhost:8000/question/delete/${id}
```

| Parameter | Type     | Description                                  |
| :-------- | :------- | :------------------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch and delete |

#### Add option to Question

```http
  POST http://localhost:8000/question/${id}/add-option
```

| Parameter | Type     | Description                                      |
| :-------- | :------- | :----------------------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch and add option |

### Option:

#### Vote option

```http
    GET http://localhost:8000/option/add-vote/${id}
```

| Parameter | Type     | Description                                       |
| :-------- | :------- | :------------------------------------------------ |
| `id`      | `string` | **Required**. Id of item to fetch and vote option |

#### Delete option

```http
    DELETE http://localhost:8000/option/delete/${id}
```

| Parameter | Type     | Description                                         |
| :-------- | :------- | :-------------------------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch and delete option |

## Run Locally

Clone the project

```bash
  git clone https://github.com/RaghavendraPatel/Placement-Cell.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```
