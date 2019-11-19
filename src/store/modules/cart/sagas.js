import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { addToCartSuccess } from './actions';

function* addToCart({ id }) {
  const response = yield call(api.get, `/products/${id}`);

  /** Faz a chamada a action addToCartSuccess */
  yield put(addToCartSuccess(response.data));
}

/** Faz o mapeamento das actions recebidas e das actions target. */
export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
