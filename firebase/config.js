import * as firebase from 'src/servises/firebase';

// ----------------------------------------------------
//        firebase auth
// ----------------------------------------------------
const firebaseConfig = {
    apiKey: "AIzaSyC96u8mIxit6raoqaxRLquVCEyy5pQaOmE",
    authDomain: "ksucoral.firebaseapp.com",
    databaseURL: "https://ksucoral.firebaseio.com",
    projectId: "ksucoral",
    storageBucket: "ksucoral.appspot.com",
    messagingSenderId: "609798977796",
    appId: "1:609798977796:web:ecac764eaefe9a33023851",
    measurementId: "G-N76L0945VZ"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
