import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

import trackImg from '../assets/track.jpg';

const TracksList = () => {
  const [tracks, setTracks] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(
      `https://project-express-api-sari-anne.herokuapp.com/tracks?page=${page}&per_page=10`
    )
      .then((res) => res.json())
      .then((json) => {
        setTracks(json.data);
      });
  }, [page]);

  const onPageMoveNext = () => {
    setPage(page + 1);
  };

  const onPageMoveBack = () => {
    setPage(page - 1);
  };

  return (
    <>
      <PageWrapper>
        <DocLink to='/documentation'>API documentation</DocLink>
        <Page>Page {page} / 5</Page>
        <Button onClick={onPageMoveBack} disabled={page === 1}>
          Previous page
        </Button>
        <Button onClick={onPageMoveNext} disabled={page === 5}>
          Next page
        </Button>
      </PageWrapper>
      <Container>
        {tracks.map((track) => (
          <Track key={track.id}>
            <StyledLink to={`/tracks/${track.id}`}>
              <img
                src={trackImg}
                width='100%'
                height='200'
                object-fit='cover'
                alt='vinyl'
              />
              <TrackName>{track.trackName}</TrackName>
              <ArtistName>{track.artistName}</ArtistName>
            </StyledLink>
          </Track>
        ))}
      </Container>
    </>
  );
};

export default TracksList;

const PageWrapper = styled.div`
  text-align: center;
  margin: 10px;
`;

const DocLink = styled(Link)`
  text-decoration: none;
  color: #000;
  color: rgb(194 89 47);
  font-family: 'Montserrat', sans-serif;
`;

const Page = styled.p`
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  color: rgb(214 179 126);
`;

const Button = styled.button`
  margin: 5px;
  font-family: 'Montserrat', sans-serif;
  display: inline-block;
  padding: 0.3em 1em;
  text-decoration: none;
  color: rgb(220, 167, 87);
  border: solid 1px rgb(220, 167, 87);
  border-radius: 3px;
  transition: 0.4s;
  :hover {
    background: rgb(214 179 126);
    color: white;
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Track = styled.div`
  border: 1px solid black;
  width: 350px;
  height: 300px;
  margin: 10px;
  box-shadow: 5px 4px 6px 1px #c5c5d6;

  @media (min-width: 1024px) {
    width: 22.5%;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const TrackName = styled.h2`
  margin: 15px;
  font-size: 18px;
`;

const ArtistName = styled.h4`
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 14px;
  color: #6439a8;
`;
