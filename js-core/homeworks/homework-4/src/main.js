/*
* Напишите функцию которая будет принимать 1 аргумент и в зависимости от типа аргумента
*
* Если тип аргумента число или объект -> возвращать true
* Если тип аргумента функция -> возвращать false
* Если тип аргумента Строка и длина этой строки не равна 10 -> возвращать "длина вашей строки: <длина строки>
*                            Если длина 10 -> 'you win'
* */
  

function returnType(arg){
  if(typeof arg == 'number' || typeof arg == 'object' ){
    return true
  } else if (typeof arg == 'function'){
    return false
  } else if(typeof arg == 'string'){
       if(arg.length == 10){
          return 'you win'
      }
      return `Длинна вашей строки: ${arg.length}`
  }
}
console.log(returnType(3));
console.log(returnType({}));
console.log(returnType(function(){}));  
console.log(returnType('helloworld'));
console.log(returnType('hello world'));





// Задача в классе


let webStore = {
        category: {
            notebook: ['Lenova', 'Asus', 'Xiaomi'],
            mobile:['Nokia', 'Sony', 'Apple']
        }
    };

    let category = webStore.category;

    for(let key in category){
        
        console.log('Категория:', key);

       for(let i = 0; i < category[key].length; i++){
          
        console.log(category[key][i]);

       }
    }






/*
 1. Напишите функцию которая принимает 2 числа
 и возвращает массив содержащий числа между первым числом и вторым числом;
 */

function numbersBetween(a, b) {
  let newArr = [];
  for(let i = a; i <= b; i++){
     newArr.push(i);
  }
  return newArr
}

console.log(numbersBetween(3, 5));
// 3, 4, 5

console.log(numbersBetween(10, 12));
// 10, 11, 12


/*
 2. Перепишите задачу FizzBuzz, но с использованием цикла.
 Расчет чисел должен идти до 100
 */

// 1. FizzBuzz 3, 5, 3 && % 5

function fizzBuzz(num) {
  let someRes;
if(num % 3 == 0 && num % 5 == 0){
    someRes = 'FizzBuzz';
} else if (num % 3 == 0){
    someRes = 'Fizz';
} else if(num % 5 == 0){
  someRes = 'Buzz';
} else{
  someRes = num;
}
return someRes
}
function fizzBuzz100() {
  for(let i = 1; i <= 100; i++) {
      console.log(fizzBuzz(i));
  }
}
fizzBuzz100();

/*
 3. Напишите функцию которая принимает 1 аргумент - массив
 И возвращает новый массив содержащий типы значений переменных
 */

 let arr = [1, null, undefined, 'str', {}, [], function() {}];

 function newArr(arr){
   let newArray = [];
   for(let i = 0; i < arr.length; i++){
     newArray.push( typeof arr[i]);
   }
   return newArray
 }

 console.log(newArr(arr));

/*
 1. @@SUPER@@. Вам дан массив array, содержащий внутри объекты.
 Напишите функцию которая внутри цикла проходится по каждому элементу массива
 И проверяет какой тип данных содержит свойство age, если тип данных NaN,
 тогда добавляет данному объекту свойство unknownAge: true
 2. На основании нового массива, создайте новую функцию, которая вернет новый массив
  содержащий все объекты содержащие свойство unknownAge: true
 */

// let array = Array.from({length: 35},
//   (value, index) => (index % 2 ? {age: index + 2} : {age: NaN}),
// );

// // console.log(array);



// function solution(arg) {

  
//   // for(let key in arg) {
//   //   let arrayKey = arg[key];
//   //     if(Number.isNaN(arrayKey.age)){
//   //       arrayKey.unknownAge = true
//   //   }
//   //   // console.log(arr);
//   //   return arg
//   // }
// }
// function newArr(arg){
//   let newArray = [];
    
//   for(let i = 0; i < arg.length; i++) {
      
//       if(arg[i].unknownAge === true) {
//           newArray.push(arg[i]);
//       }
//   }
//   return newArray;
// }
// solution(array);


let array = Array.from({ length: 35 },
  (value, index) => (index % 2 ? { age: index + 2 } : { age: NaN }),
);


function solution(arr) {
  for (let key in arr) {
    let arrKey = arr[key];
      if (Number.isNaN(arrKey.age)) {
          arrKey.unknownAge = 'true';
      }
  }
  return unknownAge(arr);
}

function unknownAge(arr) {
  let newArr = [];
  for (let key in arr) {
    let arrKey = arr[key];
      if (arr[key].unknownAge) {
          newArr.push(arr[key]);
      }
  }
  return newArr;
}
console.log(solution(array));













