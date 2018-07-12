//'use strict';

/*
 * TASK ! ! !
 * Сделайте пожалуйста с теми навыками которые у вас есть ТЕЛЕФОННЫЙ СПРАВОЧНИК
 *
 * Task 0
 *
 * Создайте функцию конструктор Http, которая будет иметь 2 метода
 *
 * createServer() - принимает один аргумент функцию с двумя параметрами ctx и next
 * ctx: Object {
 *   req: Object
 *     PORT: number
 *     url: string
 *   res: Object
 *     status: number,
 *     message: string,
 *     header: Object {
 *       content-type:application/json
 *       }
 *   }
 * next: Function
 *
 *
 * при вызове listen(PORT, host) - в консоле должна отобразится надпись
 * "Server running on https://host:port"
 * и вызваться переданная в createServer функция
 *
 *
 * методы нужно вызывать через chain
 * после вызова метода listen() - должна вызываться переданная в createServer
 * первая функция и возвращать объект и функцию
 *
 * */

function Http() {
  this.ctx = {
      req :{
        PORT: 8080,
        url: 'localhost'
      },
      res: {
        status: 0,
        message: 'Server status',
        header: {
          type: 'application/json'
        }
      }
    };
  this.next = function () {
    console.log(`${this.ctx.res.message} is ${this.ctx.res.status}`);
  }
}
Http.prototype.createServer = function(fn) {
  this.fn = function(){
    return fn(this.ctx, this.next());
  }
  return this
}

Http.prototype.listen = function(PORT, host) {
  console.log(`Server running on http://${host}:${PORT}`);
  this.fn();
  return this
}

const server = new Http().createServer(function(ctx, next) {
  console.log(ctx);
}).listen(3000, 'localhost');


// TASK 1
// Создать класс Human, у которого будут свойства обычного человека:
// имя, возраст, пол, рост, вес.
// Используя прототипное наследование создать дочерние классы Worker
// (дописать в них поля места работы, зарплата, метод "работать")
// и Student (дописать поля места учебы, стипендией, метод "смотреть сериалы")
//
// Создать несколько экземпляров классов Worker и Student, вывести их в консоль.
// Убедиться что они имеют поля родительского класса Human

  function Human(name, age){
    this.name = name;
    this.age = age;
  }

  function Worker(name, age, job, salary){
    Human.apply(this, arguments);
    this.job = job;
    this.salary = salary;
  }

  Worker.prototype = Object.create(Human.prototype)

  Worker.prototype.work = function(){
    console.log('i work!')
  }

  function Student(name, age, grand, studyPlase){
    Human.apply(this, arguments)
    this.grand = grand;
    this.studyPlase = studyPlase
  }

  Student.prototype = Object.create(Human.prototype)

  Student.prototype.watchShow = function (){
    console.log('i love watch TV show')
  }
  
  

  let student1 = new Student('alex', 21, 300, 'universitet')
  let worker1 = new Worker('John', 43,'factory', 500)
  
  worker1.work()
  student1.watchShow();
  console.log(student1)
  console.log(worker1)

// @SUPER

/*
 *
 * TASK 0
 * Создайте функцию обертку над другой функцией
 * Каждый раз при вызове внутренней функции в консоле будут отображаться аргументы функции
 * которую мы обернули
 *
*/

