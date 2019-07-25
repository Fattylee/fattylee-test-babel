import express from 'express';
import request from 'supertest'
const app = express();

let num = 0;
app.get('/*', (req, res) => {
  res.send(`all route: ${++num}`)
})


const port = 8003;
let server ;




beforeEach(() => {
  server = app.listen(port, console.log('server running on port', port));
});

afterEach(() => {
  server.close();
})
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
  it('should GET /gggh', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .end((err, res) => {
        if(err) return done(err);
        done();
      });
  }); // end it
  
  
}); //end Home page