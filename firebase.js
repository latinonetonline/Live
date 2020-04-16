const firebaseConfig = {
    apiKey: "AIzaSyAqG-w0W2yTM0MN2pLpFlncO5aYVTMDEn8",
    authDomain: "latino-net-online.firebaseapp.com",
    databaseURL: "https://latino-net-online.firebaseio.com",
    projectId: "latino-net-online",
    storageBucket: "latino-net-online.appspot.com",
    messagingSenderId: "260080569357",
    appId: "1:260080569357:web:a664c2e252b1d4b2f09944"
};
import Firebase from 'firebase'

const firebaseApp = Firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.database();