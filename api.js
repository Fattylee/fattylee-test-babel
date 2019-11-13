import request from 'supertest';
import {app, server} from './server';
import util from 'util';

//const axios = request(server);
//let app ;

beforeEach(() => {
 //app = require('./server').server;
});

afterEach(() => {
 //app.close();
});

describe('Home page route GET /', () => {
    it('should GET /', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .end((err, res) => {
        if(err) return done(err);
        done();
      });
  }); // end it
  
  it('should GET /nums', () => {
     const res = request(app)
     .get('/nums')
     .expect(200)
     .util.promisify(end)
     .then(res => {
       
     
    // ((err, res) => {
      // if(err) return done(err);
       
     expect(res.body).toMatchObject({t:'hhh'});
     //  done();
     
  }); // end it
  
  
}); //end Home page desc