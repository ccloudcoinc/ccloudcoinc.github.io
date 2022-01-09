

function message_confirmation() {

  alert("You have send a message!")
  let msg = document.getElementById("message-text");
  let email = document.getElementById("sender-email");
  msg.value="";
  email.value = "";
  document.getElementById("close-button").click();
  
  

}

let msg_button = document.getElementById("msg-button");

msg_button.addEventListener("click", message_confirmation);