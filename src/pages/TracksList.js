import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import styled from "styled-components/macro";

import trackImg from '../assets/track.jpg'

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
            <img src={trackImg} width="250" height="180" object-fit="cover" alt="vinyl" />
            <TrackName>{track.trackName}</TrackName>
            <ArtistName>{track.artistName}</ArtistName>
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
  width: 250px;
  height: 300px;
  margin: 10px;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`
const TrackName = styled.h2`
  margin: 15px;
  font-size: 18px;
`
const ArtistName = styled.h4`
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 14px;
  color: #aa9cf1;
  
`