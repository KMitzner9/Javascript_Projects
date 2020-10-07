
function getReceipt() {

    //initializes the string that will get added to as the functions proceed
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;

    //creates as array of all the objects in the class "size"
    var sizeArray = document.getElementsByClassName("size");
    
    //sets up a for loop that iterates through the size selections
    //to see which radio button is selected
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {                     //checks to see if the selection at index i is checked
            var selectedSize = sizeArray[i].value;      //sets variable selected size to the value at index i
            text1 = text1 + selectedSize + "<br>";      //adds the size to the text of the reciept
        }
    }
    //set the variable sizeTotal to a number value that will later
    //be concatenated to the receipt
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    }
    else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    }
    else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    }
    else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    else if (selectedSize === "Can't Fit Through The Door") {
        sizeTotal = 20;
    }
    //adds the size total to the variable runningTotal, which will later incorporate the cost of toppings
    runningTotal = sizeTotal; 
    //this creates the string for the reciept so far and can be passed on to future functions
    //I believe we're using console.log here to keep this out of sight until the toppings are added?
    console.log(selectedSize + " = $" + sizeTotal + ".00");
    console.log("size text1: " + text1);
    console.log("subtotal: $" + runningTotal + ".00");
    //calls function getTopping and feeds it the parameters runningTotal and text1
    getTopping(runningTotal, text1);
};

//this function adds the total amount for the toppings
//and prints that information to the reciept
function getTopping(runningTotal, text1) {
    var toppingTotal = 0;           //create variable to keep track of total cost of toppings
    var selectedTopping = [];       //create an empty array to which topping selections will be added
   //creates an array of all the topping elements
    var toppingArray = document.getElementsByClassName("toppings");
    //uses a loop to check each topping element to see if its been selected or not
    for (var j = 0; j < toppingArray.length; j++) {
        //if that topping is selected, its string value is added to the array
        //a string naming the topping is added to our running receipt on the console
        //var text1 is updated with the new topping information
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: (" + toppingArray[j].value + ")");
            text1 = text1 + toppingArray[j].value + "<br>";
        }
    }
    //create a new variable that keeps track of how many toppings are selected
    var toppingCount = selectedTopping.length;
    //this conditional subtracts 1 from the topping count since the first topping is free.
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1);
    }
    else {
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal);
    console.log("total selected topping items: " + toppingCount);
    console.log(toppingCount + " topping - 1 free topping = " + "$" + toppingTotal + ".00");
    console.log("topping text1: " + text1);
    console.log("Purchase Total: " + "$" + runningTotal + ".00");
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>";
};