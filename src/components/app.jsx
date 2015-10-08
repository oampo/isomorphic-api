var React = require('react');
var connect = require('react-redux').connect;

var SearchBox = require('./search-box');
var List = require('./list');

var actions = require('../actions');

var App = React.createClass({
    onSearchBoxChange: function(text) {
        this.props.dispatch(actions.performSearch(text));
    },

    render: function() {
        var items;

        if (this.props.items.length) {
            items = <List items={this.props.items} />;
        }
        else if (this.props.isSearching) {
            items = <div>Searching...</div>;
        }
        else if (this.props.q != "") {
            items = <div>No results found</div>;
        }
        else {
            items = <div>Search result will appear here</div>;
        }

        return (
            <div>
                <SearchBox value={this.props.q}
                           onChange={this.onSearchBoxChange} />
                {items}
            </div>
        );
    }
});

var selector = function(state) {
    return state;
};

module.exports = connect(selector)(App);
