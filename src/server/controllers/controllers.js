/** Require the api calls to be used in the controllers */
const {
    loadCollection,
    loadDocument,
    addDocument,
    updateDocument,
    deleteDocument
} = require('../api/api');

module.exports = {
    /** Responds with a success message when the server loads */
    connected: async (req, res) => {
        res.status(200).json('Connected!');
    },

    /** Loads a collection from a path specified by the client side post request */
    load_collection: async (req, res) => {
        try {
            /** Wait for the collection to load and pass it into the response */
            let collection = await loadCollection(req.body)
                .then(response => { return response; });
            res.status(200).json(collection);
        } catch (e) {
            res.status(200).json('load_collection failed');
        }
    },

    /** Loads a document specified by the client side post */
    load_document: async (req, res) => {
        try {
            let document = await loadDocument(req.body.path, req.body.id)
                .then(response => { return response; });
            res.status(200).json(document);
        } catch (e) {
            res.status(200).json('load_document failed');
        }
    },

    /** Adds a document to the database with data provided from the client post */
    add_document: async (req, res) => {
        try {
            await addDocument(req.body.path, req.body.id, req.body.fields);
            res.status(200).json('add_document successful');
        } catch (e) {
            res.status(200).json('add_document failed');
        }
    },

    /** Updates a specified document with fields requested by the client app */
    update_document: async (req, res) => {
        try {
            await updateDocument(req.body.path, req.body.id, req.body.updates);
            res.status(200).json('update_document successful');
        } catch (e) {
            res.status(200).json('update_document failed');
        }

    },

    /** Deletes a specified document from the database */
    delete_document: async (req, res) => {
        try {
            await deleteDocument(req.body.path, req.body.id);
            res.status(200).json('delete_document successful');
        } catch (e) {
            res.status(200).json('delete_document failed');
        }
    }
}
