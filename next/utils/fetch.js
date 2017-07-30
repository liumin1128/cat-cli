import 'isomorphic-fetch';
import es6promise from 'es6-promise';

es6promise.polyfill();

export default (url, params = {}) => {
  const options = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({ ...params }),
  };
  return fetch(url, options)
    .then((response) => {
      if (response.status >= 400) {
        throw new Error('Bad response from server');
      }
      return response.json();
    })
    .catch(err => ({ err }));
};
