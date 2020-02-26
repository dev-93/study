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
            <User user={users[0]} />
            <User user={users[1]} />
            <User user={users[2]} />
        </>
    );
}

export default UserList;