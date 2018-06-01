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

const database = firebase.database();

database.ref().set({
    name: 'Marcin',
    age: 18,
    isSingle: false,
    location: {
        city: 'Gdansk',
        country: 'Poland'
    }
  }).then(() => {
      console.log('Data is saved!')
  }).catch((e) => {
      console.log('This failed.', e)
  });

// database.ref('isSingle').set(null);

// database.ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('Data was removed');
//     }).catch(() => {
//         console.log('Did note remove data', e);
//     });