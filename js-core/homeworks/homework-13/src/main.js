
/*
 * TASK - 2
 *
 * Перепишите Homework 12 - TASK 1 используя class
 *
 * */

  class Human {
    constructor(name, age){
      this.name = name;
      this.age = age;
    }
  }
  class Worker extends Human{
    constructor(name, age, job, salary){
      super(name, age)
      this.job = job;
      this.salary = salary;
    }
    work(){
      console.log(' i am working')
    }
  }
  class Student extends Human{
    constructor(name, age, grand, studyPlace){
      super(name, age)
      this.grand = grand;
      this.studyPlace = studyPlace;
    }
    watchShow(){
      console.log('I love watch TV show')
    }
  }

  let student1 = new Student('alex', 21, 300, 'universitet')
  let worker1 = new Worker('John', 43,'factory', 500)
  
  worker1.work()
  student1.watchShow();
  console.log(student1)
  console.log(worker1)
  

/*
 * Вы должны создать имитацию медленной базы данных.
 * TASK - 1 Сделайте Класс Database с методами
 *
 *  query
 *
 *  При запуске метода query запустите внутренний таймаут, который будет длиться 5 секунд.
 *  При поступлении еще 1 запроса(если вызвать метод еще раз),
 *  таймаут должен стартануть сначала
 *  и ответ должен прийти снова через 5 секунд
 *
 * */

class DataBase {
  constructor(){
    this.counter = 0;
  };
  query(){
  clearInterval(this.counter);
    this.counter ++;
    let sec = 5;
    let interval = setInterval(()=>{
    console.log(sec);
    sec--;
      if (sec < 1) {
        console.log('The web server is down');
        clearInterval(interval);
      }
    },1000);
  }
}
const dataBase = new DataBase();
dataBase.query();
// // 5
// // 4
// // 3
// // 2
// // 1
// // console.log('The web server is down') https://www.youtube.com/watch?v=W8_Kfjo3VjU

// dataBase.query();
// // 5
// // 4
// dataBase.query();
// // 5
// // 4
// // 3
// // 2
// dataBase.query();
// 5
// 4
// 3
// 2
// 1
// console.log('The web server is down')
