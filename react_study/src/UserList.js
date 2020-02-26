import React from 'react';

function User({ user }){
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    );
}

function UserList(){
    const users = [
        {
            id:1,
            username:"taenam",
            email:'public@y.com'
        },{
            id:2,
            username:"jihun",
            email:'test@y.com'
        },{
            id:3,
            username:"cheolho",
            email:'liyer@y.com'
        }
    ];

    return(
        <>
            {users.map((user, index) => (
                <User user={user} key={index}/>
            ))}
        </>
    );
}

export default UserList;