const express = require('express');
const body_parser = require('body-parser');
const routes = require('./routes/routes');
const cors = require('cors');
const server = express();
const PORT = 8080;

/** Use body parser while running the server */
server.use(body_parser.json());

/** Use body parser encoding to request bodies in middleware before using it in my handlers */
server.use(body_parser.urlencoded({ extended: true }));

/** Allow client domain access to server from origin */
server.use(cors({
    origin: 'http://localhost:3000/'
}));

/** Add routes to make client requests to the server */
server.use('/', routes);

/** Listener used to listen to requests or access to the specified port */
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
