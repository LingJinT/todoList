// 等待监听
import { takeEvery } from 'redux-saga/effects';
import {sagaTest} from './action';

function* mySagas() {
    yield takeEvery(sagaTest, getSaga)
}

function* getSaga() {
    yield setTimeout(()=>{
        console.log('saga');
    },0)
}

export default mySagas;
