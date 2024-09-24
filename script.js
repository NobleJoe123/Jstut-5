const messageInput = document.getElementById("message-input");

// messageInput.addEventListener("keydown", Function(event){
//     if(event.key == "Enter")
//         getMessage();
//  })

function getMessage(){
    document.getElementById("message-output").innerHTML = messageInput.value;
    messageInput.value = "";
}


if (document.getElementsByClassName) {
    console.log("Supported")
  } else {
    console.log("Unsopported")
  }

  document.addEventListener("mouseup", function(event) {
    console.log("Mouse up");
  });

  
document.addEventListener("keydown", function(event) {
    if (event.key === "1") {
        
  
    }
  });
  