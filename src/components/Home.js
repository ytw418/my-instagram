import React from 'react'
import styled from 'styled-components';


const Block = styled.div`
width: 100%;
    height: 810px;
    margin: 0 auto;
    flex-direction: row;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: row;
    /* align-content: center; */
    justify-content: center;
    align-items: center;
}
`;


function Home() {
   return (
      <Block>피드</Block>
   )
}




export default Home