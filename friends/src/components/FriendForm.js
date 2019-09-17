import React, { useState } from 'react';
import '../index.css';

const FriendForm = ({ addFriend }) => {
    const [friend, setFriend] = useState({name: "", email: "", age: ""});
    
    const handleChange = e => {
        setFriend({
            ...friend,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        addFriend(friend);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="name"
                className="input"
                placeholder="Name"
                value={friend.name}
                onChange={handleChange}
            />
            <input 
                type="text"
                name="email"
                className="input"
                placeholder="Email"
                value={friend.email}
                onChange={handleChange}
            />
            <input
                type="text"
                name="age"
                className="input"
                placeholder="Age"
                value={friend.age}
                onChange={handleChange}
            />
            <button className="input button">Add Friend</button>
        </form>
    )

}

    export default FriendForm;