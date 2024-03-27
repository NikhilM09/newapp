const MenuHeader = ({name, cuisines, areaName, feeDetails, avgRating, totalRatingsString}) => {
    return (
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
    )
}

export default MenuHeader;