import React from 'react'

class UserClass extends React.Component {
    constructor(){
        super();
        this.state={
            userData :{
                name:"dummy name",
                login:"dummy id",
                public_repos:0,
            },
            count : 0,
            count2 : 10
        }
    console.log("Child constructor called : ")
    }
    
    async componentDidMount(){
        //API call//
        const data = await fetch("https://api.github.com/users/nikhilM09");
        const json = await data.json();
        console.log("userData", json);
        console.log("Child componentDidMount called : ");
        this.setState({
            userData:json
        })
    }

    componentDidUpdate(prevProps, prevState){
        // console.log("prevState", prevState);
        if(this.state.count!==prevState.count)
        {
            console.log("count is changed");
        }
        if(this.state.count2!==prevState.count2)
        {
            console.log("count2 is changed");
        }
    }

    componentWillUnmount(){
        console.log("componentWillUnmount called");
    }

    render(){
        console.log("Child render called : ");
        const {name, login, public_repos} = this.state.userData;
        return(
            <div className="p-4 mt-4 border border-secondary">
            <h2 className="text-danger">Class based component</h2>
            <div>Name : {name}</div>
            <div>Id : {login}</div>
            <div>Count : {public_repos}</div>
            <button className="btn btn-success" onClick={()=>{
                this.setState({count:this.state.count+1})
            }}>Count :{this.state.count}</button>
            <button className="btn btn-success" onClick={()=>{
                this.setState({count2:this.state.count2+1})
            }}>count2 : {this.state.count2}</button>
        </div>  
        )
    }
}

export default UserClass;