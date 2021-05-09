import React from 'react';
 import { Link } from 'react-router-dom';
 import styled from 'styled-components/macro';

const Documentation = () => {
  return (
    <>
      <StyledLink to='/' exact='true'>
        Go back
      </StyledLink>
      <p>Documentation under process...</p>
    </>
  );
};

export default Documentation;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgb(220, 167, 87);
  margin: 20px;
  font-family: 'Montserrat', sans-serif;
`;
