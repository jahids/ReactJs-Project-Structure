import React from 'react';
import styled from 'styled-components';

const BaseButton = styled.button`
    border: none;
    outline: none;
    background: ${(props)=>(props.red ? 'red' : 'white')};
    color:${(props)=>(props.red) ? 'white' : 'black'};
    font-size: 0.9rem;
    text-transform: uppercase;
    padding : 0.5rem 1rem;
    letter-spacing: 2px;
    padding: 0.5rem 1rem;
    cursor: pointer;
    `;

const PrimaryButton = styled(BaseButton)`
background : green;
 color : white;
`

const StyleApp = () => {
  return (
    <div>
      <p>hi amr npm </p>
      <BaseButton red={true} >I am a button</BaseButton>
      <PrimaryButton>i am a primary</PrimaryButton>
    </div>
  );
};

export default StyleApp;

