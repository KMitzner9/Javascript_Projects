//create a switch function that displays a string depending on user input
function App_funtion() {
    var App_output;
    var Apps = document.getElementById("Apparatus").value;
    var App_string = " is a great choice!";
    switch(Apps) {
        case "Fabric":
            App_output = "Fabric" + App_string;
        break;
        case "Rope":
            App_output = "Rope" + App_string;
        break;
        case "Lyra":
            App_output = "Lyra" + App_string;
        break;
        case "Trapeze":
            App_output = "Trapeze" + App_string;
        break;
    }
    document.getElementById("output").innerHTML = App_output;
}

//use getelementbyclassname method to change text in only one element of that class
function class_array() {
    var A = document.getElementsByClassName("click");
    A[1].innerHTML = "I am a changed string.";
}

// use the canvas element and draw a 2d graphic
var canvas = document.getElementById("canvas_1");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "rgb(200, 0, 0)";       //draw rectangle with solid color
ctx.fillRect(10, 10, 50, 50);

ctx.fillStyle = "rgba(0, 0, 200, .5)";  //overlay rectangle with transparency
ctx.fillRect(30, 30, 50, 50);

ctx.beginPath();        // path to draw a triangle
ctx.moveTo(75, 50);
ctx.lineTo(100, 75);
ctx.lineTo(100, 25);
ctx.closePath();
ctx.stroke();

//create a linear gradient that goes 
var grd = ctx.createLinearGradient(50, 50, 300, 300); //sets where the gradient will start and finish
grd.addColorStop(0, "black");       //these set the color stops
grd.addColorStop(0.5, "orange");
grd.addColorStop(1, "white");
ctx.fillStyle = grd;        //set the fill style
ctx.fillRect(100, 100, 100, 100);   //specify the shape to be filled