import { useEffect, useState } from "react";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import Login from "./pages/login/Login";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignUp from "./pages/resister/SignUp";
import Landing from "./pages/landing/Landing";
import Home from "./pages/home/home/Home";

import { fetchTweets } from "./dataFetching/tweet";
import { fetchUsers } from "./dataFetching/user";

import { useRecoilState, useSetRecoilState } from "recoil";
import { tweetsAtom } from "./recoil/tweets";
import { userAtom } from "./recoil/users";

function App() {
  const setTweets = useSetRecoilState(tweetsAtom);
  const setUsers = useSetRecoilState(userAtom);
   
   useEffect(()=>{
    fetchTweets().then((tweets)=>{
      setTweets(tweets)
    })
    fetchUsers().then((users)=>{
      setUsers(users)
    })
   },[])
 
  return (
    <>
      {/* <Routes>
        <Route  path="/" element={<Landing/>}/>
        <Route  path="/login" element={<Login/>}/>
        <Route  path="/signup" element={<SignUp/>}/>
      </Routes> */}
      <Home />
    </>
  );
}

export default App;
