const chai = require('chai');
const chaiHttp = require('chai-http');
const {
  TOKEN_HEADER
} = require('../middleware/auth');

chai.use(chaiHttp);

const server = require('../../server');

const should = chai.should();
const STATS_URL = '/api/stats';
const AUTH_URL = '/api/login';

const CORRECT_EMAIL = 'megaache.younes@gmail.com';
const CORRECT_PASS = 'Pink700new';

const tokenHeader = token => ({
  'X-AUTHORIZATION': token
});

describe('stats', () => {

  it('should return unauthorized error', done => {

    chai.request(server).get(STATS_URL).end((err, res) => {
      res.should.have.status(403);
      res.body.should.be.a('string');
      done();
    });

  });

  it('should return unauthorized error', (done) => {
    chai.request(server).get(STATS_URL).set(tokenHeader('wrong-tokna;gflgal;go;an')).end((req, res) => {
      res.should.have.status(403);
      res.body.should.be.a('string');
      done();
    })
  })
  it('should return stats', async () => {

    const credentials = {
      email: CORRECT_EMAIL,
      password: CORRECT_PASS
    };
    let token = await chai.request(server).post(AUTH_URL).send(credentials);
    token = token.text;

    chai.request(server).get(STATS_URL).set(tokenHeader(token)).end((req, res) => {
      res.should.have.status(200);
      res.body.should.be.a('array');
      //  done();
    })
  })

});
