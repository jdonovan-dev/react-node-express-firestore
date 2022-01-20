/** Using axios to handle backend requests */
import axios from 'axios';

/**
 * Passes a specified path to the load collection route
 *
 * @param {*} path - name of the collection to be loaded
 * @returns - the specified collection or false if load fails
 */
export async function loadCollection(path) {
    return await axios.post('http://localhost:8080/load_collection', { path: path })
        .then(response => {
            return response.data === 'load_collection failed' ? false : response.data;
        });
}

/**
 * Passes a specified path and document id to the load document route
 *
 * @param {*} request - contains the request data such as path and id to be used by the router
 * @returns - the specified document or false if the request fails
 */
export async function loadDocument(request) {
    return await axios.post('http://localhost:8080/load_document', request)
        .then(response => {
            return response.data === 'load_document failed' ? false : response.data;
        });
}

/**
 * Passes the data needed to create a new document to the add document route
 *
 * @param {*} request - contains the new document's path, id, and fields to be stored
 * @returns - a success message or false if add document fails
 */
export async function addDocument(request) {
    return axios.post('http://localhost:8080/add_document', request)
        .then(response => {
            return response.data === 'add_document failed' ? false : response.data;
        });
}

/**
 * Passes the data needed to update a document to the update document route
 *
 * @param {*} request - contains the new document's path, id, and fields to be updated
 * @returns - a success message or false if update document fails
 */
export async function updateDocument(request) {
    return await axios.post('http://localhost:8080/update_document', request)
        .then(response => {
            return response.data === 'update_document failed' ? false : response.data;
        });
}

/**
 * Passes the data needed to delete a document to the delete document route
 *
 * @param {*} request - contains the document's path and id
 * @returns - a success message or false if delete document fails
 */
export async function deleteDocument(request) {
    return await axios.post('http://localhost:8080/delete_document', request)
        .then(response => {
            return response.data === 'delete_document failed' ? false : response.data;
        });
}
