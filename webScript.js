// JavaScript source code



var x = 10;
var y = 10;
var playerImage;

function submit() {

    
    var fName = document.getElementById("fName").value;
    var sName = document.getElementById("sName").value;
    alert("Hello" + " " + fName + " " + sName);

}

function playGunSound(url) {

    new Audio(url).play();
    playerImage.src = "src/AngryCheese.png";
}

function playHealSound(url) {

    new Audio(url).play();
    playerImage.src = "src/HealedCheese.png";
}

function screenFlash() {

    
    var redBox = document.getElementById("canvas");
    redBox.classList.add('highlight');
    setTimeout(function () {
        redBox.classList.remove('highlight');
    }, 1000)
    
}

function main() {

    var canvas = document.getElementById("canvas");

    canvas.width = 940;
    canvas.height = 700;

    var ctx = canvas.getContext('2d');

    load();

    draw(ctx);

}

function draw(ctx) {

    ctx.fillStyle = 'gray';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    ctx.drawImage(playerImage, x, y);
    

    window.requestAnimationFrame(function () { draw(ctx); });
}

function load() {

    playerImage = new Image();

    
    playerImage.src = "src/StinkyCheese.png";
    
}

function keydown(event) {

    if (event.key == "ArrowLeft") {
        x=x-5;
    }

    else if (event.key == "ArrowUp") {
        y=y-5;
    }

    else if (event.key == "ArrowDown") {
        y=y+5;
    }


    else if (event.key == "ArrowRight") {
        x=x+5;
    }
}

window.onload = main;
window.addEventListener("keydown", keydown);