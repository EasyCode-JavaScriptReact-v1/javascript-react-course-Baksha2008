'use strict';

/*
 *
 * TASK 1
 *
 * Напишите функцию которая будет вызываться трижды и складывать
 * все передаваемые ей числа
 *
 * */

function add(x) {
  return function(a){
    return function(b){
      return x + a + b
    }
  }
}

console.log(add(1)(2)(3)); // 6
console.log(add(10)(5)(15)); // 30

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

function patternModule(num) {
  let counter = 0;
  let obj = {
    method: function(){
      ++counter
      return counter
    },
    method2: function(){
      counter = 0
      return counter 
    }
  }
  return obj;

}

// patternModule

let test = patternModule(); // 0
console.log(test.method()); //1
console.log(test.method()); //2
console.log(test.method()); //3
console.log(test.method()); //4
console.log(test.method()); //5
console.log(test.method()); //6
console.log(test.method2()); //0
console.log(test.method()); //1
console.log(test.method()); //2
console.log(test.method()); //3
console.log(test.method2()); //0


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
  let counter = num;
  obj[name] = function(...args){
  if(counter>0){
     return [counter--, fn(args)]
    }
    return `ERROR ! add more methods`
  }
  obj.addCounter = function(newNum, name){
      counter = newNum;
      return [counter, name];
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

console.log(jun.addCounter(10, 'addCounter'));
console.log(jun.logger(1, 2, 3, 4)); // 2, 10
console.log(jun.logger(1, 2, 3, 4)); // 2, 10
console.log(jun.logger(1, 2, 3, 4)); // 2, 10
console.log(jun.logger(1, 2, 3, 4)); // 2, 10
console.log(jun.logger(5, 5, 5, 5)); // 1, 20
console.log(jun.logger(5, 5, 5, 5)); // 1, 20
console.log(jun.logger(5, 5, 5, 5)); // 1, 20
console.log(jun.logger(5, 5, 5, 5)); // 1, 20
console.log(jun.logger(5, 5, 5, 5)); // 1, 20
console.log(jun.logger(5, 5, 5, 5)); // 1, 20
console.log(jun.logger(5, 5, 5, 5)); // 1, 20
console.log(jun.logger(5, 5, 5, 5)); // 1, 20
console.log(jun.addCounter(1, 'addCounter'));
console.log(jun.logger(5, 5, 5, 5)); // 1, 20
console.log(jun.logger(5, 5, 5, 5)); // 1, 20
console.log(jun.logger(5, 5, 5, 5)); // 1, 20


// @SUPER,

/*
 * Добавьте функции methodCounter, возможность увеличивать счетчик
 * на заданное число
 *
 * */