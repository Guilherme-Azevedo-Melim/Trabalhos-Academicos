import styled from 'styled-components';
import React, { useState } from 'react';
import './App.css';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  height: 90vh;
  width: 50%;

  border: 1px solid black;
  margin: 0 auto;
`

const Message = styled.p`
  margin: 5px;
`

const SendMessage = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;

  margin: 10px auto;

  width: 50%;
`

const SROnly = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  border: 0;
`

function App() {
  const [chat, setChat] = useState([]);
  const [InputNameUser, setInputNameUser] = useState("");
  const [InputMessage, setInputMessage] = useState("");

  const clear = () => {
    setInputNameUser('');
    setInputMessage('');
  }

  const sendMessage = () => {
    const newMessage = {
      nameUser: InputNameUser,
      messageUser: InputMessage
    };

    const fullChat = [...chat, newMessage];

    setChat(fullChat);
    clear();
  };

  return (
    <div className="App">
      <Box>
        {chat.map((byUser) => {
          return (
            <Message>
              <strong>{byUser.nameUser}:</strong> {byUser.messageUser}
            </Message>
          )
        })}
      </Box>

      <SendMessage>
        <SROnly>
          Quem está escrevendo a mensagem?
        </SROnly>
        <input
          value={InputNameUser}
          onChange={(e) => {
            setInputNameUser(e.target.value);
          }}
          placeholder="Insira seu nome"
        />
        <SROnly>
          Escreva a sua mensagem
        </SROnly>
        <input
          value={InputMessage}
          onChange={(e) => {
            setInputMessage(e.target.value);
          }}
          placeholder="Escreva sua mensagem"
        />
        <button
          onClick={sendMessage}
        >
          Enviar mensagem
        </button>
      </SendMessage>
    </div>
  );
}

export default App;
