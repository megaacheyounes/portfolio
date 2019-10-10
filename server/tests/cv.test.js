const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../server.js');
const _ = require('lodash');

const should = chai.should();
chai.use(chaiHttp);

const CONTENT_TYPE_HEADER = 'content-type';
const CONTENT_LENGTH_HEADER = 'content-length';
const CVs = ['softwareEngineer', 'androidDeveloper', 'webDeveloper'];

const CV_SIZES = {
  'softwareEngineer': '186541',
  'androidDeveloper': '78787',
  'webDeveloper': '84205'
}

const CV_URL = type => `/cv?type=${type}`;

describe('/cv', () => {

  CVs.forEach(cv => {

    it(`should return ${cv} cv`, (done) => {
      chai.request(server).get(CV_URL(cv)).end((err, res) => {

        res.should.have.status(200);
        res.should.have.header(CONTENT_TYPE_HEADER);
        res.header[CONTENT_TYPE_HEADER].should.eql('application/pdf');

        res.should.have.header(CONTENT_LENGTH_HEADER);
        res.header[CONTENT_LENGTH_HEADER].should.eql(CV_SIZES[cv]);

        done();
      });
    });

  })


})
