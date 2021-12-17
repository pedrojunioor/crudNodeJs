const express = require('express');
const dotenv = require('dotenv');
const routes = require('./routes');

dotenv.config({path : 'src/.env'});

const port  = process.env.PORT;

const app = express();

app.use(express.json());

app.use(routes);

app.listen(port, () =>{
    console.log('listening on port', port)
});
