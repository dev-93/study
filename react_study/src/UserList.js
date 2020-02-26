import React from 'react';

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
            <div>
                <b>{users[0].username}</b> <span>({users[0].email})</span>
            </div>
            <div>
                <b>{users[1].username}</b> <span>({users[1].email})</span>
            </div>
            <div>
                <b>{users[2].username}</b> <span>({users[2].email})</span>
            </div>
        </>
    );
}

export default UserList;