import React, { useEffect, useState } from 'react';
import chatData from './Data/chatData.json'
function MessageForm(props) {
    const [message, setMessage] = useState('');
    // useEffect(()=>{
    //     const updatedData = {

    //     }


    // },[])
    
    return (
        <div style={{marginTop:300}}>
            <form action='' >
                <textarea 
                style={{borderRadius:5, marginRight:10, marginLeft:10}}
                cols={40}
                rows={2}
                value={message}
                onChange={(e)=>setMessage(e.target.value)}
                placeholder='Type your message....'
                
                />
                <button type='submit' style={{marginBottom:30, backgroundColor:'mediumaquamarine'}}>Send</button>
            </form>

            
        </div>
    );
}

export default MessageForm;