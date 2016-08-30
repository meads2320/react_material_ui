import React from 'react';
import Message from './Message.jsx';
import {List, ListItem} from 'material-ui/List';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import firebase from 'firebase';
import _ from 'lodash';

class MessageList extends React.Component { 
    constructor(props) { 
        super(props);
         this.state = {
            messages: []
        };


        this.firebaseRef = firebase.initializeApp({ 
            databaseURL: 'https://react-stack-69b29.firebaseio.com',
            storageBucket: 'messages'
         });
        
        //new Firebase('https://react-stack-69b29.firebaseio.com/messages');
        this.firebaseRef.once('value', (dataSnapshot) => { 
            var messages = dataSnapshot.val();
            this.setState({ messages : messages});
        });
    }
    render() { 
        var messageNodes = this.state.messages.map((message, index) => {
            return (
              <Message message={message.message} />
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