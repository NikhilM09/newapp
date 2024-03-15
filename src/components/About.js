import User from "./User";
import UserClass from "./UserClass"
const About = () => {
    return(
        <div className="container">
            This is about us component
            <User name="nikhil" location="mumbai" contact="confidential"/>
            <UserClass name="nikhil (class)" location="mumbai" contact="confidential"/>
        </div>
    )
}

export default About;