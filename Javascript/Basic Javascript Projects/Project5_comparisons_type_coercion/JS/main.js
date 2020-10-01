document.write(typeof 5);

function display_typeof() {     //function to dislpay typeof
    document.getElementById("test0").innerHTML = typeof(6==6);
}

function NaN_function() {    //function to display NaN   
    document.getElementById("test").innerHTML = Math.sqrt(-1);   
}

function not_NaN() {             //function using isNaN to display false
    document.getElementById("test2").innerHTML = isNaN("7")  
}

function is_NaN() {             //function using isNaN to display true
    document.getElementById("test3").innerHTML = isNaN("0/0")
}

function infinity_function() {       //create function that displays infinity
    document.getElementById("test4").innerHTML = 10/0;
}

function neg_infinity() {       //function displays -infinity
    document.getElementById("test5").innerHTML = -2E308;
}

function bool_true() {          //function displays true
    document.getElementById("test6").innerHTML = 7 > 5;
}

function bool_false() {         //function displays false
    document.getElementById("test7").innerHTML = 7 < 5;
}

console.log(4 + 4);     //print the answer to the console

function coercion() {   //coercion of different data types
    document.getElementById("test8").innerHTML = (10 + "five");
}

console.log(4 < 2);         //print false to console

function boolean_true() {       //compare variables; display true
    document.getElementById("test9").innerHTML = 6==6;
}

function boolean_false() {      //compare variables; display false
    document.getElementById("test10").innerHTML = 6==2;
}

function compare1() {       //compare element values and types; display true
    X = 5;
    Y = 5;
    document.getElementById("answer").innerHTML = X===Y;
}

function compare2() {       //compare element values and types; display false on answer button
    X = "words";
    Y = 5;
    document.getElementById("answer").innerHTML = X===Y;
}

function compare3() {       //compare element values and types; display false
    X = "five";
    Y = 5;
    document.getElementById("answer").innerHTML = X===Y;
}

function compare4() {       //compare element values and types; display false
    X = 6;
    Y = 5;
    document.getElementById("answer").innerHTML = X===Y;
}

function and_true() {       //use AND function; display true
    document.getElementById("and1").innerHTML = 6 > 3 && 17 > 1;
}

function and_false() {      //use AND function; display false
    document.getElementById("and2").innerHTML = 6 < 3 && 17 > 1;
}

function or_true() {        //use OR function; display true
    document.getElementById("or1").innerHTML = 6 < 3 || 17 > 1;
}

function or_false() {       //use OR function; display false
    document.getElementById("or2").innerHTML = 6 < 3 || 17 < 1;
}

function not_true() {       //use NOT function; display true
    document.getElementById("not1").innerHTML = !(6 < 3 || 17 < 1);
}

function not_false() {      //use NOT function; display false
    document.getElementById("not2").innerHTML = !(6 < 3 || 17 > 1);
}