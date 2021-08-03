import React,{useEffect} from 'react';
import './App.css';
import Sidebar from "./Sidebar"
import Chat from './Chat'
import Pusher from "pusher.js"
import axios from './axios';
import { response } from 'express';
import { message } from 'statuses';

function App() {
  useEffect(() => {
  axios.get('/messages/sync')
  .then(response=>{
    console.log(response.data);
    setMessages(response.data);
  })
},[]);

  useEffect(()=>{
    const pusher = new Pusher('a8843da28186118dd425', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('my-channel');
    channel.bind('inserted', (newMessages)=> {
      alert(JSON.stringify(data));
      setMessages([...messages],data)
    });
  },[messages]);

  return (
    <div className="app">
      <div className="app__body"> 
       <Sidebar/>
       <Chat/>
       </div>
    </div>
  );
}

export default App;
