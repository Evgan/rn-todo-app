import React from 'react';
import { createStore } from 'redux';
import * as firebase from 'firebase';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { RNFirebase } from 'react-native-firebase';
import rootReducer from './src/reducers';
import { View, Text } from 'react-native';

export default function App() {

    // ----------------------------------------------------
    //        firebase auth
    // ----------------------------------------------------
    const fbConfig = {
        apiKey: "AIzaSyC96u8mIxit6raoqaxRLquVCEyy5pQaOmE",
        authDomain: "ksucoral.firebaseapp.com",
        databaseURL: "https://ksucoral.firebaseio.com",
        projectId: "ksucoral",
        storageBucket: "ksucoral.appspot.com",
        messagingSenderId: "609798977796",
        appId: "1:609798977796:web:ecac764eaefe9a33023851"
        // measurementId: "G-N76L0945VZ"
    };
    // Initialize Firebase
    firebase.initializeApp(fbConfig);

    // ----------------------------------------------------
    //        react-redux-firebase config
    // ----------------------------------------------------
    const rrfConfig = {
        userProfile: 'users'
        // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
    };

    // ----------------------------------------------------
    // Create store with reducers and initial state
    // ----------------------------------------------------
    const initialState = {};
    const store = createStore(rootReducer, initialState);

    // ----------------------------------------------------
    //        react-redux-firebase props
    // ----------------------------------------------------
    const rrfProps = {
        firebase: RNFirebase,
        config: rrfConfig,
        dispatch: store.dispatch
    };

  return (
      <Provider store={store}>
          <ReactReduxFirebaseProvider {...rrfProps}>
              <View>
                  <Text>Test Firebase</Text>
              </View>
          </ReactReduxFirebaseProvider>
      </Provider>
  );
}
