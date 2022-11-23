export const GET_CRYPTO_DATA = 'GET_CRYPTO_DATA';
export const BUY_CRYPTO = 'BUY_CRYPTO';

export const getCryptoData = () => dispatch => {
  const response = require('../../json_Data/coinData.json');
  const data = response.data;

  dispatch({
    type: GET_CRYPTO_DATA,
    payload: data,
  });
};

export const buyCrypto = (item, inputText) => (dispatch, getState) => {
  const data = getState().getCryptoDataReducer.data;
  // console.log('----[[[]]] ==>>>', data);
  const finalData = data.map((element) => {
    if (element.id == item.id) {
      return {
        ...element,
        quantity: element.quantity + parseInt(inputText),
      };
    } else {
      return element;
    }
  });

  dispatch({
    type: BUY_CRYPTO,
    payload: finalData,
  });

};
