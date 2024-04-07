import Restaurantcard from "./Restaurantcard";
import masterData from "../utils/dummyData";
import { IMG_URL } from '../utils/config';
import { useState, useEffect } from 'react';
import { RES_URL } from "../utils/config";
import Shimmer from "./Shimmer";
import Category from "./Category";
import useRestaurantList from "../utils/useRestaurantList";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Cardcontainer = ({ location }) => {
    // const collection = masterData[0]?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    // const [restaurant, setRestaurant] = useState([]);
    // const [masterData, setMasterData] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [category, setActiveCategory] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    // const [categoryTitle, setCategoryTitle] = useState("");
    const restaurantObject = useRestaurantList();
    console.log("restaurantObject", restaurantObject);
    const data = useContext(UserContext)
    console.log("context data in body", data)

    // const {masterCollection, collection, title, updater} = restaurantObject
    // const getData = async () => {
    //     try {
    //         const data = await fetch(RES_URL);
    //         const json = await data.json();
    //         // console.log("responseData", json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    //         setCategoryTitle(json?.data?.cards[1]?.card?.card?.header?.title);
    //         setRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    //         setMasterData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    //     }
    //     catch (err) {
    //         console.log("error", err);
    //         setErrorMessage("There is some Error while fetching the data, please try again");
    //     }
    // }

    const handleSearchText = (e) => {
        setSearchText(e.target.value);
    }

    const searchRestaurant = () => {
        // console.log("restaurant", restaurant);
        //filter restaurant logic start//
        const filteredData = restaurantObject?.masterCollection.filter(resItem => resItem?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
        console.log("filterData", filteredData);
        restaurantObject?.updater(filteredData);
        // setRestaurant(filteredData);
    }

    const handleRating = () => {
        const filteredData = restaurantObject?.masterCollection.filter(resItem => resItem?.info?.avgRating > 4.5);
        if (restaurantObject?.collection !== restaurantObject?.masterCollection && category === "rating") {
            handleReset();
        }
        else {
            restaurantObject?.updater(filteredData);
            setActiveCategory("rating");
            console.log("filteredData", filteredData);
        }
    }

    const handleDeliveryTime = () => {
        const filteredData = restaurantObject?.masterCollection.filter(resItem => resItem?.info?.sla?.deliveryTime < 30);
        if (restaurantObject?.collection !== restaurantObject?.masterCollection && category === "delivery") {
            handleReset();
        }
        else {
            restaurantObject?.updater(filteredData);
            setActiveCategory("delivery");
            console.log("filteredData", filteredData);
        }
    }

    const handleCategory = () => {
        setActiveCategory("veg");
        const filteredData = restaurantObject?.masterCollection.filter(resItem => resItem?.info?.veg);
        restaurantObject?.updater(filteredData);
        console.log("filteredData", filteredData);
    }

    const handleReset = () => {
        setActiveCategory("");
        restaurantObject?.updater(restaurantObject?.masterCollection);
    }
    // useEffect(() => {
    //     console.log("useEffect called");
    //     getData();
    // }, []);


    const handleContext = (val) =>{
        data.method({...data,
            userName:val})
    }
    console.log("component rendered");
    return (
        <>
            <div className="container d-flex justify-content-between align-items-center mt-4">
                <div className="d-flex gap-2">
                    <input type="text" value={searchText} onChange={handleSearchText} />
                    <button className="btn btn-sm btn-success" onClick={searchRestaurant}>Search</button>
                </div>
                <div>
                    <input type="text" value={data.userName} onChange={(e)=>handleContext(e.target.value)}/>
                </div>
                <div className="btn-container">
                    <button className="btn btn-sm btn-dark mx-1" style={{ backgroundColor: category === "rating" ? "green" : "" }} onClick={handleRating}>Rating 4.5+</button>
                    <button className="btn btn-sm btn-dark mx-1" style={{ backgroundColor: category === "delivery" ? "green" : "" }} onClick={handleDeliveryTime}>Fast delivery</button>
                    <button className="btn btn-sm btn-dark mx-1" onClick={handleCategory}>Pure Veg</button>
                    {category && <button className="btn btn-sm btn-dark mx-1" onClick={handleReset}>Reset</button>}
                </div>
            </div>
            {
                errorMessage ?
                    <div class="alert alert-danger">
                        <strong>Warning!</strong>{errorMessage}.
                    </div> :
                    restaurantObject?.masterCollection.length !== 0 ?
                        <>
                            <Category title={restaurantObject.title} />
                            <div className="container d-flex flex-wrap mt-4 gap-4" >
                                {restaurantObject.collection.map((card, index) => {
                                    return (
                                        <Restaurantcard
                                            key={card?.info?.id}
                                            {...card?.info}
                                            reslocation={location}
                                        />
                                    )
                                })}
                            </div>
                        </>
                        : <div className="container d-flex flex-wrap mt-4 gap-4">
                            <Shimmer />
                        </div>
            }
        </>
    );
}

export default Cardcontainer;