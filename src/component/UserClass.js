import React, { Component } from 'react'

export default class UserClass extends Component {
    constructor(props){
        super(props)
        this.state={ users:[]}
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((respond)=>{
            return respond.json();
        })
        .then((jsonData)=>{
            console.log(jsonData)
            this.setState({users: jsonData})
        })
    }
    render() {
        return (
            <div>
                {this.state.users.map((users) =>{ 
                    return(
                        <div>
                            <p><strong>Name :</strong>{users.name}</p>
                            <p><strong>Username :</strong>{users.username}</p>
                            <p><strong>Email :</strong>{users.email}</p>
                            <hr/>
                        </div>
                    )
                    
                })}
            </div>
        )
    }
}
