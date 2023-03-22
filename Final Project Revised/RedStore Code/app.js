
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
  import { getAuth,createUserWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCUSPbiQMCZWX-whtHhu6VpviKqkWQ3xQ0",
    authDomain: "final-project---ecosole.firebaseapp.com",
    projectId: "final-project---ecosole",
    storageBucket: "final-project---ecosole.appspot.com",
    messagingSenderId: "712780149922",
    appId: "1:712780149922:web:dac27bbdccc2275aa5d3fb"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth()

  //Getting All the Objects of html

  var email =document.getElementById("login_email")
  var password =document.getElementById("login_password")
  var password_confirmation =document.getElementById("login_password_confirmation")

  // making an fucntion for storing data 
  window.signup = function(e){
    e.preventDefault();
    var obj = {
        email:email.value,
        password:password.value,
        password_confirmation:password_confirmation.value
    }
    createUserWithEmailAndPassword(auth, obj.email,obj.password)
    .then(function(success){ 
        alert("Signup Successfully")
    })
    .catch(function(err)
    {alert("error" + err)})
  console.log(obj)
};