import React from 'react';
import styled from 'styled-components';

const GigaBytesLeft = ({GigaBytesLeft})=>{    
    return(
        <GigaBytesLeftContainer className='center'>
            <Wrapper className='center'>
                <GigaBytes>{GigaBytesLeft}</GigaBytes>
                <GigaBytesTitle>GB LEFT</GigaBytesTitle>
                <GigaByteBubbleTriangle></GigaByteBubbleTriangle>
            </Wrapper>
        </GigaBytesLeftContainer>
    );
};
const GigaBytesLeftContainer=styled.div`
    position:absolute;
    left:0;
    bottom:-35px;
    width:100%;
    @media (min-width: 1000px) {
        top: -10px;
        height:fit-content;
    } 
`;
const Wrapper=styled.div`
    width:50%; height:100%;
    padding:15px;
    font-size:2.5em;
    font-weight:600;
    border-radius:10px;
    background-color:white;
    display:flex;
    @media (min-width: 1000px) {
        width:fit-content;
        position:absolute;
        padding: 30px;
        right: 40px;
    } 
`;
const GigaBytes=styled.div`
    margin-right:8px;
`;
const GigaBytesTitle=styled.div`
    font-size:.45em;
    color:hsl(229, 7%, 55%);
`;
const GigaByteBubbleTriangle=styled.div`
    display:none;
    @media(min-width:1000px){
        display:block;
        width: 0; 
        height: 0; 
        border-top: 30px solid transparent;
        border-bottom: 30px solid transparent; 
        border-right:30px solid white;
        position:absolute;
        bottom:-18px;
        right:0;
    }
`;
export default GigaBytesLeft;

