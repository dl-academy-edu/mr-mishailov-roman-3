// Задача 1

let number = +(prompt('Введите число'));
let i=1;

if ((typeof(number)!='number') || (isNaN(number)) || (true!=isFinite(number))) {
    alert ('Ввведено некорректное число');
} else {
    while (i<number) {
        if (i%4===0) {
            i+=1;
            continue
        } else {
            console.log(i);
            i+=1;
        }
    }
}

// Задача 2

// let number = +(prompt('Введите число для нахождения факториала'));
// let i=1;
// let factorial = 1;

// if ((typeof(number)!='number') || (isNaN(number)) || (true!=isFinite(number))) {
//     alert ('Ввведено некорректное число');
// } else if (number<0) {
//     alert ('Введено отрицательное число')
// } else { 
//     while (i<number+1) {
//         factorial*=i;
//         i+=1
//     }
// }
// console.log(factorial)


// // Задача 3

// let number = +(prompt('Введите число для возведение в степень'));
// let pow= +(prompt('Введите степенное число'));
// let sum=1;

// if ((typeof(number)!='number') || (isNaN(number)) || (true!=isFinite(number))) {
//     alert ('Ввведено некорректное число');
// } else if ((typeof(pow)!='number') || (isNaN(pow)) || (true!=isFinite(pow))) {
//     alert ('Ввведена некорректная степень');
// } else { if (pow===0){
//     console.log(1);
//     }   else if (pow>0) {
//             for (i=1; i<=pow; i++) {
//                 sum*=number;}
//         } else {
//             for (i=1; i<=(-pow); i++)
//             sum*=(1/number);
//         }
//         console.log(sum)
//     }



