import {bindActionCreators} from "redux"
import * as bookingActions from "../state/action-creators/bookingActions"

//import { VisibilityContext } from "react-horizontal-scrolling-menu";

import {useDispatch, useSelector} from "react-redux"

import styled from "styled-components";
import moment from 'moment'


const DaySlotContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 15vw;
    height: 80px;
    margin: 0 ${({theme})=> theme.margin.horizontal};
    border: 1px solid lightgrey;
    border-radius: 10px;
    color: ${({disabled, selected}) => disabled ? 'lightgrey' : selected ? 'white' : 'inherit'};

    background-color: ${({theme, selected})=> selected ? theme.colors.primary : theme.colors.background};

    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;

    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
    `

const DaySlot = ({date, disabled=false, itemId}) => {

    const dispatch = useDispatch()
    const {selectDate} = bindActionCreators(bookingActions, dispatch)

    const bookings = useSelector((state)=> state.bookings)

    /*const visibility = useContext(VisibilityContext);
    const visible = visibility.isItemVisible(itemId);*/

    const mDate = moment(date)
    const formatedDate = mDate.format('DD-MM-YYYY')
    const weekDay = mDate.format('ddd')
    const day = mDate.format('DD')


    const selectedDate = moment(bookings.selectedDate).format('DD-MM-YYYY')
  
    return (
        
        <DaySlotContainer selected={formatedDate===selectedDate ? true : false} disabled={disabled} onClick={disabled?null:()=>selectDate(date)} >
            <span><strong>{weekDay}</strong></span>
            <span>{day}</span>
        </DaySlotContainer>
        

    )
    {/*DaySlot end*/}
  };
  
  export default DaySlot;