import React from 'react';
import styled from 'styled-components'

//tagged literal
const Box = styled.div`
  background: red;
  width: ${props => props.size};
  height: ${props => props.size};
  .nested {
    background: green;
    color: white;
    padding: 8px;
    .hello {
      background: white;
      color: black;
      padding: 8px;
      font-size: 12px;
    }
  }
  &:hover {
    background: black;
  }`

const Styled = () => {
  return (
    <Box size='128px'>
      <div className='nested'>
        스타일드
        <div className='hello'>
          헬로헬로
        </div>
      </div>
    </Box>
  );
};

export default Styled;