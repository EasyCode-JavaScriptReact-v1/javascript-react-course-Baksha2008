'use strict';

/*
 *
 * TASK 1
 *
 * Создайте функцию которая будет запоминать переданные
 * ей аргументы, и прибавлять их в строку
 * и отображать в консоле всю строку
 *
 *
 * */

function solution1() {
  let str = '';
  return function(text){
    return str += text
  }

}

let stringBuffer = solution1();

console.log(stringBuffer('Замыкания')); // Замыкания
console.log(stringBuffer('Использовать нужно')); // Замыкания Использовать нужно
console.log(stringBuffer('Привет')); // Замыкания Использовать нужно Привет вызываем много раз

/*
 *
 * TASK 2
 * Напишите функцию которая принимает в качестве аргумента строку
 * из скобочек и посчитайте, * что все скобочки закрываются корректно
 *
 * */

function validBraces(str) {
  let stack = [];
  for(let i=0;i<str.length;i++){
    if(str[i] == "(" || str[i] == "{" || str[i] == "[")
      stack.push(str[i]);
    else if(str[i] == ")") {
        if(stack.pop() != "(") { 
          return false; 
        }
    }
    else if(str[i] == "}") {
        if(stack.pop() != "{") { 
          return false; 
        }
    }
    else if(str[i] == "]") {
        if(stack.pop() != "[") { 
          return false; 
        }
    } 
  }

  return !stack.length;
  }


console.log(validBraces('(){}[]')); // => returns true
console.log(validBraces('(}')); // => returns false
console.log(validBraces('[(])')); // => returns false
console.log(validBraces('([{}])')); // => returns true
console.log(validBraces('({[]})')); // => returns true

// @SUPER

/*
 *
 * Напишите функцию которая будет принимать одно число и выводить сумму
 * всех натуральных чисел
 * sum(5) // 5+4+3+2+1
 *
 * Вычисления должны кешироваться, если в функцию попадает закешированное
 * значение, в консоле должно отобразиться
 * Значение взято из кэша
 *
 * Нельзя использовать внешние значения/переменные/функции
 *
 * */

function sum(num) {
   if( num!= 1){
     return num + sum(num-1)
    }
    return 1
}
console.log(sum(5)); // 15 Значение кешировано
sum(5); // 15 Значение взято из кэш

sum(6); // 21 Кешировано
sum(6); // 21 Значение взято из кэша