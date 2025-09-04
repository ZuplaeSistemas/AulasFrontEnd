class PersonRepository {
    constructor(){
        this.personList = JSON.parse(localStorage.getItem("personList")) || [];
    }
    create(person){        
        this.personList.push(person);
        localStorage.setItem("personList", JSON.stringify(this.personList));
    }
    getAll(){
        return this.personList;
    }
}

export { PersonRepository }