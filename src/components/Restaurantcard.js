import { IMG_URL } from "../utils/config";
import { Link } from 'react-router-dom';

const Restaurantcard = ({cloudinaryImageId, name, avgRating, sla, cuisines, areaName, id}) =>{
    return(
    <Link to={`/menu/${id}`} className="custom-card">
        <div>
            <img src={IMG_URL+cloudinaryImageId}
             alt="resimage"
             width="100%"
             style={{height:"150px", 
             objectFit : "cover"}}/>
        </div>
        <div className="cuisine text-dark">{name}</div>
        <div className="d-flex justify-content-between">
            <div className="bg-success text-white px-2">⭐{avgRating}/5</div>
            <div className="text-dark">{sla?.deliveryTime}min</div>
        </div>
        <div className="text-secondary cuisine">{cuisines.join(", ")}</div>
        <div className="text-secondary">{areaName}</div>
    </Link>);
}

export default Restaurantcard ;