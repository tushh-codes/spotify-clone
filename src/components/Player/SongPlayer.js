import React from "react";
import SpotifyPlayer from "react-spotify-web-playback";
const SongPlayer = ({ accessToken, trackUri }) => {
  if (!accessToken) return null;
  return (
    <SpotifyPlayer
      token={accessToken}
      uris={trackUri ? [trackUri] : []}
      showSaveIcon
    />
  );
};

export default SongPlayer;
