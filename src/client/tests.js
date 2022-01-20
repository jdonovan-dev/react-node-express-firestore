/** Importing the middleware to handle requests to the server */
import {
    addDocument,
    deleteDocument,
    loadCollection,
    loadDocument,
    updateDocument
} from './middleware/middleware';

/** Helper function that builds a document's key from the name provided */
import { buildKey } from './helpers';

/**
 * Loads and returns a collection from a specified collection
 *
 * @param {*} path - the name of the collection to be accessed
 * @returns - the collection or false if the load fails
 */
export async function testLoadCollection(path = 'test-collection') {
    return await loadCollection(path);
}

/**
 * Loads a document from specified path and document id
 *
 * @param {*} path - collection name where document is stored
 * @param {*} documentId - the id of the document to be retrieved
 * @returns - the document or false if the load fails
 */
export async function testLoadDocument(
    path = 'test-collection',
    documentId = 'test-load-document'
) {
    let request = { path: path, id: documentId }
    return await loadDocument(request);
}

/**
 * Adds and checks if a document is stored properly in firestore
 *
 * @param {*} path - collection name where document will be stored
 * @param {*} documentId - the id of the document to be stored under
 * @param {*} fields - the fields to be saved in the document
 * @returns - a success message or false if the document fails to load
 */
export async function testAddDocument(
    path = 'test-collection',
    documentId = 'na',
    fields = { title: 'Test Add Document' }
) {
    let request = {
        path: path,
        id: documentId === 'na' ? buildKey(fields.title) : documentId, // builds the document id from the title field
        fields: fields
    }

    /** Calls the add document route */
    await addDocument(request);

    /** Loads the document to check it was saved */
    return loadDocument(request).then(response => { return response; });
}

/**
 * Updates a document from specified path and document id
 *
 * @param {*} path - collection name where document is stored
 * @param {*} documentId - the id of the document to be updated
 * @param {*} updateFields - the fields to be updated in the document
 * @returns - success message or false if the update fails
 */
export async function testUpdateDocument(
    path = 'test-collection',
    documentId = 'na',
    updateFields = { title: 'Test Update Document - Updated' }
) {

    /** If the documentId is not provided, a mock document will be created to run the test */
    if (documentId === 'na') {
        let request = {
            path: path,
            id: 'test-update-document',
            fields: { title: 'Test Update Document' }
        }

        await addDocument(request)

        if (await loadDocument({ id: 'test-update-document' }) === '') {
            console.log('Unable to add test document to be updated');
            return false;
        }
    }

    let request = {
        path: path,
        id: documentId === 'na' ? 'test-update-document' : documentId, // if no documentId was provided, use the test document created
        updates: updateFields
    }

    return await updateDocument(request);
}

/**
 * Deletes a document from specified path and document id
 *
 * @param {*} path - collection name where document is stored
 * @param {*} documentId - the id of the document to be updated
 * @returns - success message or false if the update fails
 */
export async function testDeleteDocument(
    path = 'test-collection',
    documentId = 'na'
) {
    /** Creating a document to be deleted by this test */
    if (documentId === 'na') {
        let request = {
            path: path,
            id: 'test-delete-document',
            fields: { title: 'Test Delete Document' }
        }

        await addDocument(request)

        if (await loadDocument({ id: 'test-delete-document' }) === '') {
            console.log('Unable to add test document to be deleted');
            return false;
        }
    }

    let request = {
        path: path,
        id: documentId === 'na' ? 'test-delete-document' : documentId,
    }

    return await deleteDocument(request);
}
