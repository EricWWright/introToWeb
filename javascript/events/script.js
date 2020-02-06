const potato = document.getElementById('potato');
const tomato = document.getElementById('tomato');
const stuff = document.getElementById('stuff');
const things = document.getElementById('things');
const response = document.getElementById('response');
const my_input = document.getElementById('my_input');

// potato.addEventListener('click', btnClicked);
// tomato.addEventListener('click', btnClicked);
// stuff.addEventListener('click', btnClicked);
// things.addEventListener('click', btnClicked);

// function btnClicked(evt) {
//     // console.log(evt);
//     // response.innerHTML=evt.target.id;
//     switch(evt.target.id) {
//         case 'potato':
//             response.innerHTML='I love potatoes!';
//             break;
//         case 'tomato':
//             response.innerHTML='I hate tomatoes.';
//             break;
//         case 'stuff':
//             response.innerHTML="Don't touch my stuff!";
//             break;
//         case 'things':
//             response.innerHTML='Look at all the things!';
//             break;
//     };
// };

const btnClicked = evt => {
    // console.log(evt);
    // response.innerHTML=evt.target.id;
    switch(evt.target.id) {
        case 'potato':
            response.innerHTML=my_input.value;
            my_input.value = '';
            // response.innerHTML='I love potatoes!';
            break;
        case 'tomato':
            response.innerHTML='I hate tomatoes.';
            break;
        case 'stuff':
            response.innerHTML="Don't touch my stuff!";
            break;
        case 'things':
            response.innerHTML='Look at all the things!';
            break;
    };
};

potato.addEventListener('click', btnClicked);
tomato.addEventListener('dblclick', btnClicked);
stuff.addEventListener('mouseover', btnClicked);
things.addEventListener('mouseout', btnClicked);