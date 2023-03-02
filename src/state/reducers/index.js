import {combineReducers} from "redux"
import bookingsReducer from "./bookingsReducer"
//import uiReducer from "./uiReducer"


const reducers = combineReducers({
    bookings: bookingsReducer,
    //ui: uiReducer
})

export default reducers