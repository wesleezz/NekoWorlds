const path = require('path');
const express = require('express');

const Auth = () => {
 export default Auth


const app = express();

app.use('',express.static(path.join(__dirname

app.get('/', (request, response) => {
	return response.sendFile('index.js'
}

app.get('/auth/discord', (request, response) => {
	return response.sendFile('index.js'
}
