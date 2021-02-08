import React from 'react'
import {useQuery} from 'react-query';

const fetchUsers = async () =>{
    const response=await fetch('http://jsonplaceholder.typicode.com/users/');
    return response.json();
    
}
const Users =()=> {
    const {data,status}=useQuery('users',fetchUsers);
    console.log(data);
    return (
        <div>
            <h1>Users</h1>
            {
                status==='error'&&(
                    alert("Data Fetching Unsuccessful")
                )
            }
            {
                status==='success'&&(
                    <div>
                        {data.map(user=><div><h2>{user.name}</h2>
                        <h4>{user.username}</h4>
                        <p>{user.email}</p>
                        <p>{user.address.city}</p>
                        </div>)}
                    </div>
                )
            }
            
        </div>
    )
}
export default Users;