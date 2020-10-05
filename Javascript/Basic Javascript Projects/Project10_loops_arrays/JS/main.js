function Call_Loop() {      //create while loop
    var number = 1;
    var X = 2;
    while (X < 7) {
        number += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = number;
}

//      create loop that counts to ten
function count_To_Ten() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}

// create function that uses the .length method
function string_length() {
    var str = "click to see how long I am!";
    document.getElementById("string").innerHTML = str.length;
}

// create a for loop that lists all objects in an array.
var Apparatuses = ["Fabric", "Rope", "Lyra", "Trapeze", "Straps", "Cloud Swing", "Chinese Pole"];
var result = "";
var C;
function for_loop() {
    for (C = 0; C < Apparatuses.length; C++) {
        result += Apparatuses[C] + "<br>";
    }
    document.getElementById("Apparatus_List").innerHTML = result;
}

// create an array using a function and print a random element from the array
function toxic_patriarchal_bullshit() {
    var toxic_BS = [];
    toxic_BS[0] = "victim blaming";
    toxic_BS[1] = "entitlement";
    toxic_BS[2] = "boundary violations";
    toxic_BS[3] = "name-calling";
    document.getElementById("bullshit").innerHTML = "If your partner engages in " + toxic_BS[Math.round(Math.random()*3)] + ", be aware that this is a major red flag." + "<br>" + "Sorry, y'all im going through some shit today and taking it out on my innocent code.";
}

// create a function that creates an object using a constant, change and add a property and print text that includes those properties
function constant_function() {
    const Artist_Ari = {type:"circus", apparatus:"fabric", floorskill:"tumbling"};
    Artist_Ari.age = 21;
    Artist_Ari.floorskill = "partner acrobatics";
    document.getElementById("Constant").innerHTML = "Ari, " + Artist_Ari.age + ", is a " + Artist_Ari.type + " artist, specializing in " + Artist_Ari.floorskill + ".";
}

// create a funciton that uses let. I can comment out different parts of the code to get the different values of L
function let_function() {
    var L = 20;
    document.getElementById("Let").innerHTML = L;
    {
        let L = 30;
        document.getElementById("Let").innerHTML = ("<br>" + L);
    }
    document.getElementById("Let").innerHTML = ("<br>" + L);
}

// write and execute a return statement
function return_function(name) {
    return name + " is one of our featured artists tonight!";
}
document.getElementById("return").innerHTML = return_function("Ari");

// create an object using let and print properties of that object using the description function and this method
let Artist = {
    name: "River",
    age: 20,
    apparatus: "straps",
    floorskill: "partner acrobatics",
    description : function() {
        return this.name + " is a circus artist specializing in " + this.apparatus + " and " + this.floorskill + ".";
    }
};
document.getElementById("Artist_Object").innerHTML = Artist.description();


// create a loop with a break
var text = "";
var i;
for (i=0; i < 10; i++) {
    if (i === 5) { break; }
    text += "The number is " + i + "<br>";
}
document.getElementById("break").innerHTML = text;


// create a loop with a continue
var text = "";
var i;
for (i = 0; i < 5; i++) {
    if (i === 2) { continue; }
    text += "The number is " + i + "<br>";
}
document.getElementById("continue").innerHTML = text;