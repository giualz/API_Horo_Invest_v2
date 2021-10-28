require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3333;
require('./database/index');

const routes = require('./routers/indexRoutes');

app.use(cors());

app.use(express.json());

routes(app);

app.listen(port, () => console.log(`server working on ${port}`));