//manter as configurações do database

module.exports = {
    //ambiente de desenvolvimento
    development:{
        //configuração de banco do postgres
        dialect: 'postgres',
        host: 'postgres://nhtuzuan:WpLTNjs-EtD5LwQlG6URtuHzMZ8EUjvE@motty.db.elephantsql.com/nhtuzuan',
        username: 'nhtuzuan',
        password: 'WpLTNjs-EtD5LwQlG6URtuHzMZ8EUjvE',
        database: 'horo-db',
        port: 5000,
        define: {
            timestamps: true,
            //os itens da tabela são com _ como complemento
            underscore: true,
        }
    }

}

//informa ao server