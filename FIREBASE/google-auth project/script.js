import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut,signInWithPopup,GoogleAuthProvider, onAuthStateChanged,sendPasswordResetEmail,} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";

  const firebaseConfig = {
    apiKey: "AIzaSyAzHoU_jnYOX0gj-nuWZ0KsbcSzU3Pt0Kc",
    authDomain: "auth-7fd87.firebaseapp.com",
    projectId: "auth-7fd87",
    storageBucket: "auth-7fd87.firebasestorage.app",
    messagingSenderId: "907184029809",
    appId: "1:907184029809:web:adee621dfe8c3308185bd0",
    measurementId: "G-H69WKL7T04"
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
document.getElementById("reset-password-link")?.addEventListener("click" , (e)=>{
    e.preventDefault();
    let email = prompt("Enter your email!");

    if(email){
        sendPasswordResetEmail(auth , email)
        .then(() => {
            alert('Please Password reset email send, Check Your Inbox')
        })
        .catch((error) =>{
            alert(error.message)
        })
    }
    else {
        alert ('Please enter a valid email')
    }
})



onAuthStateChanged(auth , (user)=> {
    if(user && window.location.pathname.includes("welcome.html")){
        document.getElementById("user-email").textContent = user.email;
    }else if (!user && window.location.pathname.includes("welcome.html")) {
        window.location.href = "index.html";
    }
});
  