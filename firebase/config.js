import * as firebase from 'firebase';

// ----------------------------------------------------
//        firebase auth
// ----------------------------------------------------
const firebaseConfig = {
    apiKey: "AIzaSyD8BDNnn4sgocoV6d096GQotxE59wJSP4E",
    authDomain: "rn-todo-app-5c40d.firebaseapp.com",
    projectId: "rn-todo-app-5c40d",
    storageBucket: "rn-todo-app-5c40d.appspot.com",
    messagingSenderId: "735361092862",
    appId: "1:735361092862:web:deb5adb3d188f5186fa9af"
};

// Initialize Firebase
if (!firebase.apps.length) {
    console.log('################################### firebase.initializeApp: ');
    const initApp = firebase.initializeApp(firebaseConfig);
    console.log('----------------------- initApp:');
    console.log(initApp);
}

export { firebase };
