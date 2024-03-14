import React, { useEffect } from "react";
import './App.css'
import Header from "./Header.js";
import Sidebar from "./Sidebar.js";
import Feed from "./Feed.js";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice.js";
import Login from "./Login.js";
import { auth } from "./firebase.js";
import Widgets from "./Widgets.js";

function App(){
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    
    useEffect(() => {
        auth.onAuthStateChanged(userAuth => {
            if (userAuth) {
                 dispatch(login({
                    email: userAuth.email,
                    uid: userAuth.uid,
                    displayName: userAuth.displayName,
                    photoUrl: userAuth.photoURL,
                 }))
            } else {
                dispatch(logout());
            }
        })
    }, [])

    return (
        <div className="app">
            <Header />

            {!user ? <Login /> : (
               <div className="app__body">
                <Sidebar />
                <Feed />
                <Widgets />
            </div> 
            )}
            

        </div>   
    );
}

export default App;