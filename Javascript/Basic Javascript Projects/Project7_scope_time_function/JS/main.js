var X = 20;
function Multiply_numbers_1() {
    document.write(2 * X + "<br>");
}
function Multiply_numbers_2() {
    document.write(X * 3 + "<br>");
}

Multiply_numbers_1();
Multiply_numbers_2();

function Add_numbers_1() {
    var Y = 10;
    document.write(X + Y + "<br>");
}

function Add_numbers_2() {
    document.write(X + Y);
}

Add_numbers_1();
Add_numbers_2();

function get_Date() {
    if (new Date().getHours() < 13) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
    else {
        document.getElementById("Greeting").innerHTML = "How are you this evening?";
    }
}

function clap_hands() {
    var Happy = 5 > 3;
    var Know_it = 9 > 8;
    if (Happy && Know_it) {
        document.getElementById("clap").innerHTML = "clap your hands!";
    }
}

function circus_function() {
    var Answer = document.getElementById("answer").value;
    if (Answer = "yes") {
        document.getElementById("circus").innerHTML = "Awesome!!";
    }
    else {
        document.getElementById("circus").innerHTML = "What are you doing here!?";
    }
}