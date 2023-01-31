let falseIsTrue = false;

let odd = 0;
let even = 0;

while (!falseIsTrue) {
    let number_1 = Math.floor(Math.random() * 10);
    let number_2 = Math.floor(Math.random() * 10);
    let userInput = prompt('Сколько будет если умножить: ' + number_1 + ' * ' + number_2);
    const result = number_1 * number_2;

    if (userInput == null) {
        falseIsTrue = true;
        alert('Ваши результаты.\nПравельных ответов: ' + odd + "\nНе правельных ответов: " + even);
    }
    else if (userInput != result) {
        alert("Не правильно: \n" + number_1 + ' * ' + number_2 + ' ≠ ' + result);
        even++;
    }
    else {
        alert("Правильно: \n" + number_1 + ' * ' + number_2 + ' = ' + result);
        odd++;
    }
}