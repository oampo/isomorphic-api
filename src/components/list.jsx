var React = require('react');

var List = React.createClass({
    render: function() {
        var items = this.props.items.map(function(item, i) {
            return <li key={i}>{item}</li>;
        });

        return <ul>{items}</ul>;
    }
});

module.exports = List;
