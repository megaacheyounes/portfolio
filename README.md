# [Online Resume](http://megaache-younes.herokuapp.com)

My personal website (online resume) built on Angular and NodeJS based on the MEAN stack.

## run locally

1. Start the server with command: `npm start` or `node server.js`
2. In different terminal, start angular app: `ng serve -o`

## Env

copy `.env.example` and rename it to `.env`, then add your own information.

- CONTACT_EMAIL: The email that will the messages sent through the contact form.
- MONGODB_URL: mongodb url to save statistics which include website view,user agent, location..., must be of the following format: mongodb://**username**:**password**@**host**:**port**/**databaseName**.
- SENDGRID_API_KEY: SendGrid api key to send messages of the contact form to your email.

## Front End (Angular)

Information like education, experiences, projects... can be set in the config files at **src/app/main/config**.
Resume (CV) and some assets (profile picture/sidebar background(portrait)) were not uploaded. see `.gitignore` for more details.
 
## Server Side (Nodejs)

Server side code is in folder **server**, include code for download resume (CV), resume must be uploaded to **/server/files** , you can change the name of file in **/server/controllers/cv.js**, go to .

Message will be sent to your email using **nodemailer**, set your email address and as environment variable names **CONTACT_EMAIL** which will receive the message, and add an email address and password which will be used to send the message as an email to your **CONTACT_EMAIL**, sending email should be set to env variable names **NODEMAILER_EMAIL** and its password **NODEMAILER_PASSWORD**

## Tests

To test the API (backend code), run the command: `npm test`, no tests are included for the front-end.

## Contributing

All kind of contributions are welcome, feel free to fix bugs, tweak design and improve documentation.

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
