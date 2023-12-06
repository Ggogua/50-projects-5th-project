let div = document.getElementById('div');
let cont = document.getElementById('background-container');
let counter = 0;

let interval = setInterval(() => {
    counter++;
    div.textContent = counter + '%';

    if (counter === 100) {
        clearInterval(interval);
        div.textContent = ' ';
    }
}, 50);

let counter2 = 50;
let bgInterval = setInterval(() => {
    counter2--;

    if (counter2 === 0) {
        clearInterval(bgInterval);
    }

    cont.style.filter = `blur(${counter2}px)`;
}, 100);



