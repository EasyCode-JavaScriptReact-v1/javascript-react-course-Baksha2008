const tableColumnHead = ['Name', 'Last Name', 'Email']
const users = [
   {
       name: 'Ivan',
       lastName:'Ivanov', 
       email: 'ivanov@gmail.com'
   },
   {
    name: 'Ivan1',
    lastName:'Ivanov', 
    email: 'ivanov@gmail.com'
   },
   {
    name: 'Ivan2',
    lastName:'Ivanov', 
    email: 'ivanov@gmail.com'
   },
   {
    name: 'Ivan3',
    lastName:'Ivanov', 
    email: 'ivanov@gmail.com'
   }, 
   {
    name: 'Ivan4',
    lastName:'Ivanov', 
    email: 'ivanov@gmail.com'
   },
   {
    name: 'Ivan5',
    lastName:'Ivanov', 
    email: 'ivanov@gmail.com'
   },
   {
    name: 'Ivan6',
    lastName:'Ivanov', 
    email: 'ivanov@gmail.com'
   },
   {
    name: 'Ivan7',
    lastName:'Ivanov', 
    email: 'ivanov@gmail.com'
   },
   {
    name: 'Ivan8',
    lastName:'Ivanov', 
    email: 'ivanov@gmail.com'
   } 
];
let app = {
    tableColumnHead,
    users,
    newEl(tagName){
        return document.createElement(tagName)
    },
    renderContactList(){
        let main = this.newEl('main')
        main.classList.add('main')
        let div = this.newEl('div')
        div.setAttribute('class', 'container')
        let form = this.newEl('form')
        form.setAttribute('class', 'form-inline search-form')
        let div2 = this.newEl('div')
        div2.setAttribute('class', 'form-group')
        let label = this.newEl('label')
        label.setAttribute('class', 'sr-only')
        label.setAttribute('for', 'search')
        label.textContent = 'Search'
        let input = this.newEl('input')
        input.setAttribute('type', 'text')
        input.setAttribute('class', 'form-control')
        input.setAttribute('id', 'search')
        input.setAttribute('placeholder', 'Search')
        let table = this.newEl('table')
        table.setAttribute('class', 'table table-hover contacts')
        let thead = this.newEl('thead')
        let tbody = this.newEl('tbody')
        let tr = this.newEl('tr')
        main.appendChild(div)
        div.appendChild(form)
        form.appendChild(div2)
        form.appendChild(table)
        div2.appendChild(label)
        div2.appendChild(input)
        table.appendChild(thead)
        table.appendChild(tbody)
        thead.appendChild(tr)
        tableColumnHead.forEach(elem=>{
            let th = this.newEl('th')
            th.textContent = elem
            tr.appendChild(th)
        })
        users.forEach(user=>{
            let tr = this.newEl('tr')
            tbody.appendChild(tr)
            let objKeysInArr = Object.keys(user)
            objKeysInArr.forEach(elem=>{
                let td = this.newEl('td')
                td.textContent = user[elem]
                tr.appendChild(td)
            })
        })
        document.body.insertBefore(main, body.children[1])
    }
}
app.renderContactList()