import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCL80GVNB6dGYw97OFRNhz2dXBSXnbctfA",
    authDomain: "capilla-marin.firebaseapp.com",
    databaseURL: "https://capilla-marin.firebaseio.com",
    projectId: "capilla-marin",
    storageBucket: "capilla-marin.appspot.com",
    messagingSenderId: "910567995758",
    appId: "1:910567995758:web:c9caafd3ea41b36118697f",
    measurementId: "G-E45F68X4HS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage().ref();

export { auth, storage };
export default db;