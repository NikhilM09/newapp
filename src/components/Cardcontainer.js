import Restaurantcard from "./Restaurantcard";
import data from "../utils/config";

const Cardcontainer = () =>{
    const {imgURL, name, rating, deliveryTime} = data[0];
    console.log("data", data[0]);
    return(
        <div className="container d-flex justify-content-between mt-4">
            <Restaurantcard url={imgURL} name={name} rating={rating} deliveryTime={deliveryTime}/>
            <Restaurantcard url={imgURL} name={name} rating={rating} deliveryTime={deliveryTime}/>
            <Restaurantcard url={imgURL} name={name} rating={rating} deliveryTime={deliveryTime}/>
            <Restaurantcard url={imgURL} name={name} rating={rating} deliveryTime={deliveryTime}/>
            <Restaurantcard url={imgURL} name={name} rating={rating} deliveryTime={deliveryTime}/>
        </div>
    );
}

export default Cardcontainer;