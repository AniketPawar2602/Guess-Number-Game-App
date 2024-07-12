let button = document.getElementById('guess-btn');
let msg = document.getElementById('guess-msg');
let trail = document.getElementById('guess-trail');
let originalNumber = Math.floor(Math.random()*100)+1;
let trailCount = 0;

button.addEventListener('click',()=>{
    ++trailCount;
    let guessNumber = Number(document.getElementById('guess-input').value);

    if(guessNumber <=100){
        if(guessNumber === originalNumber){
            msg.textContent = "Bingo! You guessed right number.";
            msg.style.color = "green";
            button.disabled = true;
            button.style.cursor = "not-allowed";
            trail.textContent = "Trails: "+trailCount; 
        }
        else if(guessNumber > originalNumber){
            msg.textContent = "Ohh! You guessed too high.";
            msg.style.color = "gold";
            trail.textContent = "Trails: "+trailCount;
        }
        else if(guessNumber < originalNumber){
            msg.textContent = "Ohh! You guessed too low.";
            msg.style.color = "gold";
            trail.textContent = "Trails: "+trailCount;
        }
    }
    else{
        msg.textContent = "*Number should be between 1-100";
        msg.style.color = "red";
        trailCount = 0;
        trail.textContent = "Trails: "+trailCount;
    }
});