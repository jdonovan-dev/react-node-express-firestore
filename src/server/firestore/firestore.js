/** Configuration data to authenticate with firestore */
const config = require('../config/config');
const admin = require('firebase-admin');

/** Initializes a firebase instance after authenticating provided credentials */
admin.initializeApp({
    credential: admin.credential.cert(config.firebaseConfig)
});

/** Create an instance of the firestore database to pass to be used in the app */
const db = admin.firestore();

/** Export the database instance */
module.exports = {
    db
};
