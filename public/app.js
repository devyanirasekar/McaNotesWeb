<script type="module">
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
    import { getDatabase} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database";
    import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyBoiVlRkKHjem3NMuWroHOT6avmt4C7u2c",
      authDomain: "mcanotes-ce699.firebaseapp.com",
      projectId: "mcanotes-ce699",
      storageBucket: "mcanotes-ce699.appspot.com",
      messagingSenderId: "612876416768",
      appId: "1:612876416768:web:573758ebbb6d227b5b65e5"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    const auth =getAuth();

    signup.addEventListner('click',(e) => {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        alert('User Created');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('errorMessage')
        // ..
      });
    });
  </script>