
//Constructors and Keywords exersize
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

// create object class using a function and this keyword
function Artist(Name, Age, Apparatus, Floorskill) {
    this.Artist_Name = Name;
    this.Artist_Age = Age;
    this.Artist_Apparatus = Apparatus;
    this.Artist_Floorskill = Floorskill;
}
// create new instance of object and set variable, use that name to display aspects of the object, use new keyword
var Ari = new Artist("Ari", 21, "Aerial Silks", "Tumbling");
function artistFunction() {
    document.getElementById("New_and_This").innerHTML = Ari.Artist_Name + " is a circus artist specializing in " + Ari.Artist_Apparatus + " and " + Ari.Artist_Floorskill + ".";
}


// create nested function to calculate monthly hours
function Nested_Function() {
    var w1 = 20;
    var w2 = 35;
    var w3 = 42;
    var w4 = 28;
    var total_hours = add_hours();
    function add_hours () {
        return w1 + w2 + w3 + w4;
    }
    document.getElementById("Nested_Function").innerHTML = "You worked " + total_hours + " this month.";
}


//function that uses user input to determine ability to vote.
// I would love to know how to get that result to actually stay on the page instead of flash, but the function works!
function vote_function() {
    var Age, Can_Vote;
    Age = document.getElementById("age").value;
    Can_Vote = (Age < 18) ? "You are too young" : "You are old enough";
    document.getElementById("vote").innerHTML = Can_Vote + " to vote.";
} 