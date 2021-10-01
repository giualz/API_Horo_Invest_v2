const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3333;
require('./database/index')

//routers
const routes = require('./routes')

app.use(cors())

//apply middleware default (global)
app.use(express.json())
app.use(routes)

//listen to server
app.listen(port, () => console.log(`server working on ${port}`));