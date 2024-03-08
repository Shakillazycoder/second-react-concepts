import { useEffect, useState } from "react"
import User from "./User";

export default function Users (){
    const [Users, setUsers] = useState([]);
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
       .then(res => res.json())
       .then(data => setUsers(data))
    }, []);
    return (
        <div style={{
            border: '2px solid tomato',
            margin: '20px',
            padding: '20px',
            borderRadius: '20px'
        }}>
            <h1>User: {Users.length}</h1>
            {
                Users.map(user => <User user={user}></User>)
            }
        </div> 
    )
}