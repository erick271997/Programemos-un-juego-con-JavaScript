const canvas=document.querySelector('#game');
const game=canvas.getContext('2d');





window.addEventListener('load', startGame);
function startGame() {
    let canvasSize;

    if(window.innerHeight > window.innerWidth){
        canvasSize = window.innerWidth * 0.80;
    } else{
        canvasSize = window.innerHeight * 0.80;
    }
    canvas.setAttribute('windt', canvasSize);
    canvas.setAttribute('height', canvasSize);

    const elementSize= canvasSize /10;

    console.log ({canvasSize,elementSize});


    game.font = elementSize + 'px Verdana' // Para que lo bomba tenga una dimesiones estable y verdava es el tipo de lectra se debe poner obligatorio
    game.textAlign='end';


    for ( let i = 1; i < 10; i++){
      game.fillText(emojis['X'], elementSize * i, elementSize); //Para extraer lo que tiene  en este caso la bomba  
    }

    

   /*  window.innerHeight */
    /* window.innerWidth */




 /*     game.fillRect(0,0,100,100);
     game.clearRect(0,0,100,50);
     /* game.clearRect(0,0,50,50); */ 

    /* game.font = '25px Verdana'
    game.fillStyle = 'purple';
    game.textAlign = 'center';
    game.fillText('Platzi', 25, 25); */
     
}