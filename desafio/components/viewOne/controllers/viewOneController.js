import { viewOneService } from '../services/viewOneService.js'

class ViewOne {
    async getViewOne(req, res, next) {
        let response = await viewOneService.getViewOne()
        console.log(req.session.username)
        console.log(req.session.counter)
        res.render('main', {username: req.session.username })
    }
    
}

export let viewOneController = new ViewOne()
