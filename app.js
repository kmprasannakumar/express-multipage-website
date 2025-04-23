// app.js

const express = require('express');
const path = require('path');
const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Serve static files like CSS
app.use(express.static(path.join(__dirname, 'public')));

// Route for Home page
app.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

// Route for About page
app.get('/about', (req, res) => {
    res.render('about', { title: 'About Us' });
});

// Route for Contact page
app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact Us' });
});

// Set the server to listen on port 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
