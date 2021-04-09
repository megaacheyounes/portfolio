 const chai = require('chai');
 const chaiHttp = require('chai-http');
 const server = require('../../server.js');
 const should = chai.should();
 const _ = require('lodash');
 chaiHttp.use
 chai.use(chaiHttp);

 const SUCCESS_MESSAGE = "email was sent successfully.";
 const FIELD_MISSING = field => `'${field}' is missing!`;

 const URL = '/api/contact';

 const mockParams = {
   name: 'jogn doe',
   email: 'johndoe@gmail.com',
   subject: 'lorem ispum dolor sit',
   message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, pariatur ut! Beatae non laborum, maiores minus repudiandae officia ratione nam!'
 };


 describe('/api/contact', () => {
   it("should send message", (done) => {
     chai.request(server).post(URL).send(mockParams).end((err, res) => {

       res.should.have.status(200);
       res.body.should.be.a('string');
       res.body.should.eql(SUCCESS_MESSAGE)

       done();
     });
   });

   ['name', 'subject', 'email', 'message'].forEach(field => {

     it(`should send error message when ${field} is missing`, (done) => {

       const nameShortMockParams = _.omit(mockParams, field);
       chai.request(server).post(URL).send(nameShortMockParams).end((err, res) => {

         res.should.have.status(400);
         res.body.should.be.a('string');
         res.body.should.eql(FIELD_MISSING(field))

         done();
       });
     });

   })




 })
