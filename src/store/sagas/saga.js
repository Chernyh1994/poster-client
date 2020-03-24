import { takeEvery, put, call } from 'redux-saga/effects';
import { REGISTER_USER} from '../types'
import * as actions from '../actions/usersAction';
import axios from 'axios';

export function* sagaWatcher(){
    yield takeEvery(REGISTER_USER, registerUser)
}

const url = 'http://localhost:8000/api/sanctum/register'

function* registerUser(action){
  yield put(actions.authStart());
  try {
    axios.defaults.withCredentials = true;
    axios.get('http://localhost:8000/sanctum/csrf-cookie').then(response => {
      console.log(response)
    });
    const response = yield call(() =>  axios.post(url, action.payload));
    console.log(response);
    yield localStorage.setItem('token', response.data.token);
    yield put(actions.authSuccess(response.data.token));
  } catch (error) {
      yield put(actions.authFail(error))
  }
}




