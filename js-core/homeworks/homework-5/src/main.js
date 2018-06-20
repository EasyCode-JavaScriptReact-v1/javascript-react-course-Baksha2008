/*
 1. Переместите 0 в конец массива, остальные числа должны остаться
 неизменными
 // concat
 example:
 [1,false,2,0,3,null,0,4,0,25] => [1, false, 2, 3, null, 4, 25, 0, 0, 0]
 [ 'a', 0, 0, 'b', null, 'c', 'd', 0, 1, false, 0, 1, 0, 3, [], 0, 1, 9, 0, 0, {}, 0, 0, 9 ] => ["a","b",null,"c","d",1,false,1,3,[],1,9,{},9,0,0,0,0,0,0,0,0,0,0]
 [ 0, 1, null, 2, false, 1, 0 ] => [1,null,2,false,1,0,0]
 */
let arr1 = [1, false, 2, 0, 3, null, 0, 4, 0, 25];
let arr2 = [
  'a',
  0,
  0,
  'b',
  null,
  'c',
  'd',
  0,
  1,
  false,
  0,
  1,
  0,
  3,
  [],
  0,
  1,
  9,
  0,
  0,
  {},
  0,
  0,
  9
];
function moveZeroToEnd(arr) {
  let newArr = [];
  let arrWithnumber = [];
  for(let i=0;i<arr.length;i++){
    let index = arr[i];
    if(index===0){
      newArr.push(index);
      continue
    }  
    arrWithnumber.push(index);
  }
  return arrWithnumber.concat(newArr);
}
console.log(moveZeroToEnd(arr1));
console.log(moveZeroToEnd(arr2));
/*
 2. Верните сумму двух найменьших чисел в массиве
 [10,20,30,1,31,11,10] => 11
 [-1,0,25] => -1
 [-4,-10,25,10] => -14
 [0,200,10,25,15] => 10
 */

function minimalNumber(arr) {
  
  arr = arr.sort(function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
  }
  )
  let minNum1 = arr[0];
  let minNum2 = arr[1];
  return minNum1 + minNum2;
}
console.log(minimalNumber([10,20,30,1,31,11,10]));
console.log(minimalNumber([-1,0,25]));
console.log(minimalNumber([-4,-10,25,10]));
console.log(minimalNumber([0,200,10,25,15]));

/*
 3. Напишите функцию которая меняет местами имя и фамилию
 nameShuffler('john McClane'); => "McClane john"
 nameShuffler('Arnold Schwarzenegger'); => "Schwarzenegger Arnold"
 nameShuffler('James Bond'); => "Bond James"
 */

function nameShuffler(str) {
  let arr = str.split(' ');
  arr.reverse();
  let arrToStr = arr.join(' ');
  return arrToStr;
}
console.log(nameShuffler('James Bond'));
console.log(nameShuffler('Arnold Schwarzenegger'));
console.log(nameShuffler('john McClane'));


/*
 // !
 4. Напишите функцию которая принимает массив с именами и возвращает массив
 в котором каждая буква становится заглавной
 capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
 capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']
 */

function capMe(arr) {
  for(let i=0;i< arr.length ;i++){
    let elem = arr[i]
    elem = elem.toLowerCase()
    elem = elem.charAt(0).toUpperCase() + elem.slice(1);
    console.log(elem);
  }
};
capMe(['KARLY', 'DANIEL', 'KELSEY'])
capMe(['jo', 'nelson', 'jurie'])

// @SUPER
/*
 1. Найдите число отсутствующее в заданной последовательности
 example:
  [1,3,5,9] => 7 (9-1) / 4 == 2
  [0,8,16,32] => 24
  [4, 6, 8, 10] => 2 // число сначала
  [0,16,24,32] => 8
 */

function random(arr) {
  let lastElem = arr[arr.length - 1];
  let firstElem = arr[0]; 
  let step = (lastElem - firstElem)/arr.length;
  for(let i = 0;i<arr.length;i++){
    let elem = arr[i];
    let nextElem = arr[i+1];
    if(nextElem){
      return lastElem - arr[arr.length -2];
    }
    if(elem + step != nextElem){
      return elem + step
    }
  }
  return
}

console.log(random([1, 3, 5, 9]));
console.log(random([0, 8, 16, 32]));
console.log(random(([0, 16, 24, 32])));
console.log(random([4, 6, 8, 10]));

/*
 Задача с собеседований*
 2. Напишите функция которая преобразовывает/открывает скобки всех
 вложенных внутри массивов
 Необходимо реализовать рекурсивный фызов функции.
 Функция должна открывать любое количество внутренних массивов
 example:
  [[1,2],[3,[4]],5, 10] => [1,2,3,4,5,10]
  [25,10,[10,[15]]] => [25,10,10,15]
 */

function openBraces(arr) {
  if(Array.isArray(arr)){
    return arr.reduce(function(result, current){
      return result.concat(openBraces(current))
    }, [])
  }
  return arr
};
console.log(openBraces([25,10,[10,[15]]]));
console.log(openBraces([[1,2],[3,[4]],5, 10]));
