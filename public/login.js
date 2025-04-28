// Your Firebase config (replace with your actual config)
const firebaseConfig = {
  apiKey: "AIzaSyByoFg70I4TS4nuVnjrpDWQF8rFn6jrpNA",
  authDomain: "campus-connect-7c1e2.firebaseapp.com",
  projectId: "campus-connect-7c1e2",
  storageBucket: "campus-connect-7c1e2.firebasestorage.app",
  messagingSenderId: "774857265701",
  appId: "1:774857265701:web:3f314e09c771a419c1e5cc"
};;
firebase.initializeApp(firebaseConfig);
// Login Logic
document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("Login successful!");
      window.location.href = "dashboard.html"; // Replace with your home page
    })
    .catch((error) => {
      alert("Login failed: " + error.message);
      });
  });