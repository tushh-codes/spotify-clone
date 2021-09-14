import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from "../../DataLayer";

const Header = () => {
  const [{ user }, dispatch] = useDataLayerValue();
  // console.log(user.display_name);
  return (
    <div className='header'>
      <div className='header_left'>
        <SearchIcon />
        <input type='text' placeholder='Search for Artists, Songs,' />
      </div>
      <div className='header_right'>
        <Avatar src={user?.images[0].url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
};

export default Header;
