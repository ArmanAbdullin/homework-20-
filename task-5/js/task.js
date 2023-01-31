let count = 100000;
let myArray = [0,0,0,0,0,0,0,0,0,0];
for (let i = 0; i < count; i++) {
    let number = Math.floor(Math.random() * 100);
    let n = Math.floor (parseInt(number) /10);
    myArray[n]++;
}

console.log("Number of sample: " +count + 
        "\nGroup 0 - 9: " + myArray[0] + 
        "\nGroup 10 - 19: " + myArray[1]+ 
        "\nGroup 20 - 29: " + myArray[2]+ 
        "\nGroup 30 - 39: " + myArray[3]+ 
        "\nGroup 40 - 49: " + myArray[4]+ 
        "\nGroup 50 - 59: " + myArray[5]+ 
        "\nGroup 60 - 69: " + myArray[6]+ 
        "\nGroup 70 - 79: " + myArray[7]+ 
        "\nGroup 80 - 89: " + myArray[8]+ 
        "\nGroup 90 - 99: " + myArray[9]);