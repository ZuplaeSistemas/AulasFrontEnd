import { AuthStorage } from '../../scripts/auth-storage.js'

function bindForm(){
    let formEl = document.querySelector('form')
    formEl.onsubmit = async (event) => {
        event.preventDefault();
        let email = event.target.email.value;
        let password = event.target.password.value;
        console.log("Email: " + email + " Password: " + password);

        let login = {
            email: email,
            password: password
        };
        
        let baseUrl = "https://localhost:7142/api/Auth/Login";
        let response = await fetch(baseUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(login)
        })

        let data = await response.json();
        
        if(response.ok && data.token){
            let authStorage = new AuthStorage();
            authStorage.setLocalStorage(data.token);
            const urlParams = new URLSearchParams(window.location.search);
            const returnUrl = urlParams.get('returnUrl');
            if (returnUrl) {
                window.location.href = decodeURIComponent(returnUrl);
            }else{
                window.location.href = "../../../index.html";
            }

        }else{
            console.error("Login failed: " + data.message);
            alert('Falha no login: ' + data.message);
        }

        console.log(data.message);

        event.target.reset();
    }
}

bindForm();