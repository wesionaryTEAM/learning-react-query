import React,{useState} from 'react'
import {useQuery} from 'react-query';

const url=`http://swapi.dev/api/planets/?page=`;
const fetchUsers = async (key,page) =>{
    const response=await fetch(url+page);
    return response.json();  
   
}
const Users = () => {
    const [page,setPage]=useState(1);
    const {data,status}=useQuery(['users', page],fetchUsers);
    console.log(data)
    return (
        <div>
            <h1>Users</h1>
            <button onClick={()=>setPage(1)}>1</button>
            <button onClick={()=>setPage(2)}>2</button>
            <button onClick={()=>setPage(3)}>3</button>
        
            {
                status==='error'&&(
                    alert("Data Fetching Unsuccessful")
                )
            }
            {
                status==='success'&&(
                    <div>
                        {/* {data.results.map(user=><div>
                        <h2>{user.name}</h2>
                        <h4>{user.birth_year}</h4>
                        <p>{user.height}</p>
                        </div>)} */}
                    </div>
                )
            }
            
        </div>
    )
}
export default Users;