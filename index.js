const { https } = require('firebase-functions');
const gqlServer = require('./graphql/server');

const server = gqlServer();
// Graphql api
// https://us-central1-<project-name>.cloudfunctions.net/api/
exports.api = https.onRequest(server);

