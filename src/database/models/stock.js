const { Model, DataTypes } = require('sequelize');

class Stock extends Model {
    // método init recebe instancia do sequelize
    // quando chamar o método init, o sequelize será injetado dentro dele
    // injeta as configurações do db e injeta no model para trabalhar na app
    static init(sequelize) {
        // quem tem valor prioritário é o método de fora
        // recebe dois métodos: valor padrão da tabela e valor de conexão
        //características e informações hierárquicas
        // as informações da migration não precisam ser repetidas no model
        super.init({
            stock: DataTypes.STRING,
            stock_quantity: DataTypes.INTEGER,
            stock_price: DataTypes.INTEGER,
            status: DataTypes.BOOLEAN,
        }, 
        //objeto de configuração
        {sequelize}
        );
    }
}

module.exports = Stock