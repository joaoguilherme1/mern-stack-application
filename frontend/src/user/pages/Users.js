import React from "react";

import UserList from "../components/UsersList";

const Users = () => {
    const USERS = [
        {
            id: '1',
            name: 'John',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uc3xlbnwwfHwwfHw%3D&w=1000&q=80',
            places: 3
        }
    ];

    return <UserList items={USERS} />;
};

export default Users;