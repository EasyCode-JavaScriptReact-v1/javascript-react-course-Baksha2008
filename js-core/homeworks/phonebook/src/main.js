/*Создайте функцию конструктор.
У данной функции должны быть методы:

Преобразование телефонного номера из формата 0993378130 в (099) 33-78-130
Проверка, что телефонный номер содержит только числа
Добавление пользователей в справочник
Удаление пользователя по имени, фамилии
Поиск пользователей по имени - отображает всех пользователей с одинаковым именем
Изменение имени, фамилии, телефонного номера у выбраного пользователя ( здесь должно быть реализовано через this )
Сортировка пользователей по номеру телефона, фамилии, имени и тд, по любому из свойств пользователя
Фильтр по указанному свойству
*/


class PhoneApp{
	constructor(){
		this.database = []
	}
	numberValidate(number){
		if(!isNaN(number)){
			return true
		} else{
			return false
			console.log('not a number')
		}
	}
	formatNumber(number) {
		if(this.numberValidate(number)){
			let numberToArr = number.split('');
			numberToArr.splice(0, 0, '(');
			numberToArr.splice(4, 0, ')', ' ');
			numberToArr.splice(8, 0, '-');
			numberToArr.splice(11, 0, '-');
			return numberToArr.join('');
		} else {
			return 'Телефонный номер должен содержать только цифры';
		};
	};
	addUser(name, number){
		let newUser = {
			name
		}
		newUser.id = this.database.length + 1
		if(this.numberValidate(number)){
			newUser.number = number
			this.database.push(newUser)
		} else{
			console.log('Something wrong')
		}
	}	
	 removeUserByName(name){
	 	let userName = this.database.findIndex(elem => {
			 return elem.name === name
		 })
		 if(!userName -1 ){
			 this.database.splice(userName, 1)
		 }
	 }
	 findUserByName(name) {
		let newArr = [];
		this.database.forEach((elem) => {
			if(elem.name == name) {
				newArr.push(elem)
			};
		});
		newArr.forEach((elem) => {
			console.log(elem);
		});
	};
	 editUser(user, editUser) {
		let arr = this.database;
		arr.forEach((elem) =>{
			for(let key in elem) {
				if(elem[key] == user) {
					elem[key] = editUser;
				}
			}
		})
		}
	 sortUser(prop) {
		function findUser(a, b) {
			return a[prop] > b[prop];
		};
		let tmp = this.database.sort(findUser);
		console.log(tmp);
	}
}

const myApp = new PhoneApp();
myApp.numberValidate('0983214534');
console.log(myApp.formatNumber('0633888930'))
myApp.addUser('Alex', '0633888391');
myApp.addUser('Alsex', '0333888890');
myApp.addUser('Tim', '0668974563')
myApp.addUser('Kate', '0504569874')
myApp.removeUserByName('Alsex')
myApp.findUserByName('Alex')
myApp.sortUser('name')
myApp.sortUser('id')
