import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import FriendForm from './FriendForm';
import '../index.css';

const Friends = (props) => {
    const [friends, setFriends] = useState([]);

    const getFriends = () => {
        axiosWithAuth()
            .get('/friends')
            .then(res => {
                setFriends(res.data);
            })
            .catch(err => console.log(err.response));
    }

    useEffect(() => {
        getFriends();
    }, [])

    const addFriend = friend => {
        axiosWithAuth()
            .post('/friends', friend)
            .then(res => {
                setFriends(res.data);
            })
            .catch(err => console.log(err.response));
    }

    return (
        <div>
            <h1>Add a New Friend</h1>
            <FriendForm addFriend={addFriend}/>
            <h2>Friends</h2>
            <div className="friends-grid">
            {friends.map(friend => 
                <div className="friend-card" key={friend.id}>
                    <h3>{friend.name}</h3>
                    <h4>Email: {friend.email}</h4>
                    <h5>Age: {friend.age}</h5>
                </div>
            )}
            </div>
        </div>
    )
}

export default Friends;