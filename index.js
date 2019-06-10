
let sound = document.createElement('audio');
sound.src = 'images/sound.mp3';
let scoreCounter = 1;
let chances = 5;

function startGame() {
    start.classList.add('hide');
    game.classList.remove('hide');

    generateBaloons();
}

function generateBaloons() {
    
    // let maxBaloons = Math.floor(Math.random() * 3);
    // let offset = container.getBoundingClientRect().top;
        
    // for(var i = 0; i < 10; i++){

    setInterval( function() {
        let allBaloons = document.querySelectorAll('.baloons');
            
        allBaloons.forEach(function (item, index){
                 item.style.top = (item.offsetTop - 1) + 'px';

                 if(item.offsetTop == 0){
                     intervalCounter--;
                     chance.innerText = chances--;
                     item.remove();
                 }
                 if(chances == 0){
                     game.classList.add('hide');
                     gameEnd.classList.remove('hide');
                 }
        });

    },20);

    let intervalCounter = 0;
    let key = setInterval(function () {
        if(intervalCounter < 5){
            intervalCounter++
       
            let baloon = document.createElement('img');
            baloon.src = 'images/' +Math.floor(Math.random() * 7) +'.png';
            baloon.className = 'baloons';
        
            baloon.style.left = Math.random() * innerWidth + 'px';
            baloon.style.top =  (baloon.offsetTop + 500 )+ 'px';
            
        
            baloon.onclick = () =>{
                baloon.remove();
                sound.play();
                score.innerText = scoreCounter++;
                intervalCounter--;
        }
        game.appendChild(baloon);



        }
        // else{
        //     clearInterval(key);
        // }
    }, 1500)

//     setInterval( function() {

//         let baloon = document.createElement('img');
//         baloon.src = 'images/' +Math.floor(Math.random() * 7) +'.png';
//         baloon.className = 'baloons';
    
//         baloon.style.left = Math.random() * innerWidth + 'px';
//         baloon.style.top =  (baloon.offsetTop + 500 )+ 'px';
        
    
//         baloon.onclick = () =>{
//             baloon.remove();
//             sound.play();
//             score.innerText = scoreCounter++;
//     }
//     game.appendChild(baloon);
// },2000);


    // }
    
    
    // gameEnd.classList.remove('hide');

    }
    
