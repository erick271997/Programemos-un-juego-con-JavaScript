const canvas=document.querySelector('#game');
const game=canvas.getContext('2d');



window.addEventListener('load',startGame);
function startGame(){
    let canvasSize;
    if(window.innerHeight>window.innerWidth){
        canvasSize=window.innerWidth*0.8;
    }else{canvasSize=window.innerHeight*0.8;
    }



    canvas.setAttribute('width',canvasSize);
    canvas.setAttribute('height',canvasSize);

    const elementsSize=canvasSize/10;

    console.log({canvasSize,elementsSize});

    game.font=elementsSize+'px Verdana'; // Para que lo bomba tenga una dimesiones estable y verdava es el tipo de lectra se debe poner obligatorio

    game.textAlign='end';
    
    for(let i=1;i<=10;i++){
        game.fillText(emojis['X'],elementsSize,elementsSize*i); //Para extraer lo que tiene  en este caso la bomba  
    }}



    