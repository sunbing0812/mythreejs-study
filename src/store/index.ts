/** @format */

import { applyMiddleware, createStore } from 'redux'
import createRootReducer from './reducers'
import createSagaMiddleware from '@redux-saga/core'
import rootSaga from './saga'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'

export const history = createBrowserHistory()
const sageMiddleware = createSagaMiddleware()
const store = createStore(
    createRootReducer(history),
    applyMiddleware(routerMiddleware(history), sageMiddleware)
)
sageMiddleware.run(rootSaga)

export default store
