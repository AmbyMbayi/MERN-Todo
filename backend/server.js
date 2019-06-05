const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/DB.js');
const todos = require('./routes/api/todos');

const PORT = 4000;

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, {userNewUrlParser: true}).then(
	()=>{console.log('database connected')},
	err =>{console.log('cannot connect to the database'+ err)}

);

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api/todos',todos);


app.listen(PORT, function(){
	console.log("Server is running on Port:", PORT);
});