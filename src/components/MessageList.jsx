import React from 'react';

class MessageList extends React.Component { 
    constructor(props) { 
        super(props);
         this.state = {
            messages: [
                'hi there',
                'hello',
                'how are you',
                'good',
                'cool'
            ]
        };
    }
    render() { 
        var messageNodes = this.state.messages.map((message, index) => {
            return (
            <div key={index}>{message}</div>
            );
        });

        return <div>{messageNodes}</div>

    }
}

export default MessageList;