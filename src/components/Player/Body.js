import React from "react";
import { useDataLayerValue } from "../../DataLayer";
import "./Body.css";
import Header from "./Header";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow";

const Body = ({ spotify }) => {
  const [{ discover_weekly, user }, dispatch] = useDataLayerValue();
  console.log(discover_weekly?.description);
  return (
    <div className='body'>
      <Header spotify={spotify} />

      <div className='body_info'>
        <img src={discover_weekly?.images[0].url} alt='discover weekly' />

        <div className='body_infoText'>
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>
            {discover_weekly?.description
              ? discover_weekly?.description
              : user?.display_name}
          </p>
        </div>
      </div>

      <div className='body_songs'>
        <div className='body_icons'>
          <PlayCircleFilledIcon className='body_shuffle' />
          <FavoriteIcon fontSize='large' />
          <MoreHorizIcon />
        </div>
        {discover_weekly?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))}
      </div>
    </div>
  );
};

export default Body;
