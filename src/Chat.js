import React, { useState, useEffect } from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import ChatWindow from './ChatWindow';
import chatData from './Data/chatData.json';
import MessageForm from './MessageForm';
//import SearchBox from './SearchBox';
//import './style.css'
const Chat = () => {
const [selectedChat, setSelectedChat] = useState(chatData[0]);
const [chatList, setChatList] = useState([]);
const [searchQuery, setSearchQuery] = useState('')


useEffect(() => {
    // console.log(chatData);
    console.log(searchQuery)
    if(searchQuery===''){
        console.log('inside loop',chatData)
        setChatList(chatData);
        return;
    }
    const filteredChat = chatData.filter((chat)=>chat.sender.toLowerCase().includes(searchQuery.toLowerCase()));
    setChatList(filteredChat)
}, [searchQuery]);

const handleChatSelection = (chat) => {
    // console.log('handlechat',chat);
    setSelectedChat(chat);
};

return (
    <Container style={{backgroundColor: 'grey', height : 680, width:700}}>
    <Row>
        <Col sm ={4}>
        
        <h3 style={{color: 'whitesmoke'}}>Chats</h3>

        <div>
            <form>
                <input style={{width: 205, borderRadius:5, marginBottom:10}} 
                onChange={(e)=>setSearchQuery(e.target.value)}
                type='text'
                value={searchQuery}
                placeholder='Search in chats...'
                />
            </form>
            
        </div>
               
                <ListGroup>
                    {chatList.map((chat) => (
                        
                    <ListGroup.Item
                       style={{height:60}}
                        key={chat.id}
                        active={selectedChat.id === chat.id}
                        onClick={() => handleChatSelection(chat)}
                    >
                        {chat.sender}
                        <p style={{fontSize:13, color:'grey'}}>{chat.lastmsg}</p>
                    </ListGroup.Item>
                    ))}
                </ListGroup>
        </Col>
        <div className='chat-window' style={{backgroundColor:'aquamarine', width : 400, borderRadius:10, marginTop:10}}>
            <ChatWindow chat={selectedChat} />
            <MessageForm  />
        </div>
    </Row>
</Container>
    );
};

export default Chat;
