require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3333;
require('./database/index')

//check this 
//routers
const routes = require('./routers/indexRoutes')

app.use(cors())
//apply middleware default (global)
app.use(express.json())

// app.use(routes)
routes(app)

//listen to server
app.listen(port, () => console.log(`server working on ${port}`));