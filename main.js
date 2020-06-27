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
      var name = inputValues('name');
      var people = inputValues('people');
      var datetime = inputValues('datetime');
      var message = inputValues('message');
      pushValuesToFirebase(name, people, datetime, message);
  }
  
  function inputValues(id){
      return document.getElementById(id).value;
  }
  
  function pushValuesToFirebase(name, people, datetime, message){
      var newMessageRef = messagesRef.push();
      newMessageRef.set({
          name: name,
          people: people,
          datetime: datetime,
          message: message
      })
  }