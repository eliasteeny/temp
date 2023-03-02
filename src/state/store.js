import {createStore, applyMiddleware, compose} from "redux"
import createSagaMiddleware from "redux-saga"

import reducers from "./reducers/index"
import rootSaga from "./sagas/index"

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    {},
    composeEnhancers(
        applyMiddleware(sagaMiddleware)
    )
)

sagaMiddleware.run(rootSaga)

export default store