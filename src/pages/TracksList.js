import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import styled from "styled-components/macro";

const TracksList = () => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    fetch(
      'https://project-express-api-sari-anne.herokuapp.com/tracks?page=1&per_page=10'
    )
      .then((res) => res.json())
      .then((json) => {
        setTracks(json.data);
      });
  }, []);

  return (
    <Container>
      {tracks.map((track) => (
        <Track key={track.id}>
          <StyledLink to={`/tracks/${track.id}`}>
            <h2>{track.trackName}</h2>
            <h3>{track.artistName}</h3>
          </StyledLink>
        </Track>
      ))}
    </Container>
  );
};

export default TracksList;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Track = styled.div`
  border: 1px solid black;
  width: 300px;
  height: 300px;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`