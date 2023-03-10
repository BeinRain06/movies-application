import FavoriteIcon from "@mui/icons-material/Favorite";
import "./FavouriteRemove.css";

function FavouriteRemove(props) {
  return (
    <div className="btn_fav_content">
      <h3 className="fav_title">Remove From Favourites</h3>
      <FavoriteIcon htmlColor="red" fontSize="small" />
    </div>
  );
}

export default FavouriteRemove;
