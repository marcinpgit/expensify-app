import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDVRbxCJJh8siKTI4CEYsSTNhcvGzcUMYc",
    authDomain: "expensify-98e0f.firebaseapp.com",
    databaseURL: "https://expensify-98e0f.firebaseio.com",
    projectId: "expensify-98e0f",
    storageBucket: "expensify-98e0f.appspot.com",
    messagingSenderId: "7888853249"
  };

  firebase.initializeApp(config);

  firebase.database().ref().set({
    name: 'Marcin'
  });