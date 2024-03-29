import Cardcontainer from "./Cardcontainer";
import Footer from "./Footer";
import { Fragment } from "react";
import React, { useState }  from "react";

const Body = () =>{
    const [userLocation] = useState("Mumbai");
    return(
        <>
            <Cardcontainer location={userLocation}/>
        </>
        
    );
}
export default Body;