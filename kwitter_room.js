var firebaseConfig = {
  apiKey: "AIzaSyBVK0WX517D1_u5iCIZaCoXQfvEeew6tJc",
  authDomain: "kwitter-c2.firebaseapp.com",
  databaseURL: "https://kwitter-c2-default-rtdb.firebaseio.com",
  projectId: "kwitter-c2",
  storageBucket: "kwitter-c2.appspot.com",
  messagingSenderId: "716426512075",
  appId: "1:716426512075:web:ab7120b3944c72d4697d4e"
};



  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("username");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}