/*
    Task 1:

    Напишите результат сравнения рядом с выражением в виде комментария.
    Необходимо выполнить это задание без использования console.log()
    Данные для сравнения:

    "42" == 42        4242
    "0" == 0          true
    "0" == false      true
    "true" == true    true 
    true == (1 == "1") true

    "42" === 42      false 
    "0" === 0        false 
    "0" === false    false 
    "true" === true  false 
    true === (1 === "1")  false
*/


/* 
    Task 2:

    Переменная a = 'foo' , а переменная b = 'bar'
    Чему будет равен результат выражения: a+ +b 
    
    ps: два плюса - это не опечатка

*/

let a = 'foo';
let b = 'bar';

console.log(a+ +b); // fooNaN 

/*
    Task 3:

    Напишите результат сравнения следующих выражений :

    "ананас" > "яблоко"  false
    undefined == null    true
    undefined === null   false 

    Необходимо выполнить это задание без использования console.log()

*/

/*
    Task 4:

    Создайте свою конструкцию УСЛОВИЕ
    Минимальное количество условий в одной конструкции: 5

*/

let a1 = 10;
let b1 = 15;

// if (a1 > b1) {
// console.log("A bigger B");
// } else if (a1 < b1) {
// console.log("B bigger A"); //дальше конечно не пойдет
// } else if (a1 == b1) {
// console.log("A equally B");
// } else if (a1 > 10 || b1 > 10) {
// console.log("A or B > 10");
// } else {
// console.log("Nothing of this");
// }

/*
    Task 5:

    Созданную вами конструкцию из задания номер 4, запишите с помощью тернарного оператора

*/

a1 > b1 ? console.log("A bigger B") 
: a1 < b1 ? console.log("B bigger A")
: a1 == b1 ? console.log("A equally B")
: a1 > 10 ? console.log("A or B > 10")
: b1 > 10 ? console.log("A or B > 10")
: console.log("Nothing of this")

/*
    Task 6:
    Загадайте 5 чисел от 1 до 100, 
    а затем запросите у пользователя одно число в этом диапазоне.
    При КАЖДОМ совпадении числа выводите сообщение в МОДАЛЬНОМ окне: 
    "Вы угадали число". Если пользователь не угадал, то выводите сообщение:
    "Вы не угадали. Попробуйте ещё раз!"

    В задании необходимо использовать конструкцию switch/case.
*/

let number = prompt('Введите число');

switch(number) {
	case '22' :
		alert('Вы угадали!');
		break;
	case '99' :
		alert('Вы угадали!');
		break;
	case '48' :
		alert('Вы угадали!');
		break;
	case '77' :
		alert('Вы угадали!');
		break;
	case '73' :
		alert('Вы угадали!');
		break;
	default:
		alert('Попробуйте еще раз.')
}





