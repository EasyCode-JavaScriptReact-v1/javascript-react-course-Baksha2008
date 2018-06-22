// 'use strict';

// /*
//  *
//  * TASK 1
//  *
//  * Напишите функцию которая будет вызываться трижды и складывать
//  * все передаваемые ей числа
//  *
//  * */

// function add(x) {
//   return function(a){
//     return function(b){
//       return x + a + b
//     }
//   }
// }

// console.log(add(1)(2)(3)); // 6
// console.log(add(10)(5)(15)); // 30

// /*
//  *
//  * TASK 2
//  *
//  * Напишите функцию которая возвращает объект и одно из свойств объекта
//  * это функция
//  * После каждого нового вызова метода объекта(функции объекта) в консоле должно отображаться
//  * число на 1 больше чем предыдущее
//  * ---------------------------------------
//  * так же у объекта должен быть метод обнуления счетчика
//  * Узнать счетчик напрямую в объекте, нельзя
//  *
//  * */

// function patternModule(num) {
//   let counter = 0;
//   let obj = {
//     method: function(){
//       return ++counter
//     },
//     method2: function(){
//       return counter = 0
//     }
//   }
//   return obj;

// }

// // patternModule

// let test = patternModule(); // 0
// console.log(test.method()); //1
// console.log(test.method()); //2
// console.log(test.method()); //3
// console.log(test.method()); //4
// console.log(test.method()); //5
// console.log(test.method()); //6
// console.log(test.method2()); //0
// console.log(test.method()); //1
// console.log(test.method()); //2
// console.log(test.method()); //3
// console.log(test.method2()); //0


// /*
//  * TASK 1
//  *
//  * Напишите функцию которая принимает 4 аргумента:
//  *
//  * -  Объект
//  * -  Имя свойства с которым связывается метод
//  * -  Сколько раз можно вызвать метод *
//  * -  Объявление привязываемого метода ( функция )
//  *
//  *  При вызове метода отобразите сумму передаваемых
//  *  параметров.
//  *  Когда заканчивается счетчик, отображается ошибка
//  *
//  * */

let jun = {};

function methodCounter(obj, name, num, fn) {
  obj[name] = function(...args){
  if(num>0){
     return [num--, fn(args)]
    }
    return `ERROR ! add more methods`
  }
  };

methodCounter(jun, 'logger', 2, function (args) {
	let sumArgs = args.reduce(function(newValue,elem){
    return newValue + elem
  }, 0);
	return sumArgs;
});
console.log(jun.logger(1, 2, 3, 4)); // 2, 10
console.log(jun.logger(5, 5, 5, 5)); // 1, 20
console.log(jun.logger(5, 5)); // ERROR ! add more methods

// jun.addCounter(10, methodName);
// @SUPER,

/*
 * Добавьте функции methodCounter, возможность увеличивать счетчик
 * на заданное число
 *
 * */