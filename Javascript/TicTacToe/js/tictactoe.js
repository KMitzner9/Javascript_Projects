
let activePlayer = "X";         // this variable keeps track of who's turn it is
let selectedSquares = []        // this stores an array of moves that will be used to determine win conditions

//this function controls the placement of the Xs and Os and switches who is playing
function placeXorO(squareNumber) {
    
    //this condition checks that the square hasn't already been selected
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //retreives the html element id that was clicked
        let select = document.getElementById(squareNumber);
        //condition to check whos turn it is and place the correct symbol
        if (activePlayer === "X") {
            select.style.backgroundImage = "url('images/new_x.png')";
        }
        else {
            select.style.backgroundImage = "url('images/new_o.png')";
        }

        //the squareNumber and activePlayer and concatenated and placed into the array
        selectedSquares.push(squareNumber + activePlayer);
        checkWinConditions();       //checks win conditions
        //this condition changes the activePlayer
        if (activePlayer === "X") {
            activePlayer = "O";
        }
        else {
            activePlayer = "X";
        }
        audio("./media/meow.mp3");      //plays audio for each click
        if(activePlayer === "O") {      //disables click while computer is playing
            disableClick();
            setTimeout(function () { computersTurn();}, 1000);
        }
        return true;
    }
    function computersTurn() {      // function for the computers turn
        let success = false;
        let pickASquare;
        while(!success) {
            pickASquare = String(Math.floor(Math.random()*9));      //generates random number between 0-8
            if (placeXorO(pickASquare)) {                           //checks to see if that square has already been selected
                placeXorO(pickASquare);
                success = true;
            };
        }
    }
}

// create a function to check the array of inputs for a winning combination and set the x and y coordinates for the line that will be drawn
function checkWinConditions() {
    // X [0,1,2] condition
    if (arrayIncludes("0X", "1X", "2X")) { drawWinLine(50, 100, 558, 100);}
    // X [3,4,5]
    else if (arrayIncludes("3X", "4X", "5X")) { drawWinLine(50, 304, 558, 304);}
    // X [6,7,8]
    else if (arrayIncludes("6X", "7X", "8X")) { drawWinLine(50, 508, 558, 508);}
    // X [0,3,6]
    else if (arrayIncludes("0X", "3X", "6X")) { drawWinLine(100, 50, 100, 558);}
    // X [1,4,7]
    else if (arrayIncludes("1X", "4X", "7X")) { drawWinLine(304, 50, 304, 558);}
    // X [2,5,8]
    else if (arrayIncludes("2X", "5X", "8X")) { drawWinLine(508, 50, 508, 558);}
    // X [6,4,2]
    else if (arrayIncludes("6X", "4X", "2X")) { drawWinLine(100, 508, 510, 90);}
    // X [0,4,8]
    else if (arrayIncludes("0X", "4X", "8X")) { drawWinLine(100, 100, 520, 520);}
    // O [0,1,2]
    else if (arrayIncludes("0O", "1O", "2O")) { drawWinLine(50, 100, 558, 100);}
    // O [3,4,5]
    else if (arrayIncludes("3O", "4O", "5O")) { drawWinLine(50, 304, 558, 304);}
    // O [6,7,8]
    else if (arrayIncludes("6O", "7O", "8O")) { drawWinLine(50, 508, 558, 508);}
    // O [0,3,6]
    else if (arrayIncludes("0O", "3O", "6O")) { drawWinLine(100, 50, 100, 558);}
    // O [1,4,7]
    else if (arrayIncludes("1O", "4O", "7O")) { drawWinLine(304, 50, 304, 558);}
    // O [2,5,8]
    else if (arrayIncludes("2O", "5O", "8O")) { drawWinLine(508, 50, 508, 558);}
    // O [6,4,2]
    else if (arrayIncludes("6O", "4O", "2O")) { drawWinLine(100, 508, 510, 90);}
    // O [0,4,8]
    else if (arrayIncludes("0O", "4O", "8O")) { drawWinLine(100, 100, 520, 520);}
    // check for tie if all squares are filled
    else if (selectedSquares.length >= 9) {
        audio("./media/tieGame.mp3");
        setTimeout(function () { resetGame(); }, 1000); //sets a timeout for the game to reset
    }
    function arrayIncludes(squareA, squareB, squareC) {
        //create constants to check for 3 in a row, if all are true, the drawWinLine() function is executed
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        if (a === true && b === true && c === true) {return true;}
    }
}

//define the function for disabling clicks at various points in the game
function disableClick() {
    body.style.pointerEvents = "none";
    setTimeout(function () {body.style.pointerEvents = "auto";}, 1000);
}

//define the function that plays audio at certain times
function audio(audioURL) {
    let audio = new Audio(audioURL);        // make a new audio object and pass the path as a parameter
    audio.play();
}

//define drawWinLine function which uses html canvas
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    const canvas = document.getElementById("win-lines");    //access the html canval element id
    const c = canvas.getContext('2d');
    let x1 = coordX1,   //x-axis start point
        y1 = coordY1,   //y-axis start point
        x2 = coordX2,   //x-axis end point
        y2 = coordY2,   //y-axis end point
        x = x1,         //temp storage of x values
        y = y1;         //temp storage of y values
    
    //function that actually draws the win lines
    function animateLineDrawing() {
        //creates a loop for when the game stops and restarts
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        c.clearRect(0, 0, 608, 608);    //clears the content from last loop
        c.beginPath() ;                 //starts a new path
        c.moveTo(x1, y1);               //moves to starting point for line
        c.lineTo(x, y);                 //indicates the end point for the line
        c.lineWidth = 10;               //set line width
        c.strokeStyle = "rbga(70, 255, 33, 0.8)";   //and color
        c.stroke();                     //draws what has been defined
        //condition to check if weve reached the endpoint
        if (x1 <= x2 && y1 <= y2) {
            if (x < x2) {x += 10;}
            if (y < y2) {y += 10;}
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop);}
        }
        //condition specifically for the [6,4,2] condition since that line has a negative slope
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) {x += 10;}
            if (y > y2) {y -= 10;}
            if (x >= x2 && y <= y2) {cancelAnimationFrame(animationLoop);}
        }
    }
    function clear() {      //clears the canvas after the win line is drawn
        const animationLoop = requestAnimationFrame(clear);     //starts animation loop
        c.clearRect(0, 0, 608, 608);            //clears the canvas
        cancelAnimationFrame(animationLoop);    //stops the animation loop
    }
    disableClick();     //disables clicking while the sound is playing
    audio('./media/kiss.mp3');  //plays the win sound
    animateLineDrawing();       //calls the animation loop
    setTimeout(function () {clear(); resetGame();}, 1000); //timeout function for clearing and resetting the game
}

//function to reset game after tie or win happens
//by iterating through each square and removing the background image
function resetGame() {
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i));
        square.style.backgroundImage = "";
    }
    selectedSquares = [];   //this resets the array so it is empty for the new game
}