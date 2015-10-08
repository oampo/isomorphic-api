var actions = require('./actions');

var items = function(state, action) {
    if (state === undefined) {
        return {
            isSearching: false,
            q: '',
            items: []
        };
    }

    if (action.type == actions.SEARCH) {
        return {
            isSearching: true,
            q: action.q,
            items: []
        };
    }
    else if (action.type == actions.SEARCH_RESULTS) {
        return {
            isSearching: false,
            q: action.q,
            items: action.items
        };
    }
    else {
        return state;
    }
};

exports.items = items;
