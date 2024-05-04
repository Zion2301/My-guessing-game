let compchoice = Math.floor(Math.random() * 100); 
// let answer = parseInt(window.prompt(`Enter a number`));
let guess;
let gameworking = true;

while (gameworking = true) {
    let guess = window.prompt(`Guess a number between 1 and 100`);
   let isguess = Number(guess);

    if (isNaN(isguess)) {
        window.alert(`Enter a NUMBER`);
    }
     else if (isguess < 1 || isguess > 100){
        window.alert(`Put a valid number!!!!`);
    }
    else {
        if (isguess < compchoice) {
            window.alert(`Number is too low, go higher`)
        }
        
        else if(isguess > compchoice){
            window.alert(`Number is too high, go lower`);
        }
        else {
            window.alert(`You got the number!!!!!!`);
             window.alert(`Lets play again`)
          let gameworking = false;
        }
    }
}


