/*
TASK 0. Найдите числа которые повторяются нечетное количество раз
в массиве
  solution([12, 23, 34, 12, 12, 23, 12, 45]) -> [34 45]
  solution([4, 4, 100, 5000, 4, 4, 4, 4, 4, 100, 100,]) -> [4 100 5000]
  solution([3, 3, 4, 6, 4, 5, 9, 9, 21, 9]) -> [6 5 9 21]
  solution([4, 8, 15, 16, 23, 42, 4, 15, 42, 42]) -> [8 16 23 42]
  solution([2, 2, 44, 44]) => []
*/
let solution1 = arr => {
    let array = [];
    let obj = {}
    arr.forEach(elem => {
        if (obj[elem]) {
          obj[elem]++;
        }
        else{
        obj[elem] = 1}
      });
    let keys = Object.keys(obj)
    keys.map(elem => {
        if(obj[elem] % 2 != 0){
            array.push(elem)
        }
    })
    return array
   }
console.log(solution1([12, 23, 34, 12, 12, 23, 12, 45]));
console.log(solution1([4, 4, 100, 5000, 4, 4, 4, 4, 4, 100, 100,]))

const someWebpackModule = `module.exports = {
    context: %%HOMEDIR%,
    entry: {
        app: "%%HOMEDIR%%/%%APP_DIR%%/%%APPNAME%%.js"
    },
    output: {
        path: %%HOMEDIR%% + '/app',
        filename: "dist/[%%APPNAME%%].js",
        library: '[%%APPNAME%%]'
    }
   }`;
let regStr = (str,startValue, finalValue  ) => {
    var regexp = new RegExp(startValue, "g", "m", "i");
    let newStr = str.replace(regexp, finalValue);
    console.log(newStr);
}
regStr(someWebpackModule, '%%HOMEDIR%%', './JavaScript-Basic');
regStr(someWebpackModule, '%%APP_DIR%%', 'fixtures/src');
regStr(someWebpackModule, '%%APPNAME%%', 'app.js');

/* TASK - 1
Распарсите строку и замените
 %%HOMEDIR%% -> './JavaScript-Basic'
 %%APP_DIR%% -> 'fixtures/src'
 %%APPNAME%% -> 'app.js'
 Вам нужно написать функцию которая в зависимости от разных параметров
 будет изменять заданные значения на необходимые вам
 Сделайте несколько вызовов данной функции
 *
 * */



/*
 TASK - 2
 Сделайте разметку как скриншоте используя HTML
 вам необходимо использовать тэги(!)
*/




/*
TASK 3
 JavaScript =>
  Создать объект с методами, которые будут динамически генерировать DOM
  Это будет тест, который мы будем разрабатывать в следующих заданиях.
  Сейчас вам нужно только динамически создать html,
  методы должны храниться в одном объекте.
  Изначально на странице должен быть только <body>,
  вызывая методы объекта нужно создать dom-элементы
*/
let test = {
    render(){
        let main = document.createElement('main')
        let section = document.createElement('section')
        let h1 = document.createElement('h1')
        let article = document.createElement('article')
        let input = document.createElement('input')
        main.setAttribute('id', 'main')
        main.appendChild(section)
        section.appendChild(h1)
        h1.innerHTML = 'Тест по программированию'
        section.appendChild(article)
        let arrWithQustion = [
            '1. Вопрос №1',
            '2. Вопрос №2',
            '3. Вопрос №3'
        ]
        let arrWithAnswers = [
            'Вариант ответа №1',
            'Вариант ответа №2',
            'Вариант ответа №3'
        ]

        arrWithQustion.forEach(elem=>{
            let ul = document.createElement('ul')
            ul.innerHTML = elem;
            article.appendChild(ul)
            arrWithAnswers.forEach(elem=>{
                let li = document.createElement('li')
                let input = document.createElement('input')
                input.setAttribute('type', 'checkbox')
                ul.appendChild(li)
                li.appendChild(input)
                input.innerHTML = elem;
            })
        })
        article.appendChild(input)
        input.setAttribute('type', 'submit')
        input.setAttribute('value', 'Проверить результат')
        document.body.appendChild(main)
    }
}
test.render();