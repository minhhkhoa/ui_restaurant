import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/analytics';
import 'firebase/messaging';
import 'firebase/functions';
import 'firebase/performance';
// Import thêm các dịch vụ khác nếu cần

// Cấu hình Firebase từ file google-services.json
const firebaseConfig = {
    apiKey: "AIzaSyCgI1Dj0AZuvWhooDYN4t56soNFiNVxJv4",
    authDomain: "b1x1-layout.firebaseapp.com", // authDomain thường có dạng "YOUR_PROJECT_ID.firebaseapp.com"
    projectId: "b1x1-layout",
    databaseURL:"https://b1x1-layout-default-rtdb.asia-southeast1.firebasedatabase.app",
    storageBucket: "b1x1-layout.appspot.com",
    messagingSenderId: "21194864709",
    appId: "1:21194864709:android:7074b21c563d57cad38b2c",
    // measurementId: "YOUR_MEASUREMENT_ID"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
// Export các dịch vụ cần thiết
const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();
const analytics = firebase.analytics();
const messaging = firebase.messaging();
const functions = firebase.functions();
const performance = firebase.performance();

export { firebase, auth, firestore, storage, analytics, messaging, functions, performance };
