const input = document.getElementById('userNum')
const output = document.getElementById('output')
const button = document.getElementById('subButton')

button.addEventListener('click', ()=> {
    const number = Number(input.value)

    if (isNaN(number)) {
        output.textContent = "Enter a valid number.";
    } else {
        evenStephen(number);
    }
});

input.addEventListener('keypress', (e)=> {
    if (e.key === 'Enter') {
        button.click();
    }
});

function evenStephen(num) {
/*     if (num % 2 === 1) {
        output.textContent = `${num} is odd!`;
    } else { 
        output.textContent = `${num} is even!`;
    } */

   output.textContent = num % 2 ? `${num} is odd!` : `${num} is even!`;

}

