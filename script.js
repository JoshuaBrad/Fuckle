var numKept = 0;
function random(){
    
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
}
diceImg.innerHTML += keptContent;
}

function keepDice(diceVal, content){
    content.classList.add("picked");
    content.onclick = null;
    numKept++;
    let diceKept = document.getElementById("keptDice");
    switch(diceVal){
        case 1:
            diceKept.innerHTML+='<img src="images/one.png">';
            break;
        case 2:
            diceKept.innerHTML+='<img src="images/two.png">';
            break;
        case 3:
            diceKept.innerHTML+= '<img src="images/three.png">';
            break;
        case 4:
            diceKept.innerHTML+= '<img src="images/four.png">';
            break;
        case 5:
            diceKept.innerHTML+='<img src="images/five.png">';
            break;
        case 6:
            diceKept.innerHTML+= '<img src="images/six.png">';
            break;
    }
}