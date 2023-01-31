let number_1 = prompt('Введите первое число');
let number_2 = prompt('Введите второе чилсо');

let a = parseInt(number_1);
let b = parseInt(number_2);

if(a > b){
    alert('первое число больше второго.');
}
else if(a < b){
    alert('Первое число меньше второго.');
}
else if(a === b){
    alert('Числа равны');
}
else{
    alert('Ошибка ввода!');
}