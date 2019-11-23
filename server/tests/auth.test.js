const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const should = chai.should();

const server = require('../../server');

const URL = '/api/login';

const CORRECT_EMAIL = 'megaache.younes@gmail.com';
const CORRECT_PASS = 'Pink700new';

const CREDENTIAL_INVALID_EMAIL = {
  email: 'asfasdfasdfasdf.com',
  password: 'afasdfsadf'
}

const CREDENTIAL_INVALID_PASS = {
  email: CORRECT_EMAIL,
  password: 'toooooooooooooooooooooooooooooooooooooooLong'
}

const CREDENTIAL_WRONG_PASS = {
  'email': CORRECT_EMAIL,
  password: 'wrongPassword'
}

const CREDENTIAL_WRONG_EMAIL = {
  email: 'wrong.email@gmail.com',
  password: 'asdfasf'
}

const CREDENTIAL_CORRECT = {
  email: CORRECT_EMAIL,
  password: CORRECT_PASS
}

describe('/api/login', () => {

  let payloads = [CREDENTIAL_INVALID_EMAIL, CREDENTIAL_INVALID_PASS];

  payloads.forEach(payload => {
    it('should return validation errors', (done) => { //validation

      chai.request(server).post(URL).send(payload).end((req, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        res.body.should.include.keys('errors');
        done();
      });

    });

  });

  payloads = [CREDENTIAL_WRONG_EMAIL, CREDENTIAL_WRONG_PASS];
  payloads.forEach(payload => {
    it('should return auth errors', (done) => { //wrong credentials

      chai.request(server).post(URL).send(payload).end((req, res) => {
        res.should.have.status(401);
        res.body.should.be.a('string');
        done();
      });

    });

  });

  it('should return valid token', (done) => { //valid and correct credentials

    chai.request(server).post(URL).send(CREDENTIAL_CORRECT).end((req, res) => {

      res.should.have.status(200);
      res.body.should.be.a('object');
      res.body.should.include.keys('token');
      done();
    });

  });
})
