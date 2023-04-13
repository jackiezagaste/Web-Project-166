function newPicture() {
    document.getElementById("building").src="/Images/kitty.jpg";
}

function oldPicture() {
    document.getElementById("building").src="/Images/building.jpg";
}

function newPicture1() {
    document.getElementById("city").src="/Images/kitty.jpg";
}
function oldPicture1() {
    document.getElementById("city").src="/Images/city.jpg";
}

function newPicture2() {
    document.getElementById("fish").src="/Images/kitty.jpg";
}
function oldPicture2() {
    document.getElementById("fish").src="/Images/fish.jpg";
}

function newPicture3() {
    document.getElementById("rain").src="/Images/kitty.jpg";
}

function oldPicture3() {
    document.getElementById("rain").src="/Images/rain.jpg";
}

function newPicture4() {
    document.getElementById("fog").src="/Images/kitty.jpg";
}

function oldPicture4() {
    document.getElementById("fog").src="/Images/fog.jpg";
}

//move
let image = document.getElementById('building');
let images = ['building.jpg','city.jpg','fish.jpg','fog.jpg','rain.jpg']
setInterval(function(){
    let random = Math.floor(Math.random() * 4);
    image.src = images[random];
}, 800);