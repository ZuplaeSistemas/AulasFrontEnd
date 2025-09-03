 document.querySelector('form').onsubmit = function(event) {
    event.preventDefault(); //parar o evento de submit (impedir de recarregar)
    let id = crypto.randomUUID();
    let firstName = event.target.firstName.value;
    let lastName = event.target.lastName.value;
    let birthDate = event.target.birthDate.value;

    let person = { id, firstName, lastName, birthDate };
    let personList = []
    let listStorage = localStorage.getItem("personList")
    if (listStorage) {
        personList = JSON.parse(listStorage);
    }
    personList.push(person);
    localStorage.setItem("personList", JSON.stringify(personList));
    event.target.reset(); // Limpar o formulário
};