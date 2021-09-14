export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token:
  //   "BQBOAXW41iTpeswUFJSTIXux6uS80wYMaw9-ymb6B8NBIuxEGx55DU9lOVP8cCApGajG_4un9sBDbGott79TnN_IQVY808RyyswriKjMxf0VNTYKsAQCKjzmF5Zz3B0D5fyjOBus3jecA81VEzWqDCB3JHCD5NSc223QJp20tzAN6LPs99GM",
};

const reducer = (state, action) => {
  //Action -> type, [payload]
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
