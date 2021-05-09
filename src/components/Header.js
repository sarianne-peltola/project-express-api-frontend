import React from 'react';
import styled from 'styled-components/macro';

import headerImg from '../assets/header.jpg';


const Header = () => {
  return (
    <HeaderImage>
      <Wrapper>
        <Title>Welcome Sari's Spotify API</Title>
        <SubTitle>Top 50 Spotify Tracks</SubTitle>
      </Wrapper>
    </HeaderImage>
  );
};

export default Header;

const HeaderImage = styled.div`
  background-image: url(${headerImg});
  background-size: cover;
  height: 400px;
  text-align: center;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Wrapper = styled.div`
  background-color: rgb(0 0 0 / 40%);
`

const Title = styled.h1`
  font-size: 30px;
  font-family: 'Dancing Script', cursive;

  @media (min-width: 768px) {
    font-size: 50px;
  }

  @media (min-width: 1024px) {
    font-size: 60px;
  }
`;

const SubTitle = styled.h2`
  font-size: 15px;
  font-family: 'Montserrat', sans-serif;

  @media (min-width: 768px) {
    font-size: 25px;
  }

  @media (min-width: 1024px) {
    font-size: 30px;
  }
`;
