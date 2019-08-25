const initialState = {
    postData: {},
    isFetching: false,
    isError: false
};

const post = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_POST":
            return Object.assign({}, state, {
                isFetching: true,
                postData: {},
                isError: false
            });
        case "FETCHED_POST":
            return Object.assign({}, state, {
                postData: action.data,
                isFetching: false,
                isError: false
            });
        case "RECEIVE_ERROR":
            return Object.assign({}, state, {
                isError: true,
                isFetching: false
            });
        default:
            return state;
    }
};

export default post;