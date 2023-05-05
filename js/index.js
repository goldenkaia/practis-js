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

/*const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋", "🆘", "Ⓜ️"];

for (let i = 0; i < fruits.length; i += 1) {
  console.log(`${i + 1}) ${fruits[i]}`);
}*/

//Напишіть код, який перетворює та поєднує всі елементи масиву в одне рядкове значення. Елементи
//масиву будуть розділені комою. Отримайте результат двома різними методами.

/* vegetables = ["Капуста", "Ріпа", "Редиска", "Морква"];

//console.log(vegetables.join(",")); (First var);

let result = "";
for (let vegetable of vegetables) {
  result += vegetable + ",";
}
console.log(result);

console.log(result.slice(0, -1));*/

//Напишіть функцію removeDuplicates(arr), яка повертає масив, у якому видалені повторювані
//елементи з масиву arr (ігноруйте чутливість до регістру).

/*var arr = [
  "php",
  "php",
  "css",
  "css",
  "script",
  "script",
  "html",
  "html",
  "java",
];*/

/*function removeDuplicates(arr) {
  let newArr = [];
  for (let element of arr) {
    if (!newArr.includes(element)) {
      newArr.push(element);
    }
  }
  return newArr;
}*/

/*console.log(removeDuplicates(arr)); // [php,css,script,html,java]

function removeDuplicates(arr) {
  return [...new Set(arr)];
}*/

/*
 * Напиши функцію min(a,b), яка повертає найменше з чисел a та b.
 
console.log(min(5, 10, 14, 1, 5));
console.log(min(2, 0, 1, 5));*/

/*function min(...args) {
  let num = args[0];
  for (let element of args) {
    if (element < num) {
      num = element;
    }
  }
  return num;
}

/*function min(...args) {
  // console.log(...args);
  return Math.min(...args);
}*/

/*
 * Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами, значення 
яких будуть передані до параметра dimensions у вигляді рядка. Значення гарантовано 
розділені пробілом.
 */
/*
 * Напиши функцію logItems(items), яка отримує масив і використовує цикл for, який для 
кожного елемента масиву виводитиме в консоль повідомлення у форматі <номер елемента> - <значення 
елемента>. Нумерація елементів має починатися з першого.
* Наприклад, для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде
 виведено 1 - Mango, а для індексу 2 виведе 3 - Ajax.
 */

/*function logItems(array = []) {
  //   const arr = array || [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(`${i + 1}) ${element}`);
  }
}*/

/*function logItems(array = []) {
  array.forEach((element, index) => {
    console.log(`${index + 1}) ${element}`);
  });
}

logItems(["Mango", "Poly", "Ajax"]);
logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);*/

/* Напиши функцію findLargestNumber(numbers)яка шукає найбільше число в масиві.
 */

/*function findLargestNumber(numbers) {
  //return Math.max(...numbers);
  let number = numbers[0];
  for (let element of numbers) {
    if (element > number) {
      number = element;
    }
  }
  return number;
}
console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83*/

// Напишіть функцію filterFalse(arr), яка очищає масив від хибних (false) значень: false,
//null, undefined, 0, –0, NaN та "" (пустий рядок).

/*const array = [NaN, 0, 77, false, -17, "", undefined, 99, null];
function filterFalse(arr) {
  return arr.filter((value) => Boolean(value));
}*/

/*const array = [NaN, 0, 77, false, -17, "", undefined, 99, null];
function filterFalse(arr) {
  return arr.filter((value) => !!value);
}*/

//console.log(filterFalse(array)); // [ 77, -17, 99 ]

/*const array = [NaN, 0, 77, false, -17, "", undefined, 99, null];
function filterFalse(arr) {
  return arr.filter((value) => value);
}
console.log(filterFalse(array)); // [ 77, -17, 99 ]*/

//Перед вами змінна, що містить рядок. Напишіть код, який створює масив, який
//складатиметься з перших літер слів рядка str.

/*const str = "Каждый охотник желает знать, где сидит фазан.";

console.log(str.split(" "));
const words = str.split(" ");
const array = words.map((element) => element[0]);
console.log(array); // [К,о,ж,з,г,с,ф]*/

