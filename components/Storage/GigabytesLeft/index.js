import React,{ useEffect, useState} from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';

const GigaBytesLeft = ({GigaBytesLeft})=>{    
    return(
        <GigaBytesLeftContainer className='center'>
            <Wrapper className='center'>
                <GigaBytes>{GigaBytesLeft}</GigaBytes>
                <GigaBytesTitle>GB LEFT</GigaBytesTitle>
            </Wrapper>
        </GigaBytesLeftContainer>
    );
};
const GigaBytesLeftContainer=styled.div`
    position:absolute;
    left:0;
    bottom:-35px;
    // top:85%;
    width:100%;
    // background-color:white;
    @media (min-width: 768px) {
        top:-50px;
        right:10px;
        height:fit-content;
        bottom:none;
        justify-content: flex-end !important;
    } 
`;
const Wrapper=styled.div`
    width:50%; height:100%;
    padding:15px;
    border-radius:10px;
    background-color:white;
    display:flex;
    @media (min-width: 768px) {
        width:fit-content;
        position:absolute;
        right:20px;
    } 
`;
const GigaBytes=styled.div`
font-size:1.2em;
margin-right:8px;
`;
const GigaBytesTitle=styled.div`
font-size:.45em;
color:hsl(229, 7%, 55%);
`;

export default GigaBytesLeft;