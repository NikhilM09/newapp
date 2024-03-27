import { MENU_URL } from "../utils/config"
import { useState } from 'react'

const NormalMenu = ({title, filteredCollection, showList, toggleFunction}) => {
    return (
        <div className="pt-4"  style={{ borderBottom: "15px solid #f0f0f0" }}>
            <h6 onClick={toggleFunction}>{title}</h6>
            {
                showList && filteredCollection.map(itemCard =>
                    <div className="d-flex justify-content-between align-items-center border-bottom border-secondary pb-4 pt-3" key={itemCard?.card?.info?.id}>
                        <div>
                            <div>{itemCard?.card?.info?.isVeg ? '🟢' : '🔴'}</div>
                            <h6>{itemCard?.card?.info?.name}</h6>
                            <h6 className="fw-normal">Rs.{(itemCard?.card?.info?.price / 100) || (itemCard?.card?.info?.defaultPrice / 100)}</h6>
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

export default NormalMenu

//uncontrolled components : components that control their own state
//controlled components : components that are controlled by their parent