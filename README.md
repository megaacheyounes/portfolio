# [Online Resume](http://megaache-younes.herokuapp.com)

My personal website (online resume) built on Angular and NodeJS based on the MEAN stack.

## run locally

1. Start the server with command: `npm start` or `node server.js`
2. In different terminal, start angular app: `ng serve -o`

## Env

copy `.env.example` and rename it to `.env`, then update the variables inside the file as follow:

- CONTACT_EMAIL: The email that will the messages sent through the contact form.
- MONGODB_URL: the website will collect basic analytics which include website view,user agent, location..., I use free MongoDB database called Atlas DB, the URL must be of the following format: mongodb://**username**:**password**@**host**:**port**/**databaseName**.
- NODEMAILER_EMAIL: email address that will be used to send contact form messages to your contact email
- NODEMAILER_PASSWORD: password for **NODEMAILER_EMAIL**, required to authenticate and send emails

## Front End (Angular)

Information like education, experiences, projects... can be set in the config files at `src/app/main/config`.

Assets like profile picture, sidebar background(portrait) can be found in `src/assets`.

## Server Side (Nodejs)

Server side code can be found in folder `server`

Upload your cv to `/server/files`, the name of the file must with `.cv.pdf`, or update the name of cv in `/server/controllers/cv.js`.

Message from contact from will be sent to your email using **nodemailer**, in `.env` file set the sending and receiving email:

- **CONTACT_EMAIL**: which will be the email to receive the messages
- **NODEMAILER_EMAIL** and **NODEMAILER_PASSWORD**: which will be used to send messages as email to **CONTACT_EMAIL**

## Tests

To test the API (server side code), run the command: `npm test`.
No tests are included for the front-end.

## Contributing

All kind of contributions are welcome.

## License

```txt
   Copyright 2021 Younes Megaache

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.

```
