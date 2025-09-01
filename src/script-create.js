 document.querySelector('form').onsubmit = function(event) {
    event.preventDefault(); //parar o evento de submit (impedir de recarregar)
    id = crypto.randomUUID();
    firstName = event.target.firstName.value;
    lastName = event.target.lastName.value;
    birthDate = event.target.birthDate.value;

    person = { id, firstName, lastName, birthDate };
    personList = []
    if (localStorage.getItem("personList")) {
        personList = JSON.parse(localStorage.getItem("personList"));
    }
    personList.push(person);
    localStorage.setItem("personList", JSON.stringify(personList));
    event.target.reset(); // Limpar o formulário
};