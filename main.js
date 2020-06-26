var firebaseConfig = {
    apiKey: "AIzaSyCcG1gD0kWadkIkJzo5tqSJrmxRVMUaVv4",
    authDomain: "resto-18fd8.firebaseapp.com",
    databaseURL: "https://resto-18fd8.firebaseio.com",
    projectId: "resto-18fd8",
    storageBucket: "resto-18fd8.appspot.com",
    messagingSenderId: "203744978285",
    appId: "1:203744978285:web:d0ca6717199aef9db1e664",
    measurementId: "G-N8J28GVP53"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);   
  firebase.analytics();

var messagesRef = firebase.database().ref('contactformmessages');
function mysubmission(){
    var name = document.getElementById('name').value;
    var people = document.getElementById('people').value;
    var datetime = document.getElementById('datetime').value;
    var message = document.getElementById('message').value;
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        people: people,
        datetime: datetime,
        message: message
    })
}