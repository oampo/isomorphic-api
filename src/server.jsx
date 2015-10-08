var express = require('express');
var swig = require('swig');

var api = require('./api');

var React = require('react');
var applyMiddleware = require('redux').applyMiddleware;
var thunk = require('redux-thunk');
var createStore = applyMiddleware(thunk)(require('redux').createStore);
var Provider = require('react-redux').Provider;

var items = require('./reducers').items;
var performSearch = require('./actions').performSearch;

var App = require('./components/app');

var app = express();

app.use(express.static('build'));

app.use('/api', api);

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.set('view cache', false);
swig.setDefaults({ cache: false });

app.get('/', function(req, res) {
    var store = createStore(items);

    var query = req.query.q || '';

    store.dispatch(performSearch(query))
        .then(function() {
            var html = React.renderToString(
                <Provider store={store}>
                    {function() {return <App />;}}
                </Provider>
            );
            res.render('index', {
                html: html,
                initialState: JSON.stringify(store.getState())
            });
        });
});

app.listen(8080, function() {
    console.log('Listening on localhost:8080');
});

