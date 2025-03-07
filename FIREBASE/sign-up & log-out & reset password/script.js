  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail,} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBNIUk5SLHuRjd8adp-vkpMnuKlsPmqj7w",
    authDomain: "sign-up-login-form-cc6ff.firebaseapp.com",
    projectId: "sign-up-login-form-cc6ff",
    storageBucket: "sign-up-login-form-cc6ff.firebasestorage.app",
    messagingSenderId: "913552980541",
    appId: "1:913552980541:web:0d2eb5f5560754ae934854",
    measurementId: "G-QM6DV2WS4Z"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  document.getElementById("signup-btn")?.addEventListener('click' ,(e) =>{
    e.preventDefault();
    let email = document.getElementById("signup-email").value;
    let password = document.getElementById("signup-password").value;
    //the below is predefined firebase ka function amd also add its import link
    createUserWithEmailAndPassword(auth , email , password)
    .then( () =>{
        alert("Sign-Up successfully!!");
        window.location.href = "welcome.html";
    })
    .catch((error) =>{
        alert("error.message");
    });
  });

  document.getElementById("login-btn")?.addEventListener('click' ,(e) =>{
    e.preventDefault();
    let email = document.getElementById('login-email').value;
    let password = document.getElementById('login-password').value;
    signInWithEmailAndPassword(auth , email, password)
    .then(() =>{
        alert("Login successfully!!");
        window.location.href = "welcome.html";
    })
    .catch((error) =>{
        alert("error.message");
    });
  });

  //code for google auth
  document.getElementById("google-btn")?.addEventListener('click' , ()=>{
    signInWithPopup(auth , provider)
    .then(()=>{
        alert("Login successfully!!");
        window.location.href = "welcome.html";
    })
    .catch((error) =>{
        alert(error.message);
    });
  });

  // Logout 
  document.getElementById("logout-btn")?.addEventListener("click", () => {   
    signOut(auth)     
    .then(() => {       
        alert("Logged Out Successfully!");       
        window.location.href = "index.html";     
    })     
    .catch((error) => {       
        alert(error.message); 
        //koi bhi error hota hai to .catch us error ko catch kart hai or user tak readeable form mien puhanchata haii    
    }); 
}); 

//reset password
document.getElementById("reset-password-link")?.addEventListener("click" , ()=>{
    let email = prompt("Enter your email!");

    if(email){
        sendPasswordResetEmail
    }
})


onAuthStateChanged(auth , (user)=> {
    if(user && window.location.pathname.includes("welcome.html")){
        document.getElementById("user-email").textContent = user.email;
    }else if (!user && window.location.pathname.includes("welcome.html")) {
        window.location.href = "index.html";
    }
});
