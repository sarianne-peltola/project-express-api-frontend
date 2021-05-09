import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Track from '../components/Track'

const TrackDetails = () => {
  const { trackID } = useParams();
  const [track, setTrack] = useState([]);

  useEffect(() => {
    fetch(
      `https://project-express-api-sari-anne.herokuapp.com/tracks/${trackID}`
    )
      .then((res) => res.json())
      .then((json) => {
        setTrack(json.data);
      })
  }, [trackID]);

  return (
    <Track {...track} />
  );
};

export default TrackDetails;
