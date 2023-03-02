const initScheduleData = {
    selectedDate: Date.now()+(24*60*60*1000),
    schedule: {}
}

const reducer = (state=initScheduleData, action) => {
    switch(action.type){
        case "SELECT-DATE":

            state.selectedDate = action.payload.date

            return {...state}

        case "GET-SLOTS_ASYNC":

            if(typeof action.payload === 'string'){
                action.payload = JSON.parse(action.payload)
            }

            const scheduleArray = action.payload.schedule

            let schedule={}

            for(let i=0;i<scheduleArray.length;i++){
                schedule[scheduleArray[i].availability.date] = scheduleArray[i]
            }

            state.schedule = schedule

            return {...state}
            
        case "BOOK-APPOINTMENT_ASYNC":
            return state;

        default:
            //console.log("Reached bookingReducer Default: ",state)
            return state
    }
}

export default reducer