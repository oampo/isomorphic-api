var axios = require('axios');

var SEARCH = 'search';

var search = function(q) {
    return {
        type: SEARCH,
        q: q
    };
};

var SEARCH_RESULTS = 'search-results';

var searchResults = function(q, items) {
    return {
        type: SEARCH_RESULTS,
        q: q,
        items: items
    };
};

var performSearch = function(q) {
    return function(dispatch) {
        if (!q) {
            dispatch(searchResults(q, []));
            return Promise.resolve();
        }

        dispatch(search(q));
        return axios.get('http://localhost:8080/api/search', {
            params: {
                q: q
            }
        }).then(function(res) {
            dispatch(searchResults(q, res.data));
        });
    }
};



exports.SEARCH = SEARCH;
exports.SEARCH_RESULTS = SEARCH_RESULTS;

exports.search = search;
exports.searchResults = searchResults;
exports.performSearch = performSearch;
