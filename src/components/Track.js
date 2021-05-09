import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

const Track = ({
  trackName,
  artistName,
  genre,
  energy,
  danceability,
  popularity,
}) => {
  return (
    <>
      <StyledLink to='/' exact='true'>
        Go back
      </StyledLink>

      <Container>
        <h1>Track name: {trackName}</h1>
        <h2>Artist: {artistName}</h2>
        <p>Genre: {genre}</p>
        <p>Energy: {energy}</p>
        <p>Danceability: {danceability}</p>
        <p>Popularity: {popularity}</p>
      </Container>
    </>
  );
};

export default Track;

const Container = styled.div`
  border: 1px solid black;
  margin: 0 20px 20px 20px;
  padding: 0 20px 20px 20px;
  background-color: #f1f1f1;
  font-family: 'Montserrat', sans-serif;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgb(220, 167, 87);
  margin: 20px;
  font-family: 'Montserrat', sans-serif;
`;
