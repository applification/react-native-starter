import fetch from 'fetch-everywhere';
import {
  FETCH_SUPPLIERS_REQUEST,
  FETCH_SUPPLIERS_SUCCESS,
  FETCH_SUPPLIERS_FAILURE
} from '../actions/types';

import config from '../../config';

const ROOT_URL = config.RANDOM_USER_API;

export const fetchSuppliers = () => dispatch => {
  dispatch(fetchSuppliersRequest());
  return fetch(ROOT_URL)
    .then(res => res.json())
    .then(json => dispatch(fetchSuppliersSuccess(json.results)))
    .catch(ex => dispatch(fetchSuppliersFailure(ex)));
};

export function fetchSuppliersRequest() {
  const data = {
    loading: true
  };

  return {
    type: FETCH_SUPPLIERS_REQUEST,
    payload: data
  };
}

export function fetchSuppliersFailure(error) {
  const data = {
    loading: false,
    error
  };

  return {
    type: FETCH_SUPPLIERS_FAILURE,
    payload: data
  };
}

export function fetchSuppliersSuccess(suppliers) {
  const data = {
    loading: false,
    data: suppliers
  };

  return {
    type: FETCH_SUPPLIERS_SUCCESS,
    payload: data
  };
}
