class PersonRepositoryApi {
    constructor(){
        this.baseUrl = "https://localhost:7142/api/Person";
    }
    create(person){        
        fetch(this.baseUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(person)
        })
    }
    async getAll(){
        // async/await
        let response = await fetch(this.baseUrl)
        let list = await response.json()
        return list
    }
}

export { PersonRepositoryApi }