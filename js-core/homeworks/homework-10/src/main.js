/*
 *
 * Задача 0
 *
 * Что вернет выражение z(x) ?
 * Напишите ответ своими словами как вы понимаете
 * В консоле не смотрите, сначала напишите, после проверьте себя
 *
 * */

let y = 5; 
//созадет переменную y, в которую записывает значение 5
let x = () => {
  // console.log('We here')
  return y;
}
// создает функцию x, которая возврщает 5

let z = t => {
  //создает функцию z, с аргументом t, которая перезаписывает y, но снова на 5.
   let y = 5;
  //  return y 
  // если будетет return, то возьмет отсюда, так как віше не пойдет, найдет y здесь
  // console.log('We here')
  t();
  // вызывает аргумент как функцию, которую потом туда передадим как аргумент
};
console.log(y);
//должно вывести 5, так как обратится к внейшней переменной 11 строка
z(x); // что вернет
//вызывает фунцию z, передает аргументом фунцию x, перезаписывает y, но снова на 5
//и вызывает фунцию x, которая возвращает(В - внимательность!!!!) y. Y возьмет и строки 18
// поигрался, возврщает undefined, потому что функция ничего не возвращает, а только перезаписывает.
// а если не обернуть в console.log вызов на 30 строке, то вообщей ничего не вернет, кроме console.log на 27 строке)))

// /*
//  *
//  * TASK 1
//  * Создайте функцию которая будет превращать
//  * передаваемую строку в html тэг
//  *
//  *
//  * */

let $ = function(str) {
  if(typeof str == 'string'){
    let result = `<${str}></${str}>`
    return result
  }
};

let createBODY = $('body');
let createDIV = $('div');
console.log(createBODY); // <body></body>
console.log(createDIV); // <div></div>

// /*
//  *
//  * TASK 2
//  *
//  * Создайте объект к которому можно будет применить любое число вызовов
//   // obj.method().method().method()
//   ---------------
//  *  Передаваемое значение должно возвращаться в виде html тэгов (TASK 1)
//  *  Передаваемые аргументы должны быть только в виде строки
//  * */


var ezjQuery = {
  tag: '',
 add(str, text){
   let elem = text || ''
  if(typeof str == 'string'){
    this.tag += `<${str}>${elem}</${str}>`;
    return this.tag
  }
 }
};

console.log(ezjQuery.add('body')) // <body></body>
console.log(ezjQuery.add('div')) // <body></body><div></div>
console.log(ezjQuery.add('h1')); // <body></body><div></div><h1></h1>

// /*
//  *
//  * TASK 3
//  * Доработйте метод add чтобы на каждом вызове следующий
//  * тэг помещался внутри предыдущего !
//  ---
//  * И добавьте объекту ezjQuery метод render, который будет возвращать
//  * сгенерированную строку
//  -----
//  * Методу add - второй параметр, который будет размещать
//  * информацию внутри тэга
//  *
//  */

// example
var helloList = ezjQuery
console.log(helloList.add('body')) // <body></body>
console.log(helloList.add('div')) // <body><div></div></body>
console.log(helloList.add('ul')) // <body><div><ul></ul></div></body>
console.log(helloList.add('li', 'Hello')) //<body><div><ul><li>Hello</li></ul></div></body>
console.log(helloList.render());
console.log(helloList); // <body><div><ul><li>Hello</li></ul></div></body>
//  Обратите внимание, что после вызова render создание строки началось сначала

var bodyDiv = ezjQuery
  .add('body') //<body></body>
  .add('div') //<body><div></div></body>
  .render();
console.log(bodyDiv); //<body><div></div></body>

// // Для выполнивших все задания
// // сделайте document.write(helloList) увидите результат :)

// // @SUPER
// /*
//  * Переименуйте объект ezjQuery в $.
//  * Создание перевого метода должено быть без метода
//  *
//  * $('body').add('li', 'hi').render() // <body><li>hi</li></body>
//  *
//  * */
