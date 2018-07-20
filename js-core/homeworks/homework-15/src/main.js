/*
TASK 0
Проверьте что строка содержит все символы от "a" до "z"
  solution("wyyga") // false
  solution("qwertyuioplkjhgfdsazxcvbnm") // true
  solution("ejuxggfsts") // false
  solution("qpwoeirutyalskdjfhgmznxbcv") // true
  solution("qqqqqqqqpwoeirutyallskkdjfhgmmznxbcv") // true
  solution("0123456789abcdefghijklmnop") // false
*/

const solution = str => {
    let tempArr = []
    let testABC = /[a-z]/
    let arrToStr = str.split('')
    arrToStr.forEach(elem => {
        let arrElem = testABC.test(elem)
        if(arrElem === true){
            tempArr.push(arrElem)
            return tempArr
        }
    });
    //так как мы знаем что в англ. алфавите 26 букв то
    if((arrToStr.length === tempArr.length) && (arrToStr.length >= 26)){
        console.log(true)
        // return true
    }
    else{
        console.log(false)
        // return false
    }
}
solution("wyyga") // false
solution("qwertyuioplkjhgfdsazxcvbnm") // true
solution("ejuxggfsts") // false
solution("qpwoeirutyalskdjfhgmznxbcv") // true
solution("qqqqqqqqpwoeirutyallskkdjfhgmmznxbcv") // true
solution("0123456789abcdefghijklmnop") // false
/*
 2. Напишите функция которая преобразовывает / открывает
 скобки всех вложенных внутри массивов
 Необходимо реализовать рекурсивный фызов функции.
 Функция должна открывать любое количество
 внутренних массивов и объектов
 example:
 [[1,2],[3,[4]],5, 10] => [1, 2, 3, 4, 5, 10]
 [25, 10, [10, [15]]] => [25, 10, 10, 15]
 [1, [2, [ {a: "b", c: 'd' }, { c: [1, 2, 5] } ] ] ] => [1, 2, {a: "b"}]
 */

//#1 arr == [...] flattenedArray = [1] + flatten = [2, [{a: "b"}, { c: 'd' }]]
//#2 arr == [2, [ {a: "b"}, { c: 'd' } ] ] flattenedArray = [2] + flatten == [{a: "b"}, { c: 'd' }]
//#3 arr == [ {a: "b"}, { c: 'd' } ] flattenedArray = [{a: "b"}, { c: 'd' }]
//#
const flatten = arr => {
    if(Array.isArray(arr)){
      return arr.reduce(function(newArr, elem){
        return newArr.concat(flatten(elem))
      }, [])
    }
    return arr
  };

  

console.log(flatten([[1,2],[3,[4]],5, 10]));
console.log(flatten([25, 10, [10, [15]]]));
console.log(flatten([1, [2, [ {a: "b", c: 'd' }, { c: [1, 2, 5] } ] ] ]));

/*
Виртуализировать таблицу, сделать рендер всей
таблицы через JavaScript.
Второй макет.
https://github.com/aleksandra-maslennikova/telephone-book/blob/master/index.html
Выглядеть должно так же: https://aleksandra-maslennikova.github.io/telephone-book/index.html
*/