const output = document.getElementById('output');
const gif = document.getElementById('gif_box');
var randNum = Math.floor( Math.random() * 100 ) + 1;
var guesses = 0;

document.getElementById('submit_button').addEventListener('click', evt => {
    let data = document.getElementById('number_input').value;
    var userNumber = parseInt(data, 10);
    
    if (userNumber == randNum) {
        guesses += 1;
        output.innerHTML='Correct!\nThat took you ' + guesses + ' guesses';
        gif.innerHTML="<img src='https://media.giphy.com/media/11sBLVxNs7v6WA/giphy.gif' />";
        randNum = Math.floor( Math.random() * 100 ) + 1;
        console.log(randNum);
    }
    else if (userNumber > randNum) {
        output.innerHTML='Too High!';
        guesses += 1;
        gif.innerHTML='';
    }
    else if (userNumber < randNum) {
        output.innerHTML='Too Low!';
        guesses += 1;
        gif.innerHTML='';
    };
});

console.log(randNum);

/*https://media.giphy.com/media/11sBLVxNs7v6WA/giphy.gif*/