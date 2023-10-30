const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 8080;

//Use Morgan middleware to log requests
app.use(morgan('combined'));

app.use(express.static('public'));

let topMovies = [
    {
        Title: 'Amelie',
        Director: 'Jean-Pierre Jeunet',
        Year: 2001
    },
    {
        Title: 'Eternal Sunshine of the Spotless Mind',
        Director: 'Michel Gondry',
        Year: 2004
    },
    {
        Title: 'Life is Beautiful',
        Director: 'Robert Benigni',
        Year: 1997
    },
    {
        Title: "Pan's Labyrinth",
        Director: 'Guillermo del Toro',
        Year: 2006
    },
    {
        Title: 'Fight Club',
        Director: 'David Fincher',
        Year: 1999
    },
    {
        Title: 'Parasite',
        Director: 'Bong Joon-ho',
        Year: 2019
    },
    {
        Title: 'Requim for a Dream',
        Director: 'Darren Aronofsky',
        Year: 2000
    },
    {
        Title: 'Old Boy',
        Director: 'Park Chan-wook',
        Year: 2003
    },
    {
        Title: 'There Will be Blood',
        Director: 'Paul Thomas Anderson',
        Year: 2007
    },
    {
        Title: 'The Dark Knight',
        Director: 'Christopher Nolan',
        Year: 2008
    },
];

//Create the GET route for /
app.get('/', (req, res) => {
    res.send("Welcome to my movie API!");
});

app.get('/secreturl', (req, res) => {
    res.send('This is a secret url with super top-secret content.');
});

//Create the GET route for /movies
app.get('/movies', (req, res) => {
    res.json(topMovies);
});

//Return a list of ALL movies to the user
app.get('/movies', (req, res) => {
    res.send('Successful GET request returning data on all movies');
});

// Return data about a single movie by title to the user
app.get('/movies/:title', (req, res) => {
    res.send(`Successful GET request returning data about the movie with title: ${req.params.title}`);
});

// Return data about a genre by name/title
app.get('/genres/:name', (req, res) => {
    res.send(`Successful GET request returning data about the genre with name: ${req.params.name}`);
});


//READ
app.get('/movies/:title', (req, res) => {
    const { title } = req.params; 
    const movie = movies.find(movie => movie.Title === title);

    if (movie) {
        res.status(200).json(movie);
    } else {
        res.status(400).send('no such movie');
    }
    });

//Error-handling middleware function
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

//Start server
app.listen(8080, () => {
    console.log('Your app is listening on port 8080.');
});