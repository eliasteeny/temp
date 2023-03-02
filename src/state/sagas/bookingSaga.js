import {takeLatest, put, call, all} from "redux-saga/effects"
import {getSlotsAPI, bookAppointmentAPI} from "../../api/bookings-api"

function* getSlotsAsync(action){
    try {
        const response = yield call(getSlotsAPI, action.payload);

        if(response.state === false)
            throw new Error("Getting Slots Failed Custom");
        
        yield put({type: "GET-SLOTS_ASYNC", payload: response.data})
        
    } catch (error) {
        console.log("***Catch getSlotsAsync:",error)
    }
}

function* bookAppointmentAsync(action){
    try {
        const response = yield call(bookAppointmentAPI, action.payload);
        
        if(response.state === false)
            throw new Error("Booking Appointment Failed Custom");

        yield put({type: "BOOK-APPOINTMENT_ASYNC", payload: response.data})
        
    } catch (error) {
        console.log("***Catch bookAppointmentAsync:",error)
    }
}

//Public functions

function* watchGetSlots(){
    yield takeLatest("GET-SLOTS", getSlotsAsync)
}

function* watchBookAppointment(){
    yield takeLatest("BOOK-APPOINTMENT", bookAppointmentAsync)
}


export default function* authSaga() {
    yield all([
      watchGetSlots(),
      watchBookAppointment(),
    ])
  }