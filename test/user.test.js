process.env.NODE_ENV = 'test'

//let mongoose = require("mongoose");
let User = require('../models/user.model');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let expect = chai.expect;

chai.use(chaiHttp);

describe('Users', () => {
    beforeEach((done) => {  //Before each test we empty the database
        User.deleteMany({}, (err) => {
          if(err) done(err);
          done();           
        });        
    });
  
  //Test GET for users
  describe('/GET user', () => {
      it('GET all the users', (done) => {
        chai.request(server)
            .get('/users')
            .end((err, res) => {
              if(err){
                done(err)
              }
              expect(res).to.have.status(200)
              expect(res.body).to.eql([])
              done()
            });
      });
  });

  //Test for /POST user/add
  describe('/POST user', () => {
    it('POST a user at users/add', (done) => {
      const newUser = new User({username:"test user"});
      chai.request(server)
      .post('/users/add')
      .send(newUser)
      .end((err, res) => {
        if(err){
          done(err)
        }
        expect(res).to.have.status(200)
        done();
      });
    });
  });
});