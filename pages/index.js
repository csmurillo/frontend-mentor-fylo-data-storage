import styled from 'styled-components';
import Fylo from '../components/Fylo';
import Storage from '../components/Storage';

export default () => (
  <>
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
@media (min-width: 768px) {
display:flex;
padding:120px;
justify-content:center;
}    
`;