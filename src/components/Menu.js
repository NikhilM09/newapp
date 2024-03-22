import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/config";
import useMenulist from "../utils/useMenulist";

const Menu = () => {
    const searchParams = useParams();
    const { resId } = searchParams;
    const menuList = useMenulist(resId)
    

    if (menuList.length === 0)
        return (<div className="container d-flex flex-wrap mt-4 gap-4">
            <Shimmer />
        </div>)

    else {
        const { name, cuisines, areaName, feeDetails, avgRating, totalRatingsString } = menuList[0]?.card?.card?.info
        // const {itemCards } = menuList[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
        const filteredData = menuList[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(listItem =>
            listItem?.card?.card['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        )

        const nestedData = menuList[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(listItem =>
            listItem?.card?.card['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
        )

        console.log("filteredData", filteredData);
        console.log("nested data", nestedData);
        return (
            <div className="container mt-4" style={{ width: "60%" }}>
                <div className="d-flex justify-content-between align-items-center pb-4 border-bottom border-secondary ">
                    <div>
                        <h6>{name}</h6>
                        <div className="text-secondary">{cuisines.join(", ")}</div>
                        <div className="text-secondary">{areaName}</div>
                        <div className="text-secondary">🚲{feeDetails?.message}</div>
                    </div>
                    <div>
                        <h6 className="text-success">⭐{avgRating}</h6>
                        <hr className="m-0"></hr>
                        <div className="text-secondary">{totalRatingsString}</div>
                    </div>
                </div>
                {
                    filteredData.map(filteredItem =>
                        <div className="pt-4" key={filteredItem?.card?.card?.title} style={{borderBottom:"15px solid #f0f0f0"}}>
                        <h6>{filteredItem?.card?.card?.title}</h6>
                        {
                            filteredItem?.card?.card?.itemCards.map(itemCard =>
                                <div className="d-flex justify-content-between align-items-center border-bottom border-secondary pb-4 pt-3" key={itemCard?.card?.info?.id}>
                                    <div>
                                        <div>{itemCard?.card?.info?.isVeg ? '🟢' : '🔴'}</div>
                                        <h6>{itemCard?.card?.info?.name}</h6>
                                        <h6 className="fw-normal">Rs.{(itemCard?.card?.info?.price / 100)|| (itemCard?.card?.info?.defaultPrice / 100)}</h6>
                                        <div className="text-secondary fw-light">{itemCard?.card?.info?.description}</div>
                                    </div>
                                    <div className="thumbnail_container">
                                        <img src={MENU_URL + itemCard?.card?.info?.imageId} style={{ width: "118px", height: "96px", objectFit: "cover" }} />
                                        <button className="btn btn-light text-success">ADD</button>
                                    </div>
                                </div>
                            )
                        }
                    </div>  
                    )
                }
                {
                    nestedData.map(nestedItem =>
                        <div className="pt-4" key={nestedItem?.card?.card?.title}>
                            <h4>{nestedItem?.card?.card?.title}</h4>
                            {
                                nestedItem?.card?.card?.categories.map((category, index) =>
                                    <div key={category?.title} style={{ borderBottom: "15px solid #f0f0f0" }}>
                                        <h6>{index+1}. {category?.title}</h6>
                                        {
                                            category?.itemCards.map(itemCard =>
                                                <div className="d-flex justify-content-between align-items-center border-bottom border-secondary pb-4 pt-3" key={itemCard?.card?.info?.id}>
                                                    <div>
                                                        <div>{itemCard?.card?.info?.isVeg ? '🟢' : '🔴'}</div>
                                                        <h6>{itemCard?.card?.info?.name}</h6>
                                                        <h6 className="fw-normal">Rs.{itemCard?.card?.info?.price / 100}</h6>
                                                        <div className="text-secondary fw-light">{itemCard?.card?.info?.description}</div>
                                                    </div>
                                                    <div className="thumbnail_container">
                                                        <img src={MENU_URL + itemCard?.card?.info?.imageId} style={{ width: "118px", height: "96px", objectFit: "cover" }} />
                                                        <button className="btn btn-light text-success">ADD</button>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>


                                )
                            }
                        </div>
                    )
                }
            </div>
        )
    }
}


export default Menu