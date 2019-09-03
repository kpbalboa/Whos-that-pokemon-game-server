const express = require('express');
const app = express();
const port = 5000;
const questionRoutes = require("./routes")
const cors = require('cors')
app.use(cors());
app.use(express.json());
app.use('/', questionRoutes)

app.listen(port, () => console.log('server is running'));
