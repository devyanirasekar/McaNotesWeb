import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

   const firebaseApp = firebase.initializeApp({ 
    apiKey: "AIzaSyBoiVlRkKHjem3NMuWroHOT6avmt4C7u2c",
    authDomain: "mcanotes-ce699.firebaseapp.com",
    projectId: "mcanotes-ce699",
    storageBucket: "mcanotes-ce699.appspot.com",
    messagingSenderId: "612876416768",
    appId: "1:612876416768:web:573758ebbb6d227b5b65e5"
    });
   const db = firebaseApp.firestore();
   const auth = firebaseApp.auth();

const togglebtn = document.querySelector(".toggle");

togglebtn.onclick=function(){
    const droplist = document.querySelector(".drop-list");
    droplist.classList.toggle("open");
}

//singup  function

const signup=()=>{

    const auth = getAuth();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email,password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }