// Import the functions you need from the SDKs you need
import * as firebase from 'firebase';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeo7EqR06ztA_PWrXx1zAKPfCANYm1DH8",
  authDomain: "locationfinder-a4a77.firebaseapp.com",
  projectId: "locationfinder-a4a77",
  storageBucket: "locationfinder-a4a77.appspot.com",
  messagingSenderId: "840247747251",
  appId: "1:840247747251:web:6722ef1c90911a0f26c6c6"
};

// Initialize Firebase
let app;
if(firebase.apps.length==0){
    app=firebase.initializeApp(firebaseConfig);
}
else{
    app=firebase.app()
}
const auth = firebase.auth()
export{auth};


