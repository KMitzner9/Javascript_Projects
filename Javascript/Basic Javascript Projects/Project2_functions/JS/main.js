function colorChange(newColor) {                    //create function to change color of text based on two buttons
    var para = document.getElementById("string");
    para.style.color = newColor;
}

function display_text() {                   //create function that displays two strings using the getElementById method
    var str = "Here is some text";
    str += " and here is more text";
    document.getElementById("text1").innerHTML = str;
}

function challenge() {
    var str = "I made my own function";
    var str2 = " and I concatenated it.";
    document.getElementById("button").innerHTML = str + str2;
}