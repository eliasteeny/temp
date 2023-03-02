import {useEffect} from 'react'

import {useDispatch} from "react-redux"

import styled from "styled-components";

import Button from '@mui/material/Button';

import Fees from '../components/Fees.component';

import {bindActionCreators} from "redux"
import * as bookingActions from "../state/action-creators/bookingActions"
import DatePicker from './DatePicker.container';
import TimePicker from './TimePicker.container';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 50%;
    `

const TitleBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-weight: bold;
    `
//remove flex 4
const ScheduleContainer = styled.div`
    flex: 4;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    border: 1px solid ${({theme}) => theme.colors.border};
    border-radius: 5px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: ${({theme}) => theme.padding.all};
    margin-top: ${({theme}) => theme.margin.top};
    margin-bottom: ${({theme}) => theme.margin.bottom};
    `

const Scheduler = () => {

    //const bookings = useSelector((state)=> state.bookings)

    const dispatch = useDispatch()
    const {getSlots, bookAppointment} = bindActionCreators(bookingActions, dispatch)

    const bookAppointmentClicked = ()=>{
        console.log("Clicked ...")
    }

    useEffect(() => {
        getSlots()
    }, [])
  
    return (
        
        <Wrapper>
            <TitleBar>Schedule Appointment</TitleBar>
            <ScheduleContainer>

                <Fees/>

                <DatePicker/>

                <TimePicker/>

            </ScheduleContainer>
            <Button variant="contained" fullWidth onClick={bookAppointmentClicked}>Book Appointment</Button>
        </Wrapper>

    )
    {/*Scheduler end*/}
  };
  
  export default Scheduler;