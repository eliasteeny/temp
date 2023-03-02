import styled from "styled-components";


const FeesContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border-bottom: 1px solid lightgrey;
    padding-bottom: ${({theme}) => theme.padding.bottom};
    margin-bottom: ${({theme}) => theme.margin.bottom};
    `

const Title = styled.h2`
    font-weight: bold;
    `

const Fee = styled.span`
    color: ${({theme}) => theme.colors.secondary};
    `

const Fees = ({feeValue=69}) => {
  
    return (
        
        <FeesContainer>
            <Title>Fees</Title>
            <Fee>{feeValue}$</Fee>
        </FeesContainer>

    )
    {/*Fees end*/}
  };
  
  export default Fees;