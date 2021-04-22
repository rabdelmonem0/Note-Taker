const express = require('express');
const api = require('./routes/api-routes.js');
const htmlRoutes = require('./routes/html-routes.js');
const app = express();
const PORT = 3001;

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api', api);
app.use('/', htmlRoutes);

app.listen(PORT, ()=> console.log(`The server is running on PORT ${PORT}`));