  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from
"https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
//changed thwe version of above lin from 11.3.1 to 11.4.0 just like below
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBNIUk5SLHuRjd8adp-vkpMnuKlsPmqj7w",
    authDomain: "sign-up-login-form-cc6ff.firebaseapp.com",
    projectId: "sign-up-login-form-cc6ff",
    storageBucket: "sign-up-login-form-cc6ff.firebasestorage.app",
    messagingSenderId: "913552980541",
    appId: "1:913552980541:web:da93138e93b87132934854",
    measurementId: "G-FL158SJF7E"
  };


  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  //here i added the auth as it is from buildin firebase thing 
  const auth = getAuth(app);

  document.getElementById("signup")?.addEventListener('click' , (e) =>{
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    createUserWithEmailAndPassword(auth , email , password)
    .then(() =>{
        alert("Sign-up successfully!");
        window.location.href = "window.html";
    })
    .catch(error => document.getElementById("message").innerText = error.message);
    })

  document.getElementById("loginBtn")?.addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Login Successful");
      window.location.href = "welcome.html";
    })
    .catch(error => document.getElementById("message").innerText = error.message);
    });

    export function logout() {
        signOut(auth)
        .then(() => {
        alert("Logged out");
        window.location.href = "index.html";
        })
        .catch(error => console.error("Logout Error:", error));
        }
        document.getElementById("logoutBtn")?.addEventListener("click", logout);
    