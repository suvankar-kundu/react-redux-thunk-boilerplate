export const fetch_user = () => {
    return {
        type: "FETCH_USER"
    };
};

export const receive_user = post => {
    return {
        type: "FETCHED_USER",
        data: post
    };
};

export const receive_error = () => {
    return {
        type: "RECEIVE_ERROR"
    };
};

export const fetchUserInfo = username => {
    const user = username.replace(/\s/g, "");
    return function (dispatch, getState) {
        dispatch(fetch_user());
        return fetch(`https://api.github.com/users/${user}`)
            .then(data => data.json())
            .then(data => {
                if (data.message === "Not Found") {
                    throw new Error("No such user found!!");
                } else dispatch(receive_user(data));
            })
            .catch(err => dispatch(receive_error()));
    };
};