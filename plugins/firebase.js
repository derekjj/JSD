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
	apiKey: process.env.NUXT_ENV_API_KEY,
	authDomain: process.env.NUXT_ENV_AUTH_DOMAIN,
	projectId: process.env.NUXT_ENV_PROJECT_ID,
	storageBucket: process.env.NUXT_ENV_STORAGE_BUCKET,
	messagingSenderId: process.env.NUXT_ENV_MESSAGING_SENDER_ID,
	appId: process.env.NUXT_ENV_APP_ID,
	measurementId: process.env.NUXT_ENV_MEASUREMENT_ID,
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
