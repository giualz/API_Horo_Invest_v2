//manter as configurações do database

module.exports = {
    //ambiente de desenvolvimento
    development:{
        //configuração de banco do postgres
        dialect: 'postgres',
        host: 'motty.db.elephantsql.com',
        username: 'nhtuzuan',
        password: 'WpLTNjs-EtD5LwQlG6URtuHzMZ8EUjvE',
        database: 'nhtuzuan',     
        port: 5432,
        define: {
            timestamps: true,
            //os itens da tabela são com _ como complemento
            underscore: true,
        },
        dialectOptions: {
            ssl: true
          },
    }

}

//informa ao server