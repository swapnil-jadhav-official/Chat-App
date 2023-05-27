import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Sidebar = ({ messages }) => {
return (
        <ListGroup>
            {messages.map((message) => (
                    
                    <Link to={`/chat/${message.id}`} key={message.id}>
                        <ListGroup.Item>{message.sender}</ListGroup.Item>
                    </Link>
                ))}
        </ListGroup>
    );
};

export default Sidebar;