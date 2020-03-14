//import external modules
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../Web', 'public')));

app.listen(4000, ()=> {
    console.log('App is listening on port 4000')
});

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '../Web', 'HTML/home.html'))
});

app.get('/events', (req, res)=>{
    res.sendFile(path.join(__dirname, '../Web', 'HTML/events.html'))
});

app.get('/about', (req, res)=>{
    res.sendFile(path.join(__dirname, '../Web', 'HTML/about_us.html'))
});

app.get('/createevent', (req, res)=>{
    res.sendFile(path.join(__dirname, '../Web', 'HTML/createEvent.html'))
});

app.get('/createuser', (req, res)=>{
    res.sendFile(path.join(__dirname, '../Web', 'HTML/createUser.html'))
});

app.get('/login', (req, res)=>{
    res.sendFile(path.join(__dirname, '../Web', 'HTML/Login.html'))
});

app.get('/mypage', (req, res)=>{
    res.sendFile(path.join(__dirname, '../Web', 'HTML/minSide.html'))
});