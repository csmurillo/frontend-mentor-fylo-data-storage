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
    <main className='center screen'>
        <FyloWrapper>
            <Fylo></Fylo>
            <Storage></Storage>
        </FyloWrapper>
    </main>
  </>
);

const FyloWrapper = styled.h1`
  padding:40px;
  width:100%;
  @media (min-width: 1000px) {
    display:flex;
    padding:120px;
    justify-content:center;
  }    
`;