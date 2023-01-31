let arrayicons = [];
let userInput = prompt('Введите слова');

let icons = "";
for(let i = 0; i < userInput.length; i++){
    icons += "*";
}
console.log('**' + icons + '**\n' + '* ' +  userInput + ' *\n' + '**' + icons + '**');