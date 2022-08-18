import React from 'react';
import styled from 'styled-components';

const NewComponent = () => {
    return (
        <Title>
            Hello World
        </Title>
    )
}

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export default NewComponent