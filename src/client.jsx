var React = require('react');
var applyMiddleware = require('redux').applyMiddleware;
var thunk = require('redux-thunk');
var createStore = applyMiddleware(thunk)(require('redux').createStore);
var Provider = require('react-redux').Provider;

var items = require('./reducers').items;
var App = require('./components/app');

var store = createStore(items, window.INITIAL_STATE);

window.addEventListener('DOMContentLoaded', function() {
    React.render(
        <Provider store={store}>
            {function() {return <App />;}}
        </Provider>, document.getElementById('app')
    );
});
