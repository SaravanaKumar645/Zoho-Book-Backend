const userCont = require('../controllers/userController')
const routes =[
    {
        method:'POST',
        url:'/api/signup',
        handler:userCont.signup
    }
]
module.exports = routes