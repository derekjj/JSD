import { initializeApp } from 'firebase/app'
import {
	getAuth,
	setPersistence,
	browserSessionPersistence,
} from 'firebase/auth'
import {
	getFirestore,
	collection,
	getDocs,
	setDoc,
	doc,
	writeBatch,
} from 'firebase/firestore'

const firebaseConfig = {
	apiKey: process.env.FIREBASE_ENV_API_KEY,
	authDomain: process.env.FIREBASE_ENV_AUTH_DOMAIN,
	projectId: process.env.FIREBASE_ENV_PROJECT_ID,
	storageBucket: process.env.FIREBASE_ENV_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_ENV_MESSAGING_SENDER_ID,
	appId: process.env.FIREBASE_ENV_APP_ID,
	measurementId: process.env.FIREBASE_ENV_MEASUREMENT_ID,
}

const firebaseApp = initializeApp(firebaseConfig)
const auth = getAuth(firebaseApp)
const firestore = getFirestore(firebaseApp)

setPersistence(auth, browserSessionPersistence)
	.then(() => console.log('Firebase auth persistence set'))
	.catch((error) => console.error('Error setting auth persistence:', error))

// console.log('Firebase initialized', firestore)
// export { auth, firestore }
export { auth, firestore, collection, getDocs, setDoc, doc, writeBatch }
