// Replace this with your actual Firebase config object
var firebaseConfig = {
  apiKey: "AIzaSyCEwzgpAAKTJHriSRiBYqZIYuG04WMtAC0",
  authDomain: "xfiniteradio-a66c9.firebaseapp.com",
  databaseURL: "https://xfiniteradio-a66c9-default-rtdb.firebaseio.com",
  projectId: "xfiniteradio-a66c9",
  storageBucket: "xfiniteradio-a66c9.appspot.com",
  messagingSenderId: "891913288263",
  appId: "1:891913288263:web:d049046f53a8300f634f62",
  measurementId: "G-SSJVY3WZYF"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const loginForm = document.getElementById('login-form');
const clearBtn = document.getElementById('clear-btn');
const submitBtn = document.getElementById('submit-btn');
const googleLoginBtn = document.getElementById('google-login-btn');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// Clear button event listener
clearBtn.addEventListener('click', () => {
  emailInput.value = '';
  passwordInput.value = '';
});

// Submit button event listener (for email/password login)
submitBtn.addEventListener('click', (event) => {
  event.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;

  // Implement Firebase email/password login
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Redirect to the dashboard on successful login
      // Replace 'dashboard.html' with the path to your dashboard page
      window.location.href = 'dashboard.html';
    })
    .catch((error) => {
      // Handle login error here (display error message, etc.)
      console.error('Login Error:', error);
    });
});

// Google login button event listener (for Google login integration)
googleLoginBtn.addEventListener('click', () => {
  // Implement Firebase Google authentication
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      // Redirect to the dashboard on successful login
      // Replace 'dashboard.html' with the path to your dashboard page
      window.location.href = 'dashboard.html';
    })
    .catch((error) => {
      // Handle Google login error here (display error message, etc.)
      console.error('Google Login Error:', error);
    });
});
