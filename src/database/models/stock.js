const { Model } = require('sequelize');

class Stock extends Model{
    // método init recebe instancia do sequelize
    // quando chamar o método init, o sequelize será injetado dentro dele
    // injeta as configurações do db e injeta no model para trabalhar na app
    static init(sequelize){
    // quem tem valor prioritário é o método de fora
    // recebe dois métodos: valor padrão da tabela e valor de conexão
    super.init({}, sequelize);
}}

module.exports = Stock