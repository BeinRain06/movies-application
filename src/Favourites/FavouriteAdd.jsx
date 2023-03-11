import FavoriteIcon from "@mui/icons-material/Favorite";
import "./FavouriteAdd.css";

function FavouriteAdd(props) {
  return (
    <div className="btn_fav_content">
      <h3 className="fav_title">Add To Favourites</h3>
      <FavoriteIcon htmlColor="red" fontSize="10px" />
    </div>
  );
}

export default FavouriteAdd;
