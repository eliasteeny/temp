export const selectDate = (date) => {
    return{
            type: "SELECT-DATE",
            payload: {date}
        }
}

export const getSlots = () => {
    return{
            type: "GET-SLOTS"
        }
}

export const bookAppointment = () => {
    return{
            type: "BOOK-APPOINTMENT"
        }
}