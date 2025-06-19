var numKept = 0;
function random(){
    let diceImg = document.getElementById("activeDice");
    let keptContent="";
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
diceImg.innerHTML = keptContent;
}

function keepDice(diceVal, content){
    content.classList.add("picked");
    content.onclick = null;
    numKept++;
    let dicekept = document.getElementById("keptDice");
    dicekept.innerHTML = content;
}