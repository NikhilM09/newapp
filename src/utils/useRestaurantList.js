import { useEffect, useState} from 'react'
import { RES_URL } from './config';

const useRestaurantList = () =>{
    const [categoryTitle, setCategoryTitle] = useState("");
    const [restaurant, setRestaurant] = useState([]);
    const [masterData, setMasterData] = useState([]);

    const getData = async () => {
        try {
            const data = await fetch(RES_URL);
            const json = await data.json();
            console.log("responseData", json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setCategoryTitle(json?.data?.cards[1]?.card?.card?.header?.title);
            setRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setMasterData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }
        catch (err) {
            console.log("error", err);
            // setErrorMessage("There is some Error while fetching the data, please try again");
        }
    }

    useEffect(()=>{
        getData();
    }, [])

    const restaurantObj = {
        title: categoryTitle,
        masterCollection : masterData,
        collection: restaurant,
        updater : setRestaurant
    }

    return restaurantObj;
}


export default useRestaurantList