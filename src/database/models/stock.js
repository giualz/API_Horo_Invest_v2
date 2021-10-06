const { Model, DataTypes } = require('sequelize');

class Stocks extends Model {
    // método init recebe instancia do sequelize
    // quando chamar o método init, o sequelize será injetado dentro dele
    // injeta as configurações do db e injeta no model para trabalhar na app
    static init(sequelize) {
        // quem tem valor prioritário é o método de fora
        // recebe dois métodos: valor padrão da tabela e valor de conexão
        //características e informações hierárquicas
        // as informações da migration não precisam ser repetidas no model
        super.init(
            {
                stock_name: DataTypes.STRING,
                status: DataTypes.BOOLEAN
            },
            //objeto de configuração           
            {
                sequelize,
                tableName: 'stocks'
            }
        );
    }

    static associate(models){
        this.belongsToMany(models.Users, {
            foreignKey: 'stock_id',
            through: 'users-stocks',
            as: 'users'
        })
    }
}

module.exports = Stocks