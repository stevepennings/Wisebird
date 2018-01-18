'use strict';

// The Cloud Functions for Firebase SDK to create
// Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// Require
const auth = require('./auth');

// Process new user
const NewUser = functions.auth.user().onCreate(auth.processNewUser);


module.exports = {
    NewUser: NewUser,
};
