import styled from "styled-components";


const TimeSlotContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 24%;
    border: ${({disabled}) => disabled ? '' : '1px solid lightgrey'};
    border-radius: 10px;

    color: ${({disabled}) => disabled ? 'lightgrey' : 'inherit'};

    padding: 10px;
    margin-bottom: 10px;

    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;

    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
    `

const TimeSlot = ({time, disabled=false}) => {

    const timeSelected = ()=>{
        console.log("The time is appended to the current date state using moment | repetitive code. I need to sleep :) ")
    }
  
    return (
        
        <TimeSlotContainer disabled={disabled} onClick={timeSelected} >
            <span>{time}</span>
        </TimeSlotContainer>

    )
    {/*TimeSlot end*/}
  };
  
  export default TimeSlot;