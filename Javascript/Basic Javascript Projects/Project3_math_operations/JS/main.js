function addition_function() {      //addition function
    var addition = 2 + 2;
    document.getElementById("math").innerHTML = "2 + 2 = " + addition;
}

function subtraction_function() {       //subtraction function
    var subtraction = 10 - 7;
    document.getElementById("subtract").innerHTML = "10 - 7 = " + subtraction;
}

function multiplication_function() {        //multiply function
    var multiply = 11 * 4;
    document.getElementById("multiply").innerHTML = "11 x 4 = " + multiply;
}

function trump_function() {     //divide function
    var division = 58 / 6;
    document.getElementById("divide").innerHTML = "58 / 6 = " + division;
}

function algebra_function() {       //multiple operators
    var algebra = (7 + 6) * 2 / (18 - 5);
    document.getElementById("algebra").innerHTML = "(7 + 6) * 2 / (18 - 5) = " + algebra;
}

function modulus_function() {       //modulus/remainder function
    var modulus = 58 % 7;
    document.getElementById("modulus").innerHTML = "The remainder of 58 divided by 7 is " + modulus;
}

function negation_function() {      //unary function, negation
    A = 25
    document.getElementById("negation").innerHTML = -A
}

var X = 5;      //increment
X++;
document.write(X);

var Y = 10;     //decrement
Y--;
document.write(Y);

function random_number() {      //random number function
    var R = Math.round(Math.random()*100);
    document.getElementById("random").innerHTML = R;
}

function decrement_function() {
    Z = 10;
    var dec = --Z;
    document.getElementById("decrement").innerHTML = dec;
}

function increment_function() {
    I = 10;
    var inc = ++I;
    document.getElementById("increment").innerHTML = inc;
}