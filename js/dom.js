//Написати скрипт: при натисканні на кнопку додавати в div з ідентифікатором
//«container»
//фрагмент розмітки:
{
  /* <div class="item"> 
<h3>Заголовок</h3>
<p>текст текст текст</p>
</div> */
}
{
  /* <button class="add-btn">add</button>
  <div class="container"></div> */
}

/*const btnEl = document.querySelector(".add-btn");
const divEl = document.querySelector(".container");
console.log(btnEl, divEl);

btnEl.addEventListener("click", onClick);
/*function onClick() {
  const div = document.createElement("div");
  const h3 = document.createElement("h3");
  const par = document.createElement("p");
  h3.textContent = "Заголовок";
  par.textContent = "текст текст текст";
  div.append(h3, par);
  divEl.append(div);
}*/

/*function onClick() {
  const markup = `<div class="item"> 
  <h3>Заголовок</h3>
  <p>текст текст текст</p>
  </div>`;
  divEl.insertAdjacentHTML("beforeend", markup);
}*/

//Виводимо кнопку з текстом "Змінити" і два інпути, при натисканні на кнопку інпути
//змінюються своїм введеним текстом
{
  /* <input type="text" id="js-input1" value="!!!!!!!!!!!!">
<input type="text" id="js-input2" value="????????????">
<button type="button" class="btn">Змінити</button> */
}

/*const firstInputEl = document.querySelector("#js-input1");
const secondInputEl = document.querySelector("#js-input2");
const btn = document.querySelector(".btn");
console.log(firstInputEl, secondInputEl, btn);

btn.addEventListener("click", onClick);
/*function onClick() {
  const firstValue = firstInputEl.value;
  //const secondValue = secondInputEl.value;
  firstInputEl.value = secondInputEl.value;
  secondInputEl.value = firstValue;
}*/

/*function onClick() {
  [firstInputEl.value, secondInputEl.value] = [
    secondInputEl.value,
    firstInputEl.value,
  ];
}*/

/* ---------------------------------*/
//Вивести 4 червоні квадрати, при кліку на будь-який, він ставати зеленим, при цьому якщо
//є вже зелений квадрат, то він ставати назад червоним і так можна кликати на будь-який
//квадрат, він ставати зеленим, а старий зелений квадрат назад червоним і тд.
//(Зробити завдання так, щоб можна було додати ще хоч 100 квадратів, при цьому скрипт не
//треба міняти).

{
  /* 
  
  .square {
  width: 150px;
  height: 150px;
  background: red;
  margin: 10px;
}

.square.green {
  background: green;
}
  <div class="square"></div> 
<div class="square"></div> 
<div class="square"></div> 
<div class="square"></div>  */
}
/*const squareEl = document.querySelectorAll(".square");
console.log(squareEl);
squareEl.forEach((el) => {
  el.addEventListener("click", onClick);
});*/

/*const wrapperEl = document.querySelector(".wrapper");
wrapperEl.addEventListener("click", onClick);
function onClick(evt) {
  /*if (evt.target.nodeName !== "DIV") {
    return;
  }*/
/*if (!evt.target.classList.contains("square")) {
    return;
  }
  evt.target.classList.toggle("green");
  console.log(evt.target, evt.currentTarget);
}*/

/*const inputEl = document.querySelector("#leftSwapInput");
const id = inputEl.dataset.index;
//const value = inputEl.getAttribute("value");
console.log(id);*/
