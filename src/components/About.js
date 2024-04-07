import User from "./User";
import UserClass from "./UserClass"
import {Component} from 'react'
import UserContext from "../utils/UserContext";
// const About = () => {
//     return(
//         <div className="container">
//             This is about us component
//             <User name="nikhil" location="mumbai" contact="confidential"/>
//             <UserClass name="nikhil (class)" location="mumbai" contact="confidential"/>
//         </div>
//     )
// }

class About extends Component {
    constructor(){
        super()
        console.log("Parent constructor called")
    }

    componentDidMount(){
        console.log("Parent componentDidMount called");
    }

    render(){
        console.log("Parent render called")
        return(
            <div className="container">
             This is about us component (Class based) : Created By -  
             <UserContext.Consumer>
                {(data)=> <span>{data.userName}</span>}
             </UserContext.Consumer>
             {/* <User name="nikhil" location="mumbai" contact="confidential"/> */}
             <UserClass />
             {/* <User/> */}
             {/* <UserClass name="Second Child" location="mumbai" contact="confidential"/> */}
             {/* <UserClass name="Third Child" location="mumbai" contact="confidential"/> */}
         </div>
        )
    }
}

export default About;