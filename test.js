

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBoqlRULru0XPiSRhr_fw0-G5tDaTvQcQ0",
    authDomain: "pridecare-de5fe.firebaseapp.com",
    projectId: "pridecare-de5fe",
    storageBucket: "pridecare-de5fe.appspot.com",
    messagingSenderId: "455015159013",
    appId: "1:455015159013:web:e1dc5bdf99d17b31c5b00c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);




const auth = firebase.auth()
const database = firebase.database()


// Firebase Realtime Database Rules: https://firebasetutorials.com/firebase-realtime-database-rules/

function previewFile() {
  const preview = document.getElementById('output');
  const file = document.querySelector('input[type=file]').files[0];
  const reader = new FileReader();

  reader.addEventListener("load", function () {
    // convert image file to base64 string
    preview.src = reader.result;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }

}
function register () {
  email = document.getElementById('email').value;
  password = document.getElementById('password').value;
  full_name = document.getElementById('full_name').value.toUpperCase();
  city = document.getElementById('city').value.toUpperCase();
  doctor = document.getElementById('doctor').value.toUpperCase();
  phonenumber = document.getElementById('phonenumber').value.toUpperCase();
  briefdesc = document.getElementById('briefdesc').value;
  address = document.getElementById('address').value.toUpperCase();
  var doctory = "doctoryes"
  var url = document.getElementById('output').src;
  // Validate email
  if (ValidateEmail(email) == false) {
    alert('Incorrect Email')
    return
  }
//HI MY NAME IS PABLO AND I AM A GASTROENTEROLOGIST. MY SON IS PART OF THE LGBTQ+ COMMUNITY SO I WANT TO HELP THE LGBTQ+ COMMUNITY. FEEL FREE TO CONTACT ME.
  // Validate password (Firebase auth insists on a password length of 6 characters)
  if (password.length < 6) {
    alert('Create a Longer Password')
    return
  }

  // Check if other values are empty
  if (full_name.length <= 0 || city.length <= 0 || doctor.length <= 0 || phonenumber.length <=0 || briefdesc.length <= 0) {
    alert('Missing Fields')
    return
  }

  auth.createUserWithEmailAndPassword(email, password)
  .then(() => {
    // Assign user
    var user = auth.currentUser
    // Save input data to firebase database
    var database_ref = database.ref()
    // Create user data to save to Firebase Realtime Database
    var user_data = {
      full_name: full_name,
      email: email,
      city: city,
      doctor: doctor,
      phonenumber: phonenumber,
      briefdesc: briefdesc,
      address: address,
      doctory: doctory,
      url: url,

      last_login: Date.now()
    }
    // Save user_data under the unique user.uid
    database_ref.child('users/' + user.uid).set(user_data)
    // Wait 1 second. You don't have to but why not.
    // Then alert the user
    setTimeout(function () {
      alert('User Created!')
      window.location.href="loginmain.html"
    }, 1000)
  })
  .catch((error) => {
    // Handle Errors as they occur.
    var errorCode = error.code
    var errorMessage = error.message
    alert(errorMessage)
  })
}
function login () {
  email = document.getElementById('email').value
  password = document.getElementById('password').value

  auth.signInWithEmailAndPassword(email, password)
  .then(() => {
    // Assign user
    var user = auth.currentUser
    // Update user data in firebase database
    var database_ref = database.ref()
    // User data to be updated
    
    // Set timeout and log in
    setTimeout(function () {
      alert('Logged In!')
window.location.href="loginmain.html"
    }, 1000)
  })
  .catch((error) => {
    // Handle Errors here.
    var errorCode = error.code
    var errorMessage = error.message
    alert(errorMessage)
  })
}
function ValidateEmail (email) {
  if (email.length <= 0) {
    return false
  }

  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
    return true
  } else {
    return false
  }
}
