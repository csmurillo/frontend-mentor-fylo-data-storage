import Head from 'next/head';
import styled from 'styled-components';
import Fylo from '../components/Fylo';
import Storage from '../components/Storage';

export default () => (
  <>
    <Head>
      <title>Frontend Mentor | Fylo data storage component</title>
      <link rel="icon" href="/images/favicon-32x32.png"/>
    </Head>
    <Screen className='center'>
        <FyloWrapper>
            <Fylo></Fylo>
            <Storage></Storage>
        </FyloWrapper>
    </Screen>
  </>
);
const Screen = styled.main`
  width:100%; height:100%;
  background-color: hsl(229, 57%, 11%);
  background-image:url('https://csmurillo.github.io/frontend-mentor-fylo-data-storage/images/bg-mobile.png');
  background-repeat: no-repeat;
  background-size: cover;
  @media (min-width: 1000px) {
      background-image:url('https://csmurillo.github.io/frontend-mentor-fylo-data-storage/images/bg-desktop.png');
      background-position: center bottom;
      background-size: 100% 50%;
  }

`;
const FyloWrapper = styled.div`
  padding:40px;
  width:100%;
  @media (min-width: 1000px) {
    display:flex;
    padding:120px;
    justify-content:center;
  }    
`;