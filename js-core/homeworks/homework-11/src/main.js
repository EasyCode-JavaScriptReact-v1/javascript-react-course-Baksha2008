/*
 *
 * Сделайте 4 объекта - не усложняйте, просто наследование
 * через __proto__
 - Пользователь
 - Верифицированный пользователь(админ)
 - Гость
 - База данных
 - База хранит информацию о пользователях
 - Пользователи знают мыло админа
 - админ знает пароль от базы данных
 - Гости могут зарегистрироваться в базе данных
 *
 * */
let user = {
  name: 'userName',
}
let admin = {
  adminPass:'adminPass',
  eMail: 'adminEmail'
}
let database = {
  newUser:{},
  password: 'databasePassword'
}
let guest = {

}

database.registerGuest = function() {
  let newUserName = prompt('введите имя');
  let newUserPass = prompt('придумайте пароль')
  database.newUser.name = newUserName;
  database.newUser.pass = newUserPass
  console.log(database.newUser)
}

guest.__proto__.registerGuest = database.registerGuest
database.__proto__ = user
user.__proto__.eMail = admin.eMail
admin.__proto__.password = database.password;
console.log(`admin password for databae '${admin.password}'`)
console.log(`admin mail - '${user.eMail}'`)
console.log(guest.registerGuest())
console.log(database)




