import { practica2Service } from '../services/practica2Service.js'

class Practica2 {
    async getPractica2(req, res, next) {
        try {
            let response = await practica2Service.test()
            res.json(response)
        } catch (error) {
            console.log(error)
        }

    }

}

export let practica2Controller = new Practica2()
