import React, { useEffect, useState } from "react";
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import InputOption from "./InputOption.js";
import Post from "./Post.js";
import { db } from "./firebase.js";
import firebase from 'firebase/compat/app';
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice.js";

function Feed() {

    const user = useSelector(selectUser);

    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").orderBy("timestamp", "desc")
        .onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            )))
        ))
    }, [])

    const sendPost = e => {
        e.preventDefault();
        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoURL || "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        setInput("");
    }

    return (
    <div className="feed">
        <div className="feed__inputContainer">
            <div className="feed__input">
                <CreateIcon />
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                    <button onClick={sendPost} type="submit">Send</button>
                </form>
            </div>
            <div className="feed__inputOptions">
                <InputOption Icon={ImageIcon} title='Photo' color='#70B5F9'/>
                <InputOption Icon={SubscriptionsIcon} title='Video' color='#E7A33E'/>
                <InputOption Icon={EventNoteIcon} title='Event' color='#C0CBCD'/>
                <InputOption Icon={CalendarViewDayIcon} title='Write acticle' color='#7FC15E'/>
            </div>
        </div>
        {posts.map(({id, data: {name, description, message, photoUrl}}) => (
            <Post 
                key={id}
                name={name}
                description={description}
                message={message}
                photoUrl={photoUrl}
            />
        ))}
    </div>)
}

export default Feed;
