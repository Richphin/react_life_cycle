import axios from 'axios';
import React, { useEffect, useState } from 'react'


function UserFunction() {
    const [Users, setUsers] = useState([]);

    useEffect(()=> {
        axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((respond)=>{
            setUsers(respond.data)
        })
    },[])
    return (
        <div>
            {Users.map((users) =>{ 
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

export default UserFunction
