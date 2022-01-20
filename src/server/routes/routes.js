/** Controllers used to handle requests made to the specified routes */
const {
    load_collection,
    load_document,
    add_document,
    update_document,
    delete_document,
    connected
} = require('../controllers/controllers');

/** Creates a new router object to handle requests and export routes to server.js */
const router = require('express').Router();

/** Routes to access server side operations */
router.get('/', connected);
router.post('/load_collection', load_collection);
router.post('/load_document', load_document);
router.post('/add_document', add_document);
router.post('/update_document', update_document);
router.post('/delete_document', delete_document);

/** Export the router module to be used on the server */
module.exports = router;
