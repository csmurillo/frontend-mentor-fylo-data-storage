import React,{ useEffect, useState} from 'react';
import styled from 'styled-components';
import GigaBytesLeft from './GigabytesLeft';

const Storage = ()=>{
    const [values,setValues] = useState({
        rangeValue:'0',
        min:'0',
        max:'1000'
    });
    const [gigaBytesLeft,setGigaBytesLeft]=useState(1000);
    const [gigabytes,setGigabytes]=useState(815);
    const [position,setPosition]=useState();
    const {rangeValue,min,max}=values;

    useEffect(()=>{
        setUpRangeValues();
        setupPosition();
        setupGigaBytesLeft();
    },[]);
    const setUpRangeValues=()=>{
        const value=max-gigabytes;
        setValues({...values,['rangeValue']:value});
    };
    const setupPosition=()=>{
        const position=((gigabytes-min)/(max-min))*100;
        setPosition(position);
    };
    const setupGigaBytesLeft=()=>{
        const gBLeft=gigaBytesLeft-gigabytes;
        setGigaBytesLeft(gBLeft);
    };
    return(
    <StorageContainer>
        <Wrapper>
            <StorageMessage className='center'>
                You've used <StorageUsed> 815 GB </StorageUsed> of you storage
            </StorageMessage>
            <RangeContainer>
                <Range type="range" min={min} max={max} value={rangeValue} readOnly></Range>
                <TrackRange position={position}>
                    <Handler></Handler>
                </TrackRange>
            </RangeContainer>  
            <RangeNumbersContainer>
                <RangeStart>0GB</RangeStart>
                <RangeEnd>1000GB</RangeEnd>
            </RangeNumbersContainer> 
        </Wrapper>
        <GigaBytesLeft GigaBytesLeft={gigaBytesLeft}></GigaBytesLeft> 
    </StorageContainer>);
};
const StorageContainer=styled.div`
    position:relative;
    padding:20px 40px 55px 40px;
    border-radius:10px;
    background-color:hsl(228, 56%, 26%);
    @media (min-width: 1000px) {
        height: fit-content;
        margin-left:30px;
        width:40%;
        padding: 40px 40px 55px 40px;
        align-self:flex-end;
    } 
`;
const Wrapper=styled.div`
`;
const StorageMessage=styled.div`
    color:white;
    font-size:.35em;
    width:100%;
    font-weight:400;
    @media (min-width:1000px){
        justify-content: flex-start !important;
    }
`;
const StorageUsed=styled.div`
    font-size:1.2em;
    font-weight:700;
    margin-left:2px;
    margin-right:2px;
`;
const RangeContainer=styled.div`
    position:relative;
`;
const Range=styled.input`
    width:100%; height:20px;
    background: hsl(229, 57%, 11%);
    border-radius:15px;
    -webkit-appearance: none;
    pointer-events: none;
    &::-webkit-slider-thumb {
        z-index:9999;
        -webkit-appearance: none;
        border: none;
        height: 8px;
        width: 8px;
        border-radius: 50%;
        background: transparent;
        margin-top: -3px;
        margin-left:-1px;
        cursor:pointer;
    }
    &::-webkit-slider-runnable-track {
        z-index:1;
        background: rgba(255, 255, 255, 0);
        border-radius:15px;
    }

`;
const TrackRange=styled.div`
    z-index: 0;
    height: 14px;
    border-radius: 15px;
    position: absolute;
    left:6px;
    top: 9.5px;
    width: ${props => props.position+'%'};
    background: linear-gradient(to right, hsl(6, 100%, 80%), hsl(335, 100%, 65%));
    max-width:98.9%;
    padding-right:5px;
`;
const Handler=styled.div`
    z-index:99999;
    height:10px; width:10px;
    display:flex;
    align-items:center;
    border-radius:50%;
    background-color:white;
    right:2px;
    top:2px;
    position:absolute;
`;
const RangeNumbersContainer=styled.div`
    font-size:.4em;
    color:white;
    width:100%;
    display:flex;
    justify-content: space-between;
    font-weight:400;
`;
const RangeStart=styled.div``;
const RangeEnd=styled.div``;

export default Storage;