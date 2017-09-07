import {
  FETCH_SUPPLIERS_REQUEST,
  FETCH_SUPPLIERS_SUCCESS,
  FETCH_SUPPLIERS_FAILURE
} from '../actions/types';

export const INITIAL_STATE = {
  loading: false,
  error: null,
  data: []
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_SUPPLIERS_REQUEST:
      return {
        ...state,
        loading: action.payload.loading
      };
    case FETCH_SUPPLIERS_FAILURE:
      return {
        ...state,
        loading: action.payload.loading,
        error: action.payload.error
      };
    case FETCH_SUPPLIERS_SUCCESS:
      return {
        ...state,
        loading: action.payload.loading,
        error: null,
        data: action.payload.data
      };
    default:
      return {
        ...state
      };
  }
}
