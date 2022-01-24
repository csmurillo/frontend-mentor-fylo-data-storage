import React from 'react';
import styled from 'styled-components';

const Fylo = ()=>(
    <FyloContainer>
        <Wrapper>
            <FyloLogoContainer>
                <FyloLogo src="/images/logo.svg"></FyloLogo>
            </FyloLogoContainer>
            <FyloItemContainer>
                <FyloItems className='center'><DocumentItem src="/images/icon-document.svg"></DocumentItem></FyloItems>
                <FyloItems className='center'><FolderItem src="/images/icon-folder.svg"></FolderItem></FyloItems>
                <FyloItems className='center'><UploadItem src="/images/icon-upload.svg"></UploadItem></FyloItems>
            </FyloItemContainer>
        </Wrapper>
    </FyloContainer>
);
const FyloContainer=styled.div`
padding:50px;
background-color:hsl(228, 56%, 26%);
color:white;
border-top-right-radius: 80px 80px;
border-top-left-radius:10px;
border-bottom-left-radius:10px;
border-bottom-right-radius:10px;
margin-bottom:25px;
@media (min-width: 768px) {
    padding:50px 150px 50px 50px;
    align-self:flex-end;
    margin-bottom:auto;
} 
`;
const Wrapper=styled.div``;
const FyloLogoContainer=styled.div`
padding-bottom:35px;
`;
const FyloLogo=styled.img``;
const FyloItemContainer=styled.div`
width:100%;
display:flex;
`;
const FyloItems=styled.div`
background-color:hsl(229, 57%, 11%);
padding:12px;
margin-right:15px;
border-radius:5px;
`;

const DocumentItem=styled.img``;
const FolderItem=styled.img``;
const UploadItem=styled.img``;

export default Fylo;