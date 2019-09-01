export const fetch_post = () => {
  return {
    type: 'FETCH_POST'
  };
};

export const receive_post = post => {
  return {
    type: 'FETCHED_POST',
    data: post
  };
};

export const receive_error = () => {
  return {
    type: 'RECEIVE_ERROR'
  };
};

export const fetchUserInfo = username => {
  const user = username.replace(/\s/g, '');
  return function (dispatch, getState) {
    dispatch(fetch_post());
    return fetch(`https://api.github.com/users/${user}`)
      .then(data => data.json())
      .then(data => {
        if (data.message === 'Not Found') {
          throw new Error('No such post found!!');
        } else dispatch(receive_post(data));
      })
      .catch(err => dispatch(receive_error()));
  };
};