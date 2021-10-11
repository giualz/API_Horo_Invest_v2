const bcrypt = require('bcrypt')

exports.generateHash = async (password) => {
    const passEncode = await bcrypt.genSaltSync(10, "a");
    return bcrypt.hashSync(password, passEncode)
}