var firebaseConfig = {
    apiKey: "AIzaSyBJc2yJn9v8irbqYhMRRFhFc9JcMK3CXBI",
    authDomain: "test-a4657.firebaseapp.com",
    databaseURL: "https://test-a4657-default-rtdb.firebaseio.com/",
    projectId: "test-a4657",
    storageBucket: "test-a4657.appspot.com",
    messagingSenderId: "703058533299",
    appId: "1:703058533299:web:40aed08112ee4ed8bf49c6",
    measurementId: "G-NNPZKT7ZZY"
  };
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");

  function send()
  {
     msg=document.getElementById("msg").value ;
     firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
     });
     document.getElementById("msg").value="";

  }



  function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}