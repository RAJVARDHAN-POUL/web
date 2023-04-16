// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyD6GxCrSvrnhEH6l1F-pYWTsAsi13KmfzQ",
    authDomain: "chat-app-c2ddf.firebaseapp.com",
    databaseURL: "https://chat-app-c2ddf-default-rtdb.firebaseio.com",
    projectId: "chat-app-c2ddf",
    storageBucket: "chat-app-c2ddf.appspot.com",
    messagingSenderId: "603614827406",
    appId: "1:603614827406:web:af67b6834218e565dacadf",
    measurementId: "G-H2LRJH48YP"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);
    window.location = "chat_room.html";
    */
    localStorage.setItem("user_name", user_name);
    window.location = "chat_room.html";
}



