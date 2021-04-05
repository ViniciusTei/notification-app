import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCu3wn-olL133OEakpQvoPuYUHBleJZqfw",
    authDomain: "speechapi-4f918.firebaseapp.com",
    databaseURL: "https://speechapi-4f918.firebaseio.com",
    projectId: "speechapi-4f918",
    storageBucket: "speechapi-4f918.appspot.com",
    messagingSenderId: "370489351807",
    appId: "1:370489351807:web:9e6705cdb08b66f9d9a94a",
    measurementId: "G-8KJ4H247DG"
};

firebase.initializeApp(firebaseConfig);

export default firebase;