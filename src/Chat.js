import { Avatar,IconButton } from '@material-ui/core'
import { AttachFile, SearchOutlined } from '@material-ui/icons';
import MoreVert from '@material-ui/icons/MoreVert';
import React from 'react'
import InsertEmotionIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import "./Chat.css"
 function Chat() {
    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar />
                <div className="chat__headerInfo">
                    <h3> Room Name</h3>
                    <p>Lass seen at ..</p>
                </div>
                <div className="chat__headerRight">
                <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
              <AttachFile />
          </IconButton>
          <IconButton>
              <MoreVert />
          </IconButton>
                </div>
            </div>

            <div className="chat__body">
              <p className='chat__message'> 
            <span className="chat__name">Raihan</span>
                   this is a meessage
                   <span className="chat__timestamp">
                       {new Date().toUTCString()}
                   </span>
                   </p>

                   
              <p className='chat__message'> 
            <span className="chat__name">Raihan</span>
                   this is a meessage
                   <span className="chat__timestamp">
                       {new Date().toUTCString()}
                   </span>
                   </p>

                   
              <p className='chat__message'> 
            <span className="chat__name">Raihan</span>
                   this is a meessage
                   <span className="chat__timestamp">
                       {new Date().toUTCString()}
                   </span>
                   </p>
            </div>

             <div className='chat__footer'>
                 <InsertEmotionIcon />
                 <from>
                     <input placeholder="Type a message" type="text" />
                     <button type="submit"> send a message</button>
                 </from>
                 <MicIcon />
             </div>
        </div>
    )
}
export default Chat;