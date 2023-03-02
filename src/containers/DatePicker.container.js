import DaySlot from "../components/DaySlot.component"
import {LeftArrow, RightArrow} from "../components/Arrows.component"

import styled from "styled-components";
import { ScrollMenu } from "react-horizontal-scrolling-menu";


const DatePickerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-bottom: ${({theme}) => theme.margin.bottom};
    `

const TitleBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-weight: bold;
    width: 100%;
    margin-bottom: ${({theme}) => theme.margin.bottom};
    `

const DatePicker = () => {


    const days = ()=>{
        const current = Date.now()

        const day = (24*60*60*1000)

        let arr=[
            <DaySlot
                date={current}
                disabled={true}
                itemId={0}
                key={0}
                />,
            <DaySlot
                selected={true}
                date={current+(day)}
                itemId={1}
                key={1}
                />
        ]
        
        for(let i=2;i<31;i++){
            const date = current+(day*i)
             arr.push(<DaySlot
                date={date}
                itemId={i}
                key={i}
                />)
        }

        return arr
    }
  
    return (
        
        <DatePickerContainer>
            <TitleBar>Schedule</TitleBar>
            <ScrollMenu
              LeftArrow={LeftArrow}
              RightArrow={RightArrow}
              options={{
                ratio: 0.9,
                rootMargin: "5px",
                threshold: [0.01, 0.05, 0.5, 0.75, 0.95, 1]
              }}
            >
                {
                    days()
                }

            </ScrollMenu>
        </DatePickerContainer>

    )
    {/*DatePicker end*/}
  };
  
  export default DatePicker;