import * as firebase from "firebase";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyCF2-4SJfQITABDUNbhpKLzmTffqJolMRA",
    authDomain: "diary-40404.firebaseapp.com",
    databaseURL: "https://diary-40404-default-rtdb.firebaseio.com",
    projectId: "diary-40404",
    storageBucket: "diary-40404.appspot.com",
    messagingSenderId: "573752534490",
    appId: "1:573752534490:web:365962d0e41db4ad74cce3",
    measurementId: "G-SMPBSEYTWW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const database = firebase.database().ref('/notes');