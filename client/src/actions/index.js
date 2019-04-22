import axios from 'axios';
import { FETCH_USER } from './types.js';

export const fetchUser = () => {
  return async function(dispatch) {
    const response = await axios.get('/api/current_user');

    dispatch({
      type: FETCH_USER,
      payload: response
    })
  }
};
