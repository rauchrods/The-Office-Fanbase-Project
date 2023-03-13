function headvidunmute(){
  let videoelement = document.getElementById("headvideo");
  if(videoelement.muted==true){
    videoelement.muted=false;
  }
  else{
    videoelement.muted=true;
  }
  
}

function myFunction() {
    // Get the text field
    var copyText = document.getElementById("shareinput");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Copied the text: " + copyText.value);

    let sharepopup = document.getElementById("sharepopupmain");
    sharepopup.style.display="none";

    let blurcont = document.getElementById("maincontent");
    blurcont.style.filter="blur(0)";
  }

  function openshare(){
    let sharepopup = document.getElementById("sharepopupmain");
    sharepopup.style.display="flex";

    let blurcont = document.getElementById("maincontent");
    blurcont.style.filter="blur(3px)";
    
  }

