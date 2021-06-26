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
   firebase.auth().onAuthStateChanged(user => {
    if (user) {
        getUserData(user.uid)
        console.log(user)
    }
})

   function getUserData(uid) {
    firebase.database().ref('users/' + uid).once("value", snap => {
        console.log(snap.val())
        document.getElementById('welcome').innerHTML = snap.val().full_name 
       
    })
}

var ref = firebase.database().ref("users");

function getdata() {

   var getcityname = document.getElementById("search").value;

   var capsgetcityname = document.getElementById('search').value.toUpperCase();
   console.log(capsgetcityname)
   var lowgetcityname = document.getElementById('search').value.toLowerCase();
      console.log(lowgetcityname)
ref.orderByChild("city").equalTo(getcityname).on("child_added", function(snapshot) {


   if (snapshot.val().doctory == "doctoryes"){
  console.log(snapshot.val());
}else{

   console.log("no")
}
});

ref.orderByChild("city").equalTo(capsgetcityname).on("child_added", function(snapshot) {


   if (snapshot.val().doctory == "doctoryes"){
  console.log(snapshot.val());
  
  doctors.push(snapshot.val().full_name) 
images.push(snapshot.val().url)
  jobs.push(snapshot.val().doctor) 
  if (doctors[0] !== undefined){
  document.getElementById('i1').innerHTML = doctors[0]  
    document.getElementById('i1s').innerHTML = jobs[0]  
     document.getElementById('img').src = images[0];
  }
     if (doctors[1] !== undefined){
      document.getElementById('i2').innerHTML = doctors[1]  
    document.getElementById('i2s').innerHTML = jobs[1]  
      document.getElementById('img2').src = images[1];
   }
      if (doctors[2] !== undefined){
        document.getElementById('i3').innerHTML = doctors[2]  
    document.getElementById('i3s').innerHTML = jobs[2]  
    document.getElementById('img3').src = images[2];
 }

    if (doctors[3] !== undefined){
       document.getElementById('i4').innerHTML = doctors[3]  
    document.getElementById('i4s').innerHTML = jobs[3] 
      document.getElementById('img4').src = images[3];
   }
      if (doctors[4] !== undefined){
             document.getElementById('i5').innerHTML = doctors[4]  
    document.getElementById('i5s').innerHTML = jobs[4] 
      document.getElementById('img5').src = images[4];
   }
if (doctors[5] !== undefined){
          document.getElementById('i6').innerHTML = doctors[5]  
    document.getElementById('i6s').innerHTML = jobs[5] 
      document.getElementById('img6').src = images[5];
   }
if (doctors[6] !== undefined){
         document.getElementById('i7').innerHTML = doctors[6]  
    document.getElementById('i7s').innerHTML = jobs[6] 
      document.getElementById('img7').src = images[6];
   }
if (doctors[7] !== undefined){
          document.getElementById('i8').innerHTML = doctors[7]  
    document.getElementById('i8s').innerHTML = jobs[7] 
      document.getElementById('img8').src = images[7];
   }
if (doctors[8] !== undefined){
      document.getElementById('i9').innerHTML = doctors[8]  
    document.getElementById('i9s').innerHTML = jobs[8] 
      document.getElementById('img9').src = images[8];
   }
    console.log(images)

  console.log(doctors)
}else{

   console.log("no")
}
});

ref.orderByChild("city").equalTo(lowgetcityname).on("child_added", function(snapshot) {


   if (snapshot.val().doctory == "doctoryes"){
  console.log(snapshot.val());
}else{

   console.log("no")
}
});
}





function sendvalue() {

   var getval = document.getElementById('i1').innerHTML;

   localStorage.setItem('getval', getval)
window.location.href = "profile.html"
}

function sendvalue2() {

   var getval = document.getElementById('i2').innerHTML;

   localStorage.setItem('getval', getval)
window.location.href = "profile.html"
}

function sendvalue3() {

   var getval = document.getElementById('i3').innerHTML;

   localStorage.setItem('getval', getval)
window.location.href = "profile.html"
}

function sendvalue4() {

   var getval = document.getElementById('i4').innerHTML;

   localStorage.setItem('getval', getval)
window.location.href = "profile.html"
}

function sendvalue5() {

   var getval = document.getElementById('i5').innerHTML;

   localStorage.setItem('getval', getval)
window.location.href = "profile.html"
}

function sendvalue6() {

   var getval = document.getElementById('i6').innerHTML;

   localStorage.setItem('getval', getval)
window.location.href = "profile.html"
}

function sendvalue7() {

   var getval = document.getElementById('i7').innerHTML;

   localStorage.setItem('getval', getval)
window.location.href = "profile.html"
}

function sendvalue8() {

   var getval = document.getElementById('i8').innerHTML;

   localStorage.setItem('getval', getval)
window.location.href = "profile.html"
}

function sendvalue9() {

   var getval = document.getElementById('i9').innerHTML;

   localStorage.setItem('getval', getval)
window.location.href = "profile.html"
}