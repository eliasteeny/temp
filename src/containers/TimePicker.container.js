import {useSelector} from "react-redux"

import TimeSlot from "../components/TimeSlot.component"

import styled from "styled-components";

import moment from 'moment'


const TimePickerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    `

const TitleBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-weight: bold;
    width: 100%;
    margin-bottom: ${({theme}) => theme.margin.bottom};
    `

const TimeSlotsContainer = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
    `

const DatePicker = () => {

    const bookings = useSelector((state)=> state.bookings)

    const selectedDate = moment(bookings.selectedDate)
    const date = selectedDate.format('DD-MM-YYYY')

    const currentSchedule = bookings.schedule[date]

    const displaySlots = ()=>{
        let slots=[]
        let availableSet = new Set()
        let unavailableSet = new Set()

        currentSchedule.available.map((period, index)=>{
            let from = moment.unix(period.from_unix)
            let to = moment.unix(period.to_unix)

            availableSet.add(from.format('h:mm a'))

            while((from=from.add(1,'hour')).format('h:mm a') !== to.format('h:mm a')){
                availableSet.add(from.format('h:mm a'))
            }
        })
        

        currentSchedule.unavailable.map((period, index)=>{
            let from = moment.unix(period.from_unix)
            let to = moment.unix(period.to_unix)

            unavailableSet.add(from.format('h:mm a'))


            while((from=from.add(1,'hour')).format('h:mm a') !== to.format('h:mm a')){
                unavailableSet.add(from.format('h:mm a'))
            }
        })


        unavailableSet.forEach((val,valo,set)=>{
            availableSet.delete(val)
            slots.push({
                val: val,
                obj: <TimeSlot
                    disabled={true}
                    time={val}
                    key={val}
                />
            }
            )
        })

        availableSet.forEach((val,valo,set)=>{
            slots.push({
                val: val,
                obj: <TimeSlot
                    time={val}
                    key={val}
                />
            }
            )
        })

        slots.sort((a,b)=> moment(a.val,'h:mm a')-moment(b.val,'h:mm a'))

        return slots.map((slot)=>slot.obj)
    }
  
    return (
        
        <TimePickerContainer>
            <TitleBar>Choose Time</TitleBar>

            <TimeSlotsContainer>
            {
                currentSchedule && currentSchedule.availability && currentSchedule.availability.total>0

                ? displaySlots()

                : "No Available Slots"
            }
            </TimeSlotsContainer>
            
        </TimePickerContainer>

    )
    {/*DatePicker end*/}
  };
  
  export default DatePicker;