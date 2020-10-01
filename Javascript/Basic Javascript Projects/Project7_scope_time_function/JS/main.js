//set global variable and use it in two functions

var X = 20;
function Multiply_numbers_1() {
    document.write(2 * X + "<br>");
}
function Multiply_numbers_2() {
    document.write(X * 3 + "<br>");
}

//prints the answer to the broswer

Multiply_numbers_1();
Multiply_numbers_2();

//set local variable and use in function

function Add_numbers_1() {
    var Y = 10;
    document.write(X + Y + "<br>");
}

//create function that uses a local variable from another function to view error in console

function Add_numbers_2() {
    document.write(X + Y);
}

Add_numbers_1();
Add_numbers_2();

// use the Date().getHours() function to display different messages based on time of day

function get_Date() {
    if (new Date().getHours() < 13) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
    else {
        document.getElementById("Greeting").innerHTML = "How are you this evening?";
    }
}

//create my own conditional statement 

function clap_hands() {
    var Happy = 5 > 3;
    var Know_it = 9 > 8;
    if (Happy && Know_it) {
        document.getElementById("clap").innerHTML = "clap your hands!";
    }
}

//create function that takes user input and uses an if and else statement to display different messages

function circus_function() {
    var Answer = document.getElementById("answer").value;
    if (Answer == "yes") {
        document.getElementById("circus").innerHTML = "Awesome!!";
    }
    else {
        document.getElementById("circus").innerHTML = "What are you doing here!?";
    }
}

//create function that uses else if statement to display different messages based on time

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}