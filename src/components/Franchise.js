import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Franchise = () =>{
    const contextData = useContext(UserContext);
    return(
        <div>
            Reach out to us.
            Created By : {contextData.userName}
        </div>
    )
}

export default Franchise;