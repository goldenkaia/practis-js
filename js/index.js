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

/*const name = 'Dan';
const age = 35;
const hobby = 'swimming';

let string = `Hello, my name is ${name}, I'm ${age} years old and I like 
 ${hobby}`; /* kann ubertragen werden*/
/*console.log(string);
let stringTwo = "Hello, my name is "+name+", I'm "+age+" years old and I like "+hobby;
console.log(stringTwo); /* Kann nicht auf die andere Zeile ubertragen werden */

/* Напиши скрипт, який виводить в консоль заокруглені вгору / вниз і т.д. значення змінної
 value. Використовуй методи Math.floor(), Math.ceil() і Math.round(). Перевір що буде в 
 консолі при значеннях 27.3 та 27.9.
*/

/*const value = 27.4;
console.log(Math.floor(value));
console.log(Math.ceil(value));
console.log(Math.round(value));*/

// Підрахуйте суму чисел у діапазоні від 1 до 10 за допомогою циклу
// for, while та do...while.
// Підказка: у результаті має вийти 55.

/*let result = 0;
for ( let i = 0; i <= 10; i++) {
  result +=i;
}
console.log(result);*/

/*let result = 0;
let i = 0;
while (i <= 10) {
  result += i;
  i += 1;
}
console.log(result);*/

/*let result = 0;
let i = 0;
do {
  result += i;
  i += 1;
} while (i <= 10);
console.log(result);*/

//Напишіть функцію change_register(str), яка приймає як аргумент рядок і замінює регістр
//кожного символу на протилежний. Наприклад, якщо вводиться "КоЖнИй МиСлИвЕцЬ бАжАє ЗнАтИ"

/*const str = "КоЖнИй МиСлИвЕцЬ бАжАє ЗнАтИ";

function change_register(str) {
  let result = "";
  for (let letter of str) {
    if (letter === letter.toUpperCase()) {
      result += letter.toLowerCase();
    } else {
      result += letter.toUpperCase();
    }

    /*console.log(letter);
  }
  return result;
}

console.log(change_register(str));*/
/*
 * Напиши скрипт, який виводить у консоль рядок "Це позитивне число", якщо в 
prompt користувач ввів число більше за нуль. Якщо було введено нуль, виводь 
у консоль рядок "Це нуль". Якщо передали від'ємне число, у консолі має бути 
рядок "Це від'ємне число".
 */
/*const userInput = Number(prompt("Введіть число", 0));

if (userInput === 0) {
  console.log("Це нуль");
} else if (userInput > 0) {
  console.log("Це позитивне число");
} else {
  console.log("Це від'ємне число");
}*/
/*


 * Напиши скрипт, який порівнює числа змінних a і b. Якщо обидва значення 
більше 100, виведи в консоль максимальне з них. Інакше у консолі має бути сума 
значення b та числа 512.
 */

/*const a = 190;
const b = 50;

let result = 0;
if (a > 100 && b > 100) {
  if (a > b) {
    result = a;
  } else result = b;
} else result = b + 512;

console.log(result);*/

/*
 * Напиши скрипт який перевіряє чи закінчується значення змінної link символом /. Якщо ні, додай
 до кінця значення link цей символ. Використовуй конструкцію if...else.
 */

/*let link = "https://my-site.com/about";

if (link[link.length - 1] !== "/") {
  link += "/";
}
console.log(link);*/

/*
 * Напиши скрипт для відображення часу дедлайну здачі проекту. Використовуй конструкцію if...else.
 * Якщо до дедлайну 0 днів - виведи рядок "Сьогодні"
 * Якщо до дедлайну 1 день - виведи рядок "Завтра"
 * Якщо до дедлайну 2 дні - виведи рядок "Післязавтра"
 * Якщо до дедлайну 3+ днів - виведи рядок "Дата в майбутньому"
 */

/*const daysUntilDeadline = 1;
let message;

/*if (daysUntilDeadline === 0) {
  message = "Сьогодні";
} else if (daysUntilDeadline === 1) {
  message = "Завтра";
} else if (daysUntilDeadline === 2) {
  message = "Післязавтра";
} else message = "Дата в майбутньому";
console.log(message);

switch (daysUntilDeadline) {
  case 0:
    message = "Сьогодні";
    break;
  case 1:
    message = "Завтра";
    break;
  case 2:
    message = "Післязавтра";
    break;
  default:
    message = "Дата в майбутньому";
  
}
console.log(message);*/

/*
 * Напиши цикл for який виводить у консоль браузера
 числа за зростанням від min до max, але якщо число кратне 5.
 */

/*const min = 10;
const max = 100;

for (let i = min; i <= max; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}*/
/*
 * Створіть масив genres з елементами Jazz і Blues. ✅
 * Додайте "Рок-н-рол" в кінець. ✅
 * Виведіть у консоль перший елемент масиву. ✅
 * Виведіть у консоль останній елемент масиву. Код має працювати для масиву довільної довжини. ✅
 * Видаліть перший елемент і виведіть його в консоль.  ✅
 * Вставте «Country» та «Raggy» на початок масиву.  ✅
 */

/*const genres = ["Jazz", "Blues"];
console.log(genres);

/*const genres = Array("Jazz", "Blues");
console.log(genres);
genres.push("Rock-and-Roll");
console.log(genres[0]);

console.log(genres[genres.length - 1]);

console.log(genres.at(-1));

const element = genres.shift();
console.log(element);
genres.unshift("Country", "Raggy");
console.log(genres);*/

/*
 * Напишіть функцію copyArr(arr), яка копіює масив, не змінюючи оригінал.
 */

/*const clients = ["Mango", "Ajax", "Poly", "Kiwi"];

function copyArr(arr) {
  return [...arr];
}

function copyArr(arr) {
  return arr.slice();
}

function copyArr(arr) {
  return arr.concat([]);
}

const client2 = copyArr(clients);
console.log(client2);
console.log(clients === client2);*/

/*let clients = ["Mango", "Ajax", "Poly", "Kiwi"];
//clients = [];
clients.length = 0;

console.log(clients);*/

/*
 * Напиши скрипт для перебору масиву fruits циклом for. Для кожного елемента масиву
 виведіть у консоль рядок у форматі номер_елемента: значення_елемента. Нумерація елементів
  має починатися з першого.
 */

const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋", "🆘", "Ⓜ️"];

for (let i = 0; i < fruits.length; i += 1) {
  console.log(`${i + 1}) ${fruits[i]}`);
}
