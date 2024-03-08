// export default function User ({user}){
//     return (
//         <div>
//             <h3>Name: {user.name}</h3>
//             <p>Email: {user.email}</p>
//         </div>
//     )

// }
export default function User ({user}){
    const {name, email} = user;
    return (
        <div style={{
            border: '2px solid tomato',
            margin: '20px',
            padding: '20px',
            borderRadius: '20px'
        }}>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
        </div>
    )

}