/*class Client {
  #login;
  #email;
  constructor(login, email) {
    this.#login = login;
    this.#email = email;
  }
  get client() {
    return {
      login: this.#login,
      email: this.#email,
    };
  }
  set login(newLogin) {
    this.#login = newLogin;
  }
  set email(newEmail) {
    this.#email = newEmail;
  }
}
const firstClient = new Client("Dog", "dog@mail");
console.log(firstClient.client);
firstClient.email = "cat@mail.com";
console.log(firstClient.client);*/

/*class Calculator {
  constructor() {
    this.number = 0;
  }
  get resultCalc() {
    return this.number;
  }
  addCalc(number) {
    return (this.number += number);
  }

  substruct(number) {
    return (this.number -= number);
  }
  divide(number) {
    if (number !== 0) {
      return (this.number /= number);
    }
  }
  multiply(number) {
    return (this.number *= number);
  }
}
const calc = new Calculator();
console.log(calc.addCalc(5));
console.log(calc.addCalc(10));
console.log(calc.substruct(7));

calc.addCalc(5);
calc.addCalc(10);
calc.substruct(7);
calc.multiply();
calc.divide(2)*/

/*[
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
  },
];

const sortByName = (users) => {
  return [...users].sort((a, b) => a.name.localeCompare(b));
};*/

// Напиши функцію конструктор Storage, який створює об'єкти
//Для управління складом товарів.
//При виклику отримуватиме один агрумент - початковий масив товарів,
//і записувати їх у властивість items.
//Додай методи класу:
//getItems() - повертайте масив товарів
//addItems(item) - отримує новий товар та додає його до поточних
//removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних
//++++++++++++++++++++++++++++++++++++++++++

/*const Storage = function (items) {
  this.items = items;
};

Storage.prototype.getItems = function () {
  return this.items;
};
Storage.prototype.addItems = function (item) {
  this.items.push(item);
};
Storage.prototype.removeItem = function (item) {
  this.items = this.items.filter((product) => product !== item);
};*/

/*class Storage {
  constructor(items) {
    this.items = items;
  }
  getItems() {
    return this.items;
  }
  addItems(item) {
    this.items.push(item);
  }
  removeItem(item) {
    this.items = this.items.filter((product) => product !== item);
  }
}

const storage = new Storage(["apple", "mango"]);
console.log(storage.getItems());
storage.addItems("banana");
storage.removeItem("apple");
console.log(storage.getItems());*/

/*class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }
  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin extends User {
  blacklistedEmails = [];
  static AccessLevel = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };

  constructor({ email, accessLevel }) {
    super(email);
    this.accessLevel = accessLevel;
  }
  blacklist(email) {
    this.blacklistedEmails.push(email);
  }
  isBlacklisted(email) {
    return this.blacklistedEmails.includes(email);
  }
}
const mango = new Admin({
  email: "mango@mail.com",
  accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.accessLevel); // "superuser"

mango.blacklist("poly@mail.com");
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted("mango@mail.com")); // false
console.log(mango.isBlacklisted("poly@mail.com")); // true*/

// 1) Отримай з масиву за допомогою reduce мінімальне число (-9)
// 2) Отримай з масиву за допомогою reduce максимальне число (18)

/*const numbers = [-9, 18, 6, 5];

const min = numbers.reduce((acc, element) => (element < acc ? element : acc));
console.log(min);

const max = numbers.reduce((acc, element) => (element > acc ? element : acc));
console.log(max);*/

//3 Знаходимо суму елементів: (36)
/*const nums = [1, 2, 3, 4, 5, 6, 7, 8];

const total = nums.reduce((acc, element) => acc + element, 0);
console.log(total);*/

//4 Створюємо новий об'єкт з ID та ім'ям користувача: // { '1': 'John', '2': 'Anna', '3': 'Kate' }
/*const users = [
  { id: "1", name: "John" },
  { id: "2", name: "Anna" },
  { id: "3", name: "Kate" },
];

const userObj = users.reduce((acc, element) => {
  acc[element.id] = element.name;
  return acc;
}, {});
console.log(userObj);*/
