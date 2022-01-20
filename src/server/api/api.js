/** Require the firestore instance to access the database */
const firestore = require('../firestore/firestore');

/**
 * Loads a specified collection
 *
 * @param {*} path - the name of the collection
 * @returns - an array containing the documents in the collection
*/
async function loadCollection(path) {
    return await firestore.db
        .collection(path)
        .get()
        .then(response => {
            /** Returns an array containing all documents in the collection */
            let documents = new Array();
            response.docs.forEach(doc => documents.push(doc.data()));
            return documents;
        });
}

/**
 * Loads a document from a specified path and document
 *
 * @param {*} path - the name of the collection
 * @param {*} id - the name of the document
 * @returns - the document object as a JSON object
 */
async function loadDocument(path, id) {
    return (await firestore.db
        .collection(path)
        .doc(id)
        .get())
        .data();
}

/**
 * Adds a document to a specified collection
 *  - The document id will be used as the document name when firestore adds the document
 *
 * @param {*} path - the name of the collection
 * @param {*} id - the name you want the document to be stored under
 * @param {*} updates - the fields to be updated in JSON/Object form { field1: newValue1 }
 */
async function addDocument(path, id, fields) {
    await firestore.db
        .collection(path)
        .doc(id)
        .set(fields);
}

/**
 * Updates a specified document with new field values
 *
 * @param {*} path - name of the collection
 * @param {*} id - name of the document to be updated
 * @param {*} updates - the fields to be updated in JSON/Object form { field1: newValue1 }
 */
async function updateDocument(path, id, updates) {
    await firestore.db.
        collection(path)
        .doc(id)
        .update(updates);
}

/**
 * Deletes a specified document from a collection
 *
 * @param {*} path - name of the collection
 * @param {*} id - name of the document to be deleted
 */
async function deleteDocument(path, id) {
    await firestore.db
        .collection(path)
        .doc(id)
        .delete();
}

/** Export the api functions to be used in controllers.js */
module.exports = {
    loadCollection,
    loadDocument,
    addDocument,
    updateDocument,
    deleteDocument
}
