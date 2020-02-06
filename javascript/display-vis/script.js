let boxes = document.getElementsByClassName('box');
console.log(boxes);

const handleClick = evt => {
    switch(evt.target.id) {
        case 'box0':
            boxes[0].style.visibility = 'hidden';
            break;
        case 'box1':
            boxes[1].style.display = 'none';
            break;
        case 'box2':
            boxes[0].style.visibility = 'visible';
            boxes[1].style.display = 'block';
            break;
    };
};

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', handleClick);
};