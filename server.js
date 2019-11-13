import express from 'express';
const app = express();

let nums = [1,4,7,5];
app.get('/', (req, res) => {
  res.status(200).send(`all route: ${++nums}`)
})
app.get('/nums', (req, res) => {
  res.status(200).send({t:'hhh'})
})


const port = 5000;
let server = app.listen(port, console.log('server running on port', port));

exports.app = app;
exports.server = server;