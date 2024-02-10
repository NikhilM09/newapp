
const Restaurantcard = ({url, name, rating, deliveryTime}) =>{
    // console.log("props", props);
    // const {url, name} = props;
    return(
    <div className="custom-card">
        <div>
            <img src={url}
             alt="resimage"
             width="100%"
             style={{height:"150px", 
             objectFit : "cover"}}/>
        </div>
        <p>{name}</p>
        <div className="d-flex justify-content-between">
            <p>{rating}/10</p>
            <p>{deliveryTime} min</p>
        </div>
        {/* <p>{data[0].cuisines}</p>
        <p>{data[0].location}</p> */}
    </div>);
}
export default Restaurantcard ;