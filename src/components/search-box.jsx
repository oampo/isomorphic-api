var React = require('react');

var SearchBox = React.createClass({
    onChange: function() {
        if (this.props.onChange) {
            var node = React.findDOMNode(this.refs.input);
            var text = node.value.trim();
            this.props.onChange(text);
        }
    },

    render: function() {
        return (
            <input type="text" name="q" ref="input" onChange={this.onChange} value={this.props.value} autoComplete="off" />
        );
    }
});

module.exports = SearchBox;
