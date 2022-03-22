class Login {

    async getLogin() {

        try {
            return { status: "OK" }
        } catch (error) {
            console.log(error);
        }

    }

    async postLogin(req) {

        try {
            const {name} = req.body

            return { status: "OK", name: name }
        } catch (error) {
            console.log(error);
        }

    }

}

export let loginService = new Login()