var getval = localStorage.getItem("getval");

console.log(getval)

var firebaseConfig = {
    apiKey: "AIzaSyBoqlRULru0XPiSRhr_fw0-G5tDaTvQcQ0",
    authDomain: "pridecare-de5fe.firebaseapp.com",
    databaseURL: "https://pridecare-de5fe-default-rtdb.firebaseio.com/",
    projectId: "pridecare-de5fe",
    storageBucket: "pridecare-de5fe.appspot.com",
    messagingSenderId: "455015159013",
    appId: "1:455015159013:web:e1dc5bdf99d17b31c5b00c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()
database = firebase.database()
var doctors = [];
var jobs = [];
var images = [];
/*
var ref = database.ref('users')

ref.on('value', function(snapshot){

snapshot.forEach(function(childSnapshot){

var data = childSnapshot.val();

console.log(data.full_name);

});



*/
 

   

var ref = firebase.database().ref("users");


var ref2 = database.ref("messages")

var data = {

    messages: "yessir2",
    score: 432
}

ref2.push(data)
  
ref.orderByChild("full_name").equalTo(getval).on("child_added", function(snapshot) {

console.log(snapshot.val())

document.getElementById('imgprofa').src = snapshot.val().url


document.getElementById('name').innerHTML = snapshot.val().full_name

document.getElementById('office').innerHTML = snapshot.val().address
document.getElementById('email').innerHTML = snapshot.val().email
document.getElementById('profession').innerHTML = snapshot.val().doctor
document.getElementById('number').innerHTML = snapshot.val().phonenumber
document.getElementById('desc').innerHTML = '"'+snapshot.val().briefdesc+'"'
});

function sendemail() {
var getemail = document.getElementById('email').innerHTML;

window.open('mailto:'+getemail);
}