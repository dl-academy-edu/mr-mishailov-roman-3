// Задача 1

(function getAge(){
    let age= +(prompt('Введите возраст'));
    if ((typeof(age)!='number') || (isNaN(age)) || (true!=isFinite(age)) || age<18) {
        alert ('Введен некорректный возраст, попробуйте еще раз');
        getAge();
    };
    alert ('Проверка успешна!')
})();

// Задача 2

(function () {
    function add(x,y) {
        return x+y
    }
    function subtract (x,y) {
        return x-y
    }
    function divide(x,y) {
        return x/y
    }

    function multiply(x,y) {
        return x*y
    }

})();

// Функции являются чистыми, т.к они: 
// 1)не имеют вывода на экран,
// 2)не приминяют и не имзменяют внешних переменных,
// 3)с одинаковыми аргументами выводят одинаковый результат
// 4)не имеют побочных эффектов(http вызовы, запись на диск)


// Задача 3

function addCreator(firstNum){
    let sum=firstNum;
    return function (secondNum=0) {
        sum+=secondNum;
        return sum
    }
}  
const add = addCreator(5);
console.log(add(5));
console.log(addCreator(1)(3));


// Задача 4
function counterCreater (x=2) {
    let index=0;
    let step=x;
    return function () {
        index+=step;
        return index
    }
}

let myCounter1= counterCreater(-1);
    console.log(myCounter1());
    console.log(myCounter1());

let myCounter2= counterCreater(4);
    console.log(myCounter2());
    console.log(myCounter2());

let myCounter3= counterCreater();
    console.log(myCounter3());
    console.log(myCounter3());
