const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

const postRoutes = require('./routes/posts')


server.use('/posts', postRoutes)


// Root route
server.get('/', (req, res) => res.send('Hello, world!'))

module.exports = server