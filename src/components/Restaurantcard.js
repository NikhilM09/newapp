
const Restaurantcard = ({imgURL, name, rating, deliveryTime, cuisines, location}) =>{
    // console.log("props", props);
    // const {url, name} = props;
    return(
    <div className="custom-card">
        <div>
            <img src={imgURL}
             alt="resimage"
             width="100%"
             style={{height:"150px", 
             objectFit : "cover"}}/>
        </div>
        <div className="cuisine">{name}</div>
        <div className="d-flex justify-content-between">
            <div className="bg-success text-white px-2">⭐{rating}/10</div>
            <div>{deliveryTime} min</div>
        </div>
        <div className="text-secondary cuisine">{cuisines}</div>
        <div className="text-secondary">{location}</div>
    </div>);
}
export default Restaurantcard ;