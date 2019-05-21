import firebase from 'firebase';

export const appName = 'react-advanced-21-05-2019';

export const firebaseConfig = {
    apiKey: "AIzaSyCwd5XLXFZ9gcY_dKif9khiRSrTloTrJ9k",
    authDomain: `${appName}.firebaseapp.com`,
    databaseURL: `https://${appName}.firebaseio.com`,
    projectId: appName,
    storageBucket: `${appName}.appspot.com`,
    messagingSenderId: "231376326319",
    appId: "1:231376326319:web:d67896c32fa10bfe"
};

firebase.initializeApp(firebaseConfig);
