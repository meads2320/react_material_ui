import React from 'react';
import Message from './Message.jsx';
import {List, ListItem} from 'material-ui/List';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

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
              <Message message={message} />
            );
        });

        return (
             <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <Card style={
                    {
                        flexGrow: 2,
                        marginLeft:30
                    }
                }>
                    <List>
                    {messageNodes}
                    </List> 
                </Card>
            </MuiThemeProvider>

               
        );

    }
}

export default MessageList;