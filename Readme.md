# Sample JWT authentication structure

Hello all,
This REST API is a simple way of handling authentication using JWT tokens. Keep reading for more details 👇. Cheers!

## To get this project up and running

    git clone https://github.com/emilsharier/jwt-auth
    npm install

__NOTE__! If you're running the project in dev mode, make sure you create a .env file which would consist of the following

    SECRET=<Some secret private key>
    DATABASE_URL=<Database URL>

### Dev mode

    npm run dev

### Release

    npm start

## npm modules I used

    express (To handle all HTTP requets and responses)
    jsonwebtoken (Middleware to validate and verify JWT tokens)
    bcrypt (For enrypting and hashing the password using a private key)
    morgan (Logging middleware)
    sequelize (An ORM so that you can implement the database of your choice)
    pg (In my case I decided to use PostgreSQL)

## Request endpoints

__POST__ methods

1. __/signup__

### Request body

The request body should contain the following details. You can choose to pass them as _x-www-form-urlencoded_ parameters.

- email
- password
- name
- phone

### Response

The response can be either of the three status codes
- 200 - OK (Registration successful)
- 401 - Unrecognized error (Mostly database/internal error)
- 403 - Email already exists

2. __/signin__

### Request body

The request body should contain the following details. You can choose to pass them as _x-www-form-urlencoded_ parameters.

- email
- password

### Response

The response can be eithre of the three status codes
- 200 - OK (The response body would contain the access token that the client can store and later use to send requests)
- 403 - Error (When the user is not registered or when the access token isn't attached on the request header)
- 401 - Unauthorized (Wrong password)

## Screenshots

#### Sign up

![Sign up](/screenshots/sign_up.jpg "Sign up running in localhost (dev mode)")

#### Sign in

![Sign in](/screenshots/sign_in.jpg "Sign in running in localhost (dev mode)")

### Misc

All Pull requests and issues are welcome. If you feel something's wrong fork and issue a PR or just put up a new issue!

Cheers!