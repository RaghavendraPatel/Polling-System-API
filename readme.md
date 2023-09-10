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

Set API_URL to the url where the app is hosted. If you are running the app locally, set it to http://localhost:8000

`API_URL = "<url where the app is hosted>" || "http://localhost:8000"`

## API Reference

API is hosted on render.com and can be accessed using base url: https://polling-api-raghavendra.onrender.com/

If you are running the app locally, use base url: http://localhost:8000

Use base url as prefix for all the below mentioned endpoints.

e.g. https://polling-api-raghavendra.onrender.com/question or http://localhost:8000/question

### Question:

#### Create new Question

```http
    POST /question/create
```

#### Get all Questions

```http
  GET /question
```

#### Get Question by Id

```http
  GET /question/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Delete Question

```http
  DELETE /question/delete/${id}
```

| Parameter | Type     | Description                                  |
| :-------- | :------- | :------------------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch and delete |

#### Add option to Question

```http
  POST /question/${id}/add-option
```

| Parameter | Type     | Description                                      |
| :-------- | :------- | :----------------------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch and add option |

### Option:

#### Vote option

```http
    GET /option/add-vote/${id}
```

| Parameter | Type     | Description                                       |
| :-------- | :------- | :------------------------------------------------ |
| `id`      | `string` | **Required**. Id of item to fetch and vote option |

#### Delete option

```http
    DELETE /option/delete/${id}
```

| Parameter | Type     | Description                                         |
| :-------- | :------- | :-------------------------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch and delete option |

## Run Locally

Clone the project

```bash
  git clone https://github.com/RaghavendraPatel/Polling-System-API.git
```

Go to the project directory

```bash
  cd Polling-System-API
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```
