let table = document.querySelector('table');
if(table){
    let tbody = table.querySelector('tbody');
    list = localStorage.getItem("personList")
    if(list){
        tbody.innerHTML = ''; 
        listPeople = JSON.parse(list);
        listPeople.forEach(function(person) {
            var row = document.createElement('tr');
            row.innerHTML = '<td>' + person.id + '</td>' +
                            '<td>' + person.firstName + '</td>' +
                            '<td>' + person.lastName + '</td>' +
                            '<td>' + person.birthDate + '</td>';
            tbody.appendChild(row);
        });
    }
}