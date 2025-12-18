import { PersonController } from '../scripts/person-controller.js'
import { AuthStorage } from '../../scripts/auth-storage.js'

let authStorage = new AuthStorage()
if (!authStorage.isAuthenticated()) {
    const returnUrl = encodeURIComponent(window.location.href);
    window.location.href = `../../auth/auth-login/auth-login.html?returnUrl=${returnUrl}`;
}


let controller = new PersonController()
controller.bindTable()