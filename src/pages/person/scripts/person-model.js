class Person {
    constructor(firstName, lastName, birthDate){
        this.id = this._newId();
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
    }
    _newId(){
        return crypto.randomUUID();
    }
}

export { Person };