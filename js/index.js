/*..// Створіть змінну str і дайте їй значення 'abcde'. Звертаючись до окремих символів цього рядка,
//виведіть на екран символ 'a', символ 'b', символ 'e'....*/
/*
const str = "abcde";
alert(str[0]);
alert(str[1]);
alert(str[str.length-1]);
*/

// Переробіть наведений код так, щоб у ньому використовувалися операції +=, -=, *=, /=, ++, --.
//Кількість рядків коду не повинна змінитися. Код для переробки:
/*
 let num = 1;
 num += 12;
 num -=14;
 num *= 5;
 num /= 7;
 num ++;
 num --;
 */

 // Напишіть інструкцию, яка приймає рядок як аргумент і перетворює регістр першого
// символу рядка з нижнього регістру у верхній.
/*const str = "string not starting with capital";
let firstLetter = str[0].toUpperCase();
console.log(firstLetter);
let result = firstLetter + str.slice(1);
console.log(result);*/
// Ви просите користувача ввести суму його зарплати. Потім розраховуєте:

// Добавку у вигляді премії у сумі 15% від зарплати.
// Податки у сумі 10% від суми всіх нарахувань (зарплата + премія).
// Витрату в магазині в сумі 190.
// Розділяєте суму, що залишилася, між користувачем і його "дружиною"/"чоловіком".

/*let salary = Number(prompt("what is your salary?"));
console.log (typeof salary);
salary*=1.15;
alert("Your salary + bonus = " + salary);
salary*=0.9;
alert ("Afret paying taxex your salary = " + salary);
salary-=190;
alert("Your salary after shopping = " + salary);
salary/=2;
alert("Salary after sharing =" +salary);*/

/*
 * Шаблонные строки
 * Написать фразу с помощью конкатенации и шаблонных строк
 * "Hello, my name is [name], I'm [age] years old and I like [hobby]", где в квадратных скобках - переменные вставленные в строку
 */

const name = 'Dan';
const age = 35;
const hobby = 'swimming';

let string = `Hello, my name is ${name}, I'm ${age} years old and I like 
 ${hobby}`; /* kann ubertragen werden*/
console.log(string);
let stringTwo = "Hello, my name is "+name+", I'm "+age+" years old and I like "+hobby;
console.log(stringTwo); /* Kann nicht auf die andere Zeile ubertragen werden */ 