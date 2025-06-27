/*
TODO: Endturn functionality
TODO: check for farkles functionality
TODO: make multiplayer-able
TODO: track turn score and remove if farkle
/*
Arrays to store each dice value, check array length to determine scores.
Thanks Kyle for the idea!!
*/
//*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*//
//*/*/*/*/*/*GLOBAL  VARIABLES*/*/*/*/*/*/*//
let ones = [];
let twos = [];
let threes = [];
let fours = [];
let fives = [];
let sixes = [];

let numOnes, numTwos,numThrees;
let numFours, numFives,numSixes;

let numKept = 0;

let turnPts = 0, totalPts = 0;
//*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*//
//*/*/*/*/*/DICE THROW FUNCTION/*/*/*/*/*/*//
function throwDice(){
    calcScore();
    let diceImg = document.getElementById("activeDice");
    diceImg.innerHTML="<legend>Active</legend>"
    let keptContent="";
    if(numKept == 6){
        numKept = 0;
    }
    
    for(let i = 0; i < (6-numKept); i++){
    let diceToShow = (Math.floor(Math.random()*6)+1);

    switch (diceToShow){
        case 1:
            keptContent+='<img src="images/one.png" onclick="keepDice(1, this)">';
			ones[ones.length] = 1;
            break;
        case 2:
            keptContent+= '<img src="images/two.png" onclick="keepDice(2, this)">';
			twos[twos.length] = 1;
            break;
        case 3:
            keptContent+= '<img src="images/three.png" onclick="keepDice(3, this)">';
			threes[threes.length] = 1;
            break;
        case 4:
            keptContent+= '<img src="images/four.png" onclick="keepDice(4, this)">';
			fours[fours.length] = 1;
            break;
        case 5:
            keptContent+= '<img src="images/five.png" onclick="keepDice(5, this)">';
			fives[fives.length] = 1;
            break;
        case 6:
            keptContent+= '<img src="images/six.png" onclick="keepDice(6, this)">';
			sixes[sixes.length] = 1;
            break;
    }
    checkFarkle();
	ones.length = 0;
	twos.length = 0;
	threes.length = 0;
	fours.length = 0;
	fives.length = 0;
	sixes.length = 0;
}
diceImg.innerHTML += keptContent;
}


//*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*//
//*/*/*/*/*/DICE KEEP  FUNCTION/*/*/*/*/*/*//
function keepDice(diceVal, content){
    if (numKept == 0){
        let diceKept = document.getElementById("keptDice");
        diceKept.innerHTML='<legend>Kept</legend>';
    }
    content.classList.add("picked");
    content.onclick = null;
    numKept++;
    let diceKept = document.getElementById("keptDice");
    switch(diceVal){
        case 1:
            diceKept.innerHTML+='<img src="images/one.png">';
            ones[ones.length] = 1;
            break;
        case 2:
            diceKept.innerHTML+='<img src="images/two.png">';
            twos[twos.length] = 1;
            break;
        case 3:
            diceKept.innerHTML+= '<img src="images/three.png">';
            threes[threes.length] = 1;
            break;
        case 4:
            diceKept.innerHTML+= '<img src="images/four.png">';
            fours[fours.length] = 1;
            break;
        case 5:
            diceKept.innerHTML+='<img src="images/five.png">';
            fives[fives.length] = 1;
            break;
        case 6:
            diceKept.innerHTML+= '<img src="images/six.png">';
            sixes[sixes.length] = 1;
            break;
    }
}


//*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*//
//*/*/*/*/*/*END TURN FUNCTION*/*/*/*/*/*/*//
function endTurn(){
    let diceKept = document.getElementById("keptDice");
        diceKept.innerHTML='<legend>Kept</legend>';
}


