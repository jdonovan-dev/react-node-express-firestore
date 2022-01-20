/** Using dotenv package to load and manage environment variables */
'use strict';
const dotenv = require('dotenv');

dotenv.config();

/** Exporting firebase configuration object with information needed to access firestore */
module.exports = {
    firebaseConfig: {
        type: process.env.TYPE,
        project_id: process.env.PROJECT_ID,
        private_key_id: process.env.PRIVATE_KEY_ID,
        private_key: process.env.PRIVATE_KEY.replace(/\\n/gm, "\n"), // replace used to correctly update the newline characters in the private key
        client_email: process.env.CLIENT_EMAIL,
        client_id: process.env.CLIENT_ID,
        auth_uri: process.env.AUTH_URI,
        token_uri: process.env.TOKEN_URI,
        auth_provider_x509_cert_url: process.env.AUTH_PROVIDER_X509_CERT_URL,
        client_x509_cert_url: process.env.CLIENT_X509_CERT_URL
    },
}
