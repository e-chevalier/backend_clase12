import { loginService } from '../services/loginService.js'

class Login {

    async getLogin(req, res, next) {
        try {
            let response = await loginService.getLogin(req)
            res.render('login')
            
        } catch (error) {
            console.log(error);
        }
    }


    async postLogin(req, res, next) {
        try {
            const { status } = await loginService.postLogin(req)

            if (status == 'OK') {
                res.redirect('/api/viewOne')
            } else {
                res.redirect('/api/login')
            }

        } catch (error) {
            console.log(error);
        }
    }

}

export let loginController = new Login()
