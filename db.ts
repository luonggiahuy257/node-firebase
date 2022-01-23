export const firebase = require('firebase');
export const config = require('./config');

export const db = firebase.initializeApp(config.firebaseConfig);

module.exports = db;