const Joi = require('joi')

module.exports = {
    signup(req,res,next){
        const schema = {
            name: Joi.string(),
            email: Joi.string().email(),
            password: Joi.string()
        }

        const {error,value} = joi.validate(req.body,schema)

        if (error){
            switch (error.details[0].context.key){
                case 'email':
                    res.statis(400).send({
                        error: "Email not valid"
                    })
                    break
            }
        }

        next()
    }
}