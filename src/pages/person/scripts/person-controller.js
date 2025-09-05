import { PersonRepositoryApi } from "./person-respository-api.js";
import { Person } from "./person-model.js";

class PersonController {
    constructor() {
        this.repository = new PersonRepositoryApi();
    }
    bindForm(){
        let formEl = document.querySelector('form')
        formEl.onsubmit = (event) => {
            event.preventDefault();
            let firstName = event.target.firstName.value;
            let lastName = event.target.lastName.value;
            let birthDate = event.target.birthDate.value;
            this.createPerson(firstName, lastName, birthDate);
            event.target.reset();
        }
    }
    createPerson(firstName, lastName, birthDate) {
        let person = new Person(firstName, lastName, birthDate)
        this.repository.create(person);       
    }
    async bindTable(){
        let table = document.querySelector('table');
        if(table){
            let tbody = table.querySelector('tbody');
            let list = await this.getAll();            
            console.log(list);
            if(list){
                tbody.innerHTML = ''; 
                list.forEach(function(person) {
                    let row = document.createElement('tr');
                    row.innerHTML = '<td>' + person.id + '</td>' +
                                    '<td>' + person.firstName + '</td>' +
                                    '<td>' + person.lastName + '</td>' +
                                    '<td>' + person.birthDate + '</td>';
                    tbody.appendChild(row);
                });
            }
        }
    }
    async getAll() {
        return await this.repository.getAll();
    }
}

export { PersonController }