import {GET_CRYPTO_DATA, BUY_CRYPTO} from '../actions/getCryptoDataAction';

const INITIAL_STATE = {
  data: [],
};

const getCryptoDataReducer = (state = INITIAL_STATE, action) => {
  const {type, payload} = action;
  //   console.log(payload);

  switch (type) {
    case GET_CRYPTO_DATA:
      return {
        ...state,
        data: payload,
      };
    case BUY_CRYPTO:
        // console.log("[]]]]]]]]]]]]]]]]]]]]]]----///>>",payload);
      return {
        ...state,
        data: payload,
      };
    default:
      return state;
  }
};

export default getCryptoDataReducer;
