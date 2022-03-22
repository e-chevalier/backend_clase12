import { loginService } from '../services/loginService.js'

class Login {

    async getLogin(req, res, next) {
        try {
            let response = await loginService.getLogin()
            res.render('login')
        } catch (error) {
            console.log(error);
        }
    }

    
    async postLogin(req, res, next) {
        try {
            let response = await loginService.postLogin(req)
            return response
        } catch (error) {
            console.log(error);
        }
    }

}

export let loginController = new Login()
