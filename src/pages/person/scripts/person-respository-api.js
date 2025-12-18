import { AuthStorage } from "../../scripts/auth-storage.js";

class PersonRepositoryApi {
    constructor(){
        this.authStorage = new AuthStorage();
        this.baseUrl = "https://localhost:7142/api/Person";
    }
    create(person){  
        let token = this.authStorage.getLocalStorage();      
        fetch(this.baseUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            },
            body: JSON.stringify(person)
        })
    }
    async getAll(){
        let token = this.authStorage.getLocalStorage();  
        let response = await fetch(this.baseUrl,{
            method: "GET",
             headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            },
        })
        let list = await response.json()
        return list
    }
}

export { PersonRepositoryApi }