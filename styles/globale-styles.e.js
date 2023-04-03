import styled from 'styled-components';

export const GWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  &.relative {
    position: relative;

  }
  @media(max-width:1024px){
    max-width:  984px ;
    padding: 0 7px ;
    
  }
  
  /* @media(max-width:500px ){
    max-width: 370px;
    
  } */
`