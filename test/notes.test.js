process.env.NODE_ENV = 'test'

//let mongoose = require("mongoose");
let Note = require('../models/note.model');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let expect = chai.expect;

chai.use(chaiHttp);

describe('Notes', () => {
    beforeEach((done) => {  //Before each test we empty the database
        Note.deleteMany({}, (err) => {
          if(err) done(err);
          done();           
        });        
    });

    // To test GET/ for notes
    describe('/GET all notes', () => {
        it('GET all the notes', (done) => {
          chai.request(server)
              .get('/notes')
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
  
    //Test for /POST notes/add
    describe('/POST a note', () => {
      it('POST a note at notes/add', (done) => {
        const newNote = new Note({
            username:"test user",
            title:"test title",
            description:"test description"
          });
        chai.request(server)
        .post('/notes/add')
        .send(newNote)
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