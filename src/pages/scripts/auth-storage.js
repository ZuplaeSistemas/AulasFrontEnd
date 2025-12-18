class AuthStorage {
    constructor() {
        this.STORAGE_KEY = "auth_token";
    }
    setLocalStorage(token) {
        localStorage.setItem(this.STORAGE_KEY, token);
    }
    getLocalStorage() {
        return localStorage.getItem(this.STORAGE_KEY);
    }
    isAuthenticated() {
        return localStorage.getItem(this.STORAGE_KEY) !== null;
    }
}

export { AuthStorage }