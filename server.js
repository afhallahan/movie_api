//Requirements and constants
const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('./models.js');
const { check, validationResult } = require('express-validator');
const url = require('url');


//Listen for requests
app.listen(8080, () => {
    console.log('Your app is listening on port 8080.');
});