//manter as configurações do database

module.exports = {
    //ambiente de desenvolvimento
    development:{
        //configuração de banco do postgres
        dialect: 'postgres',
        host: 'localhost',
        username: 'default',
        password: 'secret',
        database: 'project03',
        define: {
            timestamps: true,
            //os itens da tabela são com _ como complemento
            underscore: true,
        }
    }

}

//informa ao server