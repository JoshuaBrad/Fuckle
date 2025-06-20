var numKept = 0;
/*
TODO: Endturn functionality
TODO: check for farkles functionality
TODO: make multiplayer-able
TODO: track turn score and remove if farkle
/*
Arrays to store each dice value, check array length to determine scores.
Thanks Kyle for the idea!!
*/
var ones = [];
var twos = [];
var threes = [];
var fours = [];
var fives = [];
var sixes = [];

var numOnes, numTwos,numThrees;
var numFours, numFives,numSixes;

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
            break;
        case 2:
            keptContent+= '<img src="images/two.png" onclick="keepDice(2, this)">';
            break;
        case 3:
            keptContent+= '<img src="images/three.png" onclick="keepDice(3, this)">';
            break;
        case 4:
            keptContent+= '<img src="images/four.png" onclick="keepDice(4, this)">';
            break;
        case 5:
            keptContent+= '<img src="images/five.png" onclick="keepDice(5, this)">';
            break;
        case 6:
            keptContent+= '<img src="images/six.png" onclick="keepDice(6, this)">';
            break;
    }
    checkFarkle();
}
diceImg.innerHTML += keptContent;
}

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
function endTurn(){
    let diceKept = document.getElementById("keptDice");
        diceKept.innerHTML='<legend>Kept</legend>';
}
function calcScore(){
var pts=parseInt(document.getElementById("score").innerText);
var numPairs = 0;
var numTriples = 0;


numOnes = ones.length;
numTwos = twos.length;
numThrees = threes.length;
numFours = fours.length;
numFives = fives.length;
numSixes = sixes.length;
//Ones are simple and only need to be multipled until 3
if (numOnes < 4 && !straight()){
    pts += 100*numOnes
}
//Fives score regardless
if(numFives < 3 && !straight()){
    pts += 50*numFives;
}

//Triples
if (numOnes == 3){
    numTriples++;
}
if(numTwos == 3){
    pts += 200;
    numTriples++;
}
if(numThrees == 3){
    pts += 300;
    numTriples++;
}
if(numFours == 3){
    pts += 400;
    numTriples++;
}
if(numFives == 3){
    pts += 500;
    numTriples++;
}
if(numSixes == 3){
    pts += 600;
    numTriples++;
}
//Two triples
if (numTriples == 2){
    pts +=2500;
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
    pts += 1500;
}

//Quads
if(numOnes == 4){
    if (numPairs == 1){
        pts += 1500;
    }else{
        pts += 1000;
    }
}
if(numTwos == 4){
    if (numPairs == 1){
        pts += 1500;
    }else{
        pts += 1000;
    }
}
if(numThrees == 4){
    if (numPairs == 1){
        pts += 1500;
    }else{
        pts += 1000;
    }
}
if(numFours == 4){
    if (numPairs == 1){
        pts += 1500;
    }else{
        pts += 1000;
    }
}
if(numFives == 4){
    if (numPairs == 1){
        pts += 1500;
    }else{
        pts += 1000;
    }
}
if(numSixes == 4){
    if (numPairs == 1){
        pts += 1500;
    }else{
        pts += 1000;
    }
}

//Pentuples
if(numOnes == 5){
    pts += 2000;
}
if(numTwos == 5){
    pts += 2000;
}
if(numThrees == 5){
    pts += 2000;
}
if(numFours == 5){
    pts += 2000;
}
if(numFives == 5){
    pts += 2000;
}
if(numSixes == 5){
    pts += 2000;
}

//Hexuples
if(numOnes == 6){
    pts += 3000;
}
if(numTwos == 6){
    pts += 3000;
}
if(numThrees == 6){
    pts += 3000;
}
if(numFours == 6){
    pts += 3000;
}
if(numFives == 6){
    pts += 3000;
}
if(numSixes == 6){
    pts += 3000;
}

//1-6 Straight
if(straight()){
    pts += 1500;
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

document.getElementById("score").innerText = pts;
console.log(pts);
}
function straight(){
    if(numOnes == 1 && numTwos == 1 && numThrees == 1 && numFours == 1 && numFives == 1 && numSixes == 1){
        return true;
    }
}
function checkFarkle(){

}
