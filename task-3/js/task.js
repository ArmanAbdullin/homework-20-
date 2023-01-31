let sum = 0;
let count = 0;
let falseIstrue = false;
while(!falseIstrue){
    let numbers = prompt('Введите числа от 1 до 100: ');
    if(numbers === null){
        falseIstrue = true;
        alert(Math.floor(sum/count));
    } else if (numbers > 0 && numbers <= 100) {
        count++;
        sum += parseInt(numbers);
    }
}