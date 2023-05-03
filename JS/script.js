function newPicture() {
    document.getElementById("building").src = "/Images/kitty.jpg";
}

function oldPicture() {
    document.getElementById("building").src = "/Images/building.jpg";
}

function newPicture1() {
    document.getElementById("city").src = "/Images/kitty.jpg";
}

function oldPicture1() {
    document.getElementById("city").src = "/Images/city.jpg";
}

function newPicture2() {
    document.getElementById("fish").src = "/Images/kitty.jpg";
}

function oldPicture2() {
    document.getElementById("fish").src = "/Images/fish.jpg";
}

function newPicture3() {
    document.getElementById("rain").src = "/Images/kitty.jpg";
}

function oldPicture3() {
    document.getElementById("rain").src = "/Images/rain.jpg";
}

function newPicture4() {
    document.getElementById("fog").src = "/Images/kitty.jpg";
}

function oldPicture4() {
    document.getElementById("fog").src = "/Images/fog.jpg";
}

//move
let image = document.getElementById('building');
let images = ['building.jpg', 'city.jpg', 'fish.jpg', 'fog.jpg', 'rain.jpg']
setInterval(function () {
    let random = Math.floor(Math.random() * 4);
    image.src = images[random];
}, 800);

//FORM
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

//JSON for form
let formData = [];

document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    let firstName = document.querySelector('#first-name').value;
    let lastName = document.querySelector('#last-name').value;
    let date = document.querySelector('#date').value;
    let cellPhone = document.querySelector('cell-phone').value;
    let schooName = docuemnt.querySelector('#school-name').value;

    formData.push(formDataObject);

    let formDataJson = JSON.stringify(formData);
});

//Loops with conditions

//loop 1

//let i = 3;
//while (i != 0) {
//    alert("a current value is: " +i);
//    i--;
//}
//
////Loop 2
//
//let i = 0;
//
//do{
//    alert("i is currently" +i);
//}while(i != 0);
//
////Loop 3
//
//let i;
//
//for(i = 0;i < 5; i++)
//    {
//        alert("howdy x " + i);
//    }
