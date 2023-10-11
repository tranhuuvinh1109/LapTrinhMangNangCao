import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getDatabase } from 'firebase/database';
import 'firebase/analytics';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDXPvGl3y_IWGpU7GvixTL9uEuF0WAyNCk',
  authDomain: 'realtime-cnn.firebaseapp.com',
  databaseURL: 'https://realtime-cnn-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'realtime-cnn',
  storageBucket: 'realtime-cnn.appspot.com',
  messagingSenderId: '856972582342',
  appId: '1:856972582342:web:d4f6747a958fe848b7e6c7',
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const getStorageClient = getStorage(app);

export { db, getStorageClient };
