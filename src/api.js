var express = require('express');
var api = express.Router();

var features = ['Jetpack', 'Wings', 'Laser beams', 'Electromagnets', 'Common cold vaccine', '3D printer', 'Waffle iron', 'Trouser press', 'Microwave oven'];

api.get('/search', function(req, res) {
    var query = req.query.q.toLowerCase();
    return res.json(features.filter(function(feature) {
        return feature.toLowerCase().indexOf(query) != -1;
    }));
});

module.exports = api;
