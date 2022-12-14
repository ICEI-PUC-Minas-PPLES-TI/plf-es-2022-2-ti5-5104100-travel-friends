import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { io } from "socket.io-client";
import Chat from './Chat';
import './styles.css';

const appSocket = io.connect("https://ti5-chat.herokuapp.com", {
  reconnectionDelay: 1000,
  reconnection: true,
  reconnectionAttemps: 10,
  transports: ['websocket'],
  agent: false,
  upgrade: false,
  rejectUnauthorized: false
});

const ChatReal = () => {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("support");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      appSocket.emit("support", room);
      setShowChat(true);
    }
  };

  return (
    <div>
      {!showChat ? (
        <div className="joinChatContainer">
          <h3>Suporte</h3>
          <Container className='mt-3'>
          
          <input
            className='mb-3'
            type="text"
            placeholder="Seu nome..."
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <Button variant='outline-secondary' onClick={joinRoom}>Solicitar ajuda</Button>
          </Container>
        </div>
      ) : (
        <Chat socket={appSocket} username={username} room={room} />
      )}
    </div>
  );
}

export default ChatReal;

