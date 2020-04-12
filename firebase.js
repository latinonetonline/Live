const firebaseConfig = {
    apiKey: "AIzaSyCoiz_TuOkcdDQ44e6SmTLJSogjBj0qLl0",
    authDomain: "reserva-479e8.firebaseapp.com",
    databaseURL: "https://reserva-479e8.firebaseio.com",
    projectId: "reserva-479e8",
    storageBucket: "reserva-479e8.appspot.com",
    messagingSenderId: "105170448423",
    appId: "1:105170448423:web:55c0be34cb9717118a5e02"
};
import Firebase from 'firebase'

const firebaseApp = Firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.database();