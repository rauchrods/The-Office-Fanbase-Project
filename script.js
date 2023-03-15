function headvidunmute() {

  for (let str of strarr) {
    let videoelement = document.getElementById(str);
    if (videoelement.style.display == "block") {
      if (videoelement.muted == true) {
        videoelement.muted = false;
      }
      else {
        videoelement.muted = true;
      }

      break;
    }

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
  sharepopup.style.display = "none";

  let blurcont = document.getElementById("maincontent");
  blurcont.style.filter = "blur(0)";
}


function openshare() {
  let sharepopup = document.getElementById("sharepopupmain");
  sharepopup.style.display = "flex";

  let blurcont = document.getElementById("maincontent");
  blurcont.style.filter = "blur(3px)";

}

let strarr = ["headvideo1", "headvideo2", "headvideo3"];

window.onload = function () {

  let x = parseInt(Math.random() * strarr.length);

  let vidobj = document.getElementById(strarr[x]);

  vidobj.style.display = "block";

}


const observer = new IntersectionObserver((entrier) =>{
    entrier.forEach((entry)=>{
      console.log(entry);
      if(entry.isIntersecting){
        entry.target.classList.add("show");
      }
      else{
        entry.target.classList.remove("show");
      }
    });
});


const hiddenelement = document.querySelectorAll(".mycard");
hiddenelement.forEach((el)=> observer.observe(el));

