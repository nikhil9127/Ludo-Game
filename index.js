ludogame = () =>{
const Player1 = Math.floor(Math.random()*6)+1;
const Player1dice = `Images/dice-${Player1}.png`;
document.getElementById('check1').setAttribute('src', Player1dice);

const Player2 = Math.floor(Math.random()*6)+1;
const Player2dice = `Images/dice-${Player2}.png`;
document.getElementById('check2').setAttribute('src', Player2dice);

if(Player1 > Player2)
{
    document.querySelector('h1').innerHTML="Player 1 Winner :)";
} else if(Player1<Player2){
    document.querySelector('h1').innerHTML="Player 2 Winner :)";
} else{ document.querySelector('h1').innerHTML= "Koi Nahi Jeeta Re Baba :}"}


}

