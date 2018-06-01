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

database.ref('expenses').push({
    description: 'MacBook',
    note: 'Bill for notebook',
    amount: 508902,
    createdAt: 16600
});

database.ref('expenses').push({
    description: 'Rent',
    note: 'Bill for rent',
    amount: 109500,
    createdAt: 168600
});

database.ref('expenses').push({
    description: 'Coffe',
    note: 'Bill for coffee',
    amount: 1200,
    createdAt: 15000
});

// database.ref('notes/-LDxH39cQczwkDttdkuS').update({
//     body: 'Buy food'
// });

// database.ref('notes/-LDxH39cQczwkDttdkuS').remove();

// database.ref('notes').push({
//     title: 'To Do',
//     body: 'Go for a run'
// });

// const notes = [{
//     id: '12',
//     title: 'First note',
//     body: 'This is my note'
// }, {
//     id: '761ase',
//     title: 'Another note',
//     body: 'This is my note'
// }];

// database.ref('notes').set(notes);

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     }).catch((e) => {
//         console.log('Error fetching data', e);
//     });

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching', e)
// });

// setTimeout(() => {
//     database.ref('age').set(29);
// }, 3500);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(30);
// }, 10500);

// database.ref().set({
//     name: 'Marcin',
//     age: 18,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Gdansk',
//         country: 'Poland'
//     }
//   }).then(() => {
//       console.log('Data is saved!')
//   }).catch((e) => {
//       console.log('This failed.', e)
//   });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });

// database.ref('isSingle').set(null);

// database.ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('Data was removed');
//     }).catch(() => {
//         console.log('Did note remove data', e);
//     });