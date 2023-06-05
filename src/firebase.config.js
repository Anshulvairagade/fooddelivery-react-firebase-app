import {getApp, getApps, initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDw8XPpQR29FGS108yAhuGPVO9JCHFq8UE",
    authDomain: "restaurantapp-863d0.firebaseapp.com",
    databaseURL: "https://restaurantapp-863d0-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-863d0",
    storageBucket: "restaurantapp-863d0.appspot.com",
    messagingSenderId: "277821560670",
    appId: "1:277821560670:web:50561b453080d41275a1cf"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)
// for storing data
const firestore = getFirestore(app)
// for storing images
const storage = getStorage(app)

export { app, firestore, storage }