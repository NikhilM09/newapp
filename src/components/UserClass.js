import React from 'react'

class UserClass extends React.Component {
    constructor(props){
        super(props);
    }
    
    render(){
        const {name, location, contact} = this.props;
        return(
            <div className="p-4 mt-4 border border-secondary">
            <div>Name : {name}</div>
            <div>Location : {location}</div>
            <div>Contact : {contact}</div>
        </div>  
        )
    }
}

export default UserClass;