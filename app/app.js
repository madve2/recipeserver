const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const recipes = require('./recipes');

const localPort = 8081;
const port = process.env.PORT || localPort;

app.use(cors());

app.get('/recipes/:begin/:end', function (req, res) {
    let b = Math.max(0, req.params.begin);
    let e = Math.min(recipes.length, req.params.end);
    var recipesString = JSON.stringify(recipes.slice(b, e));
    setTimeout(function() {
        res.send(recipesString);
    }, Number(req.query.delay || 0));
});

app.get('/recipe/:id', function (req, res) {
    var recipeString = JSON.stringify(recipes.find(r => r.key == Number(req.params.id)));
    setTimeout(function() {
        res.send(recipeString);
    }, Number(req.query.delay || 0));
});

app.use('/images', express.static(path.join(__dirname, 'images')));

app.listen(port, function () {
    console.log(`Recipe server running at http://localhost:${port}/`);
});

