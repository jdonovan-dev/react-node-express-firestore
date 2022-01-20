This repository contains a React project that connects to a Node/Express server and Firestore.

To run this as is, please review the steps below about connecting your account and updating the project to your database.
- The existing tests assume there is already a collection named 'test-collection' and the documents 'test-add-document', 'test-load-document', and 'test-update-document' in the database
- To run this project out of the box, please add this collection and its documents manually to your Firestore database (further explanation below)
- To quickly implement this server into your existing project, please review the comments in the code to understand the test cases, middleware, api, server, and routes are connected

Project setup

**npm packages**
1. express
2. body-parser
3. cors
4. firebase-admin
5. concurrently
6. dotenv
7. axios

**Firestore**
1. Go to the Firebase console and select 'Create a project'
2. Enter the project name and create the project
3. Once the project is built, navigate to 'Firestore Database' under the 'Build' tab
4. Select 'Create database', production mode, and select your location
5. Once the database is created, navigate to the 'Rules' tab and 'Edit rules'
6. Edit the line 'allow read, write: if false;' to 'allow get, read, write: if true;' (this is not a secure rule and should only be used for testing)
7. Publish the rules

**Firestore access keys**
1. Go to the 'Project settings' page, found under the setting wheel to the right of 'Project Overview'
2. Select the 'Service accounts' tab
3. Select 'Generate new private key' for a node app
4. Move this JSON to your React project file tree

**Add Firestore account to your project**
In this project, dotenv is used to save the environment variables to connect the service account
1. Open your Firestore account JSON and copy all variables to their respective lines in the .env file

**Notes**
Please review the following
1. In this project I was using the following names for Firestore collections and documents
        Collection: test-collection
        Documents: test-load-document (title: 'Test Load Document'), test-add-document (title: 'Test Add Document'), test-update-document (title: 'Test Update Document')
2. To test the existing project, please add this collection and documents (with their respective fields) to your Firestore manually
3. If you want to create your own tests or use the server, you can remove the test files from the project and implement the middleware
4. Please review the project comments for references on request contents and function parameters
