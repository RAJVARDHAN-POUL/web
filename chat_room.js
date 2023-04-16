var firebaseConfig = {
    apiKey: "AIzaSyAQ3k2NDKoFcei2G4pHazK3ntYzm8M6tts",
    authDomain: "kwitter-18628.firebaseapp.com",
    databaseURL: "https://kwitter-18628-default-rtdb.firebaseio.com",
    projectId: "kwitter-18628",
    storageBucket: "kwitter-18628.appspot.com",
    messagingSenderId: "911850441739",
    appId: "1:911850441739:web:6dad919c540a5887884b0e",
    measurementId: "G-GEXDTFKW2V"
  };
  
  // Initialize Firebase
  var app = firebase.initializeApp(firebaseConfig);
  
//ADD YOUR FIREBASE LINKS

function addUser()
{
    user_name=document.getElementById("user_name").value ;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("room name- "+Room_names);
   row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'> #"+Room_names+"</div> <hr>";
   document.getElementById("output").innerHTML+=row;
   //End code
   });});}
getData();

function addName()
{
  u_name=localStorage.getItem("user_name");
  document.getElementById("welcome").innerHTML="welcome "+ u_name + "!";
}

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="chat_page.html";
}
function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}