//*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*//
//*/*/*/*/CALCULATE SCORE FUNCTION*/*/*/*/*//
function calcScore(){
let ptsBox=parseInt(document.getElementById("score").innerText);
let numPairs = 0;
let numTriples = 0;


numOnes = ones.length;
numTwos = twos.length;
numThrees = threes.length;
numFours = fours.length;
numFives = fives.length;
numSixes = sixes.length;
 
//Ones are simple and only need to be multipled until 3
if (numOnes < 4 && !straight()){
    turnPts += 100*numOnes
}
//Fives score regardless
if(numFives < 3 && !straight()){
    turnPts += 50*numFives;
}

//Triples
if (numOnes == 3){
    numTriples++;
}
if(numTwos == 3){
    turnPts += 200;
    numTriples++;
}
if(numThrees == 3){
    turnPts += 300;
    numTriples++;
}
if(numFours == 3){
    turnPts += 400;
    numTriples++;
}
if(numFives == 3){
    turnPts += 500;
    numTriples++;
}
if(numSixes == 3){
    turnPts += 600;
    numTriples++;
}
//Two triples
if (numTriples == 2){
    turnPts +=2500;
}

//Pairs
if(numOnes == 2){
    numPairs ++;
}
if(numTwos == 2){
    numPairs ++;
}
if(numThrees == 2){
    numPairs ++;
}
if(numFours == 2){
    numPairs ++;
}
if(numFives == 2){
    numPairs ++;
}
if(numSixes == 2){
    numPairs ++;
}
    console.log("numPairs "+numPairs);
//Three pairs
if (numPairs == 3){
    turnPts += 1500;
}

//Quads
if(numOnes == 4){
    if (numPairs == 1){
        turnPts += 1500;
    }else{
        turnPts += 1000;
    }
}
if(numTwos == 4){
    if (numPairs == 1){
        turnPts += 1500;
    }else{
        turnPts += 1000;
    }
}
if(numThrees == 4){
    if (numPairs == 1){
        turnPts += 1500;
    }else{
        turnPts += 1000;
    }
}
if(numFours == 4){
    if (numPairs == 1){
        turnPts += 1500;
    }else{
        turnPts += 1000;
    }
}
if(numFives == 4){
    if (numPairs == 1){
        turnPts += 1500;
    }else{
        turnPts += 1000;
    }
}
if(numSixes == 4){
    if (numPairs == 1){
        turnPts += 1500;
    }else{
        turnPts += 1000;
    }
}

//Pentuples
if(numOnes == 5){
    turnPts += 2000;
}
if(numTwos == 5){
    turnPts += 2000;
}
if(numThrees == 5){
    turnPts += 2000;
}
if(numFours == 5){
    turnPts += 2000;
}
if(numFives == 5){
    turnPts += 2000;
}
if(numSixes == 5){
    turnPts += 2000;
}

//Hexuples
if(numOnes == 6){
    turnPts += 3000;
}
if(numTwos == 6){
    turnPts += 3000;
}
if(numThrees == 6){
    turnPts += 3000;
}
if(numFours == 6){
    turnPts += 3000;
}
if(numFives == 6){
    turnPts += 3000;
}
if(numSixes == 6){
    turnPts += 3000;
}

//1-6 Straight
if(straight()){
    turnPts += 1500;
}
numOnes = 0;
numTwos = 0;
numThrees = 0;
numFours = 0;
numFives = 0;
numSixes = 0;
numTriples = 0;
numPairs = 0

ones.length = 0;
twos.length = 0;
threes.length = 0;
fours.length = 0;
fives.length = 0;
sixes.length = 0;

document.getElementById("turnScore").innerText = turnPts;
console.log(turnPts);
}

//*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*//
//*/*/*/*CHECK IF STRAIGHT FUNCTION/*/*/*/*//
function straight(){
    if(numOnes == 1 && numTwos == 1 && numThrees == 1 && numFours == 1 && numFives == 1 && numSixes == 1){
        return true;
    }
}


//*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*//
//*/*/*/*CHECK FOR FARKLE FUNCTION*/*/*/*/*//
function checkFarkle(){
	if (checkScore() == 0){
		
	}
}

function checkScore(){
	let pts = 0;
	
	return pts;
}
