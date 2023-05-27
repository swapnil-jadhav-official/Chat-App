import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const ChatWindow = ({ chat }) => {
    
return (

    <Container fluid>
        <Row>
            <Col>
            <h3>{chat.sender}</h3>
            {chat.status===true? <p style={{color:'green'}}>Online</p>:<p style={{color:'red'}}>Offline</p>}
           
            </Col>
            
        </Row>
        <Row>
            <Col>
                <div className='chat-window'>
                {chat.message.map((message) => (
                    
                    <div  style={{background:'blueviolet', borderRadius:10, marginTop:10, marginBottom:10}} key ={message.id} className={`message ${message.sender === chat.sender ? 'sent' : 'received'}`}>
                    <span className="sender">{message.sender}</span>
                    : <br></br>
                    <span className="text">{message.text}</span>
                    <br></br>
                    <span className="text">{message.timestamp}</span>
                    </div>
                    ))}

                </div>
            </Col>
        </Row>
        
</Container>

);
};

export default ChatWindow;