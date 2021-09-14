import React from "react";
import "./Sidebar.css";
import SidebarOptions from "./SidebarOptions";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "../../DataLayer";

const Sidebar = () => {
  const [{ playlists }, dispatch] = useDataLayerValue();

  return (
    <div className='sidebar'>
      <img
        className='sidebar_logo'
        src='https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg'
        alt='spotify'
      />
      <SidebarOptions Icon={HomeIcon} title='Home' />
      <SidebarOptions Icon={SearchIcon} title='Search' />
      <SidebarOptions Icon={LibraryMusicIcon} title='Your Library' />
      <br />
      <strong className='sidebar_title'>PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOptions title={playlist.name} key={playlist.id} />
      ))}
    </div>
  );
};

export default Sidebar;
