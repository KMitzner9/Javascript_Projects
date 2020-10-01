function make_Sentence() {      //make a sentence using concat string method
    var str1 = "I have ";
    var str2 = "made these strings ";
    var str3 = "into a full sentence.";
    var str = str1.concat(str2, str3);
    document.getElementById("concat").innerHTML = str;
}

function slice_string() {       //slice a smaller string from the original using slice method
    var Sentence = "There is nothing left of me.";
    var slice = Sentence.slice(9, 16);
    document.getElementById("test").innerHTML = slice;
}

function upper_Case() {     //convert string to uppercase with toUpperCase method
    var str = "i can't wait to grow up.";
    var cap = str.toUpperCase();
    document.getElementById("grow").innerHTML = cap;
}

function search_function() {        //find where a letter or string is in a string
    var sent = "Where in this string is the letter x?"
    var find = sent.search("x");
    document.getElementById("search").innerHTML = find;
}

function number_string() {      //displays a number value as a string using toString method
    var X = 3489;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_function() {     //sets the number of digits a number will display
    var Y = 17/3;
    document.getElementById("Precision").innerHTML = Y.toPrecision(5);
}

function fix_function() {   //sets the number of decimal places that will be displayed
    var X = 1000/3
    document.getElementById("fixed").innerHTML = X.toFixed(3);
}

function find_value() {     //displays the value as a number
    var X = 17 * 4;
    document.getElementById("value").innerHTML = X.valueOf();
}