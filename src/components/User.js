import {useState, useEffect} from 'react'

const User = ({name, location, contact}) => {
    const [count, setCount] =useState(0);
    
    useEffect(()=>{
        console.log("count is changed");
    },[count])

    return(
        <div className="p-4 mt-4 border border-secondary">
            <h2 className="text-danger">Function based component</h2>
            <div>Name : {name}</div>
            <div>Location : {location}</div>
            <div>Contact : {contact}</div>
            <div>Count : {count}</div>
            <button className="btn btn-sm btn-success"
            onClick={()=>setCount(count+1)}>Increment</button>
        </div>
    )
}

export default User