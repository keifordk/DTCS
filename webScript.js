// JavaScript source code






function submit() {

    
    var fName = document.getElementById("fName").value;
    var sName = document.getElementById("sName").value;
    alert("Hello" + " " + fName + " " + sName);

}

function playSound(url) {

    new Audio(url).play();
}

function screenFlash() {

    document.body.style.backgroundColor = "red";
    
}
