
// create an object to keep track of values
const Calculator = {
    Display_Value: "0",             //displays 0 on the screen
    First_Operand: null,            //holds the first operand for any expression
    Wait_Second_Operand: false,     //checks whether or not the second operand has been entered
    operator: null,                 //holds the operator, like the First_Operand, we set it to null to start out
};

//function to modify the value each time a button is clicked
function Input_Digit(digit) {
    const { Display_Value, Wait_Second_Operand } = Calculator;
    
    //checks to see if Wait_Second_Operand is true and set the Display_Value to the key that was clicked
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    }
    //if the display value is 0, it is overwritten with the new input
    //otherwise the current value and input value are concatenated
    else {
        Calculator.Display_Value = Display_Value === "0" ? digit : Display_Value + digit;
    }
}

//this function handles decimal points
function Input_Decimal (dot) {
    //this ensures that additional clicks of the decimal point don't cause bugs
    if (Calculator.Wait_Second_Operand === true) return;
    //this checks to make sure there isn't already a decimal point
    //if there is no decimal point already, the point is concatenated to the display_Value
    if (!Calculator.Display_Value.includes(dot)) {
        Calculator.Display_Value += dot;
    }
}

//this function is for operators
function Handle_Operator(Next_Operator) {
    const { First_Operand, Display_Value, operator } = Calculator
    //this converts the current number displayed to a number type and stores the result in Calculator.First_Operand
    const Value_of_Input = parseFloat(Display_Value);
    //sets the operator and exits from the function 
    //if an operator already exists AND Wait_Second_Operand is true
    if (operator && Calculator.Wait_Second_Operator) {
        Calculator.operator = Next_Operator;
        return;
    }
    //sets Value_of_Input to First_Operand, if none has been entered
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    }
    //checks if an operator already exists
    else if (operator) {
        //this reads to me as setting a constant of Value_Now to 
        //true if there is a value for First_Operand, since 0 returns false?
        //I'm not exactly sure what this does for the overall function though
        const Value_Now = First_Operand || 0;   
        //if the operator exists, we use property lookup for the operator
        //in the Perform_Calculation object and execute the matching
        //function for the operator
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input); 
        //this sets a fixed about of numbers after the decimal
        result = Number(result).toFixed(9)
        //this will remove extra zeros
        result = (result * 1).toString()
        //converts the strings to numbers, displays the operator
        //and sets the first operand
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    //sets Wait_Second_Operand to true and the operator to the
    //operator entered, which is the parameter of this function
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

//this creates an object which contains all the functions performed by the different operators
const Perform_Calculation = {
    "/": (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    "*": (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    "+": (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    "-": (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    //*****I believe this is where I'm having my issue******
    // equals sign doesn't work like an equals sign but it does display the Second_Operand
    "=": (First_Operand, Second_Operand) => Second_Operand
};


//resets calculator back to original values
function Calculator_Reset() {
    Calculator.Display_Value = "0";
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

//function to update the screen with the contents of Display_Value
function Update_Display() {
    const display = document.querySelector(".calculator-screen");
    display.value = Calculator.Display_Value;
}
Update_Display();

//this monitors button clicks
const keys = document.querySelector(".calculator-keys");
keys.addEventListener("click", (event) => {
    // the target variable represents the element being clicked
    const { target } = event;
    //makes sure that element is actually a button
    if (!target.matches("button")) {
        return;
    }
    //if the button is in the class operator the Handle_Operator function is called
    //the display is updated and the function is exited
    if (target.classList.contains("operator")) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }
    //if the button is a decimal, Input_Decimal is called
    //display is updated, function exited
    if (target.classList.contains("decimal")) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }
    //if AC is clicked on, Calculator_Reset is called
    if (target.classList.contains("all-clear")) {
        Calculator_Reset ();
        Update_Display();
        return;
    }
    //calls the Input_Digit function and feeds it an argument
    //equal to the value of target.value.
    Input_Digit(target.value);
    Update_Display();           //updates the display
})