const express = require ('express');
const app = express ();

let topMovies = [
    {
        title: 'Amelie',
        director: 'Jean-Pierre Jeunet',
        year: 2001
    },
    {
        title: 'Eternal Sunshine of the Spotless Mind',
        director: 'Michel Gondry',
        year: 2004
    },
    {
        title: 'Life is Beautiful',
        director: 'Robert Benigni',
        year: 1997
    },
    {
        titel: "Pan's Labyrinth",
        director: 'Guillermo del Toro',
        year: 2006
    },
    {
        title: 'Fight Club',
        director: 'David Fincher',
        year: 1999
    },
    {
        title: 'Parasite',
        director: 'Bong Joon-ho',
        year: 2019
    },
    {
        title: 'Requim for a Dream',
        director: 'Darren Aronofsky',
        year: 2000
    },
    {
        title: 'Old Boy',
        director: 'Park Chan-wook',
        year: 2003
    },
    {
        title: 'There Will be Blood',
        director: 'Paul Thomas Anderson',
        year: 2007
    },
    {
        title: 'The Dark Knight',
        director: 'Christopher Nolan',
        year: 2008
    },
];

//Get Express
app.get('/movies', (req, res) => {
    res.json(topMovies);
});

app.get('/', (req, res) => {
    res.send("Welcome to my movie app!");
});

app.listen(8080, () => {
    console.log('Your app is listening on port 8080.');
});