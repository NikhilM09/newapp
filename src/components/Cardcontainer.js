import Restaurantcard from "./Restaurantcard";
import masterData from "../utils/dummyData";
import { IMG_URL} from '../utils/config';
import {useState, useEffect} from 'react';
import { RES_URL } from "../utils/config";

const Cardcontainer = () =>{
    // const collection = masterData[0]?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    const [restaurant, setRestaurant] = useState([]);
    const getData = async() => {
        try{
            const data = await fetch(RES_URL);
            const json = await data.json();
            console.log("responseData", json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }
        catch(err){
            console.log("error", err);
        }
    }

    useEffect(()=>{
        console.log("useEffect called");
        getData();
	},[]);

    console.log("component rendered");
    return(
        <>
        <div className="container d-flex justify-content-between flex-wrap mt-4 gap-4" >
            {
                restaurant.map((card, index)=>{
                    return(
                        <Restaurantcard
                        key={card?.info?.id}
                        {...card?.info}               
                        />
                    )
                })
            }
        </div>
        </>
        
    );
}

export default Cardcontainer;