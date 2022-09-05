function aleatory(min, max){
     Math.floor(Math.random()*(max-min + 1) + min) 
}

function election(play){
    let result = ""
    if(play == 1){
        result = ("Choose 🥌")
    } else if(play == 2){
        result = ("Choose 🧻")
    }else if(play == 3){
        result =("Choose ✂")
    }else{
        result = ("it's not valid")
    }
    return result           
}
//1 es piedra, 2 es papel , 3 tijera
let player = 0
let pc = 0
let victory = 0
let lost = 0

while(victory < 3 && lost < 3){          
    pc = aleatory(1,3)
    player = prompt("Choose: 1 for stone, 2 for paper, 3 for scissors  ")
    alert("PC choose: " + election(pc))
    alert("Player choose: " + election(player))  
    //combat
    if(player == pc){
        alert("tie")
    }else if((player == 1 && pc == 3) || (player == 2 && pc == 1) || (player == 3 && pc == 2)){
        victory++
    }else{
        lost = lost + 1
    }
}
alert("you won " + victory + " times" + " you lost " + lost + " times")