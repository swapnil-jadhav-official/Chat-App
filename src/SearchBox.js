import React, { useState } from 'react';

function SearchBox({searchQuery}) {
    const [text, setText] = useState('')
    console.log(text)
    
    return (
        <div>
            <form>
                <input style={{width: 205, borderRadius:5, marginBottom:10}} 
                onChange={(e)=>setText(e.target.value)}
                type='text'
                value={searchQuery}
                placeholder='Search in chats...'
                />
            </form>
            
        </div>
    );
}

export default SearchBox;