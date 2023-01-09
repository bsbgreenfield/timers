function countdown(num){
    decrement_num(num);
} 
function decrement_num(number){
    const interval = setInterval(function(){
        console.log(number)
        number --;
        if (number == 0){
            console.log("DONE!");
            clearInterval(interval);
        }
    }, 1000)
}



function randomGame(){
    choose_rand();
}
function choose_rand(){
    let counter = 0;
    const game_interval = setInterval(function(){
        var choice = Math.random();
        counter++;
        if ((Math.floor((choice * 100)))/100 > 0.75){
            console.log(counter);
            clearInterval(game_interval);
        }
    }, 1000)
}
