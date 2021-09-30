const { validationResult } = require('express-validator')

exports.validateDto = (checks) => {
    return [
        ...checks,
        //injeta como outro middleware
        (req, res, next) => {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                //422 erro de inserção
                return res.status(422).json({
                    success: false,
                    errors: errors.array()
                })
            }
            //se tudo estiver certo, segue
            next()
        }
    ]
}