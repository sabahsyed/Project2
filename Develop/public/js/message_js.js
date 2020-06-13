$(document).ready(() => {

    const messageInput = $("#userMessage");
    const userNameInput = $("#userName")
    console.log("HELLO inside message_js.js");
    const postBtn = $("#submitBtn");
    console.log(postBtn);
    postBtn.on("click", event => {
      event.preventDefault();
      console.log("Inside Post Button");
      const userMessage = {
        name : userNameInput.val().trim(),
        message: messageInput.val().trim()
      };
      if (!userMessage.message) {
        return;
      }
      console.log("This is the user name :" + userMessage.name)
      console.log("This is the message entered  :" +  userMessage.message);
      postMessage(userMessage.name,userMessage.message);
      displayMessage(userMessage.name,userMessage.message);
      //userMessage.val("");
    });
    function postMessage(name,message){
      $.post("/api/messages", {
        name :name,
        message: message
      })
        .then(() => {
          console.log(message);
          window.location.replace("/messages");
        })
        .catch(handleLoginErr);
    }
    function handleLoginErr(err) {
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
    }

    function displayMessage(){
      $.get("/api/listMessages"), function(data){
        if (data.length !== 0) {
          var msg = '';
          var name = '';
          for (var i = 0; i < data.length; i++) {
            name += data[i].username + '\n';
            msg += data[i].message + '\n';
          }
          $(".messages").text(msg);
        }
    
  }
}
});
  

    
  
  