import React from 'react';
import Message from './Message.jsx';
import {List, ListItem} from 'material-ui/List';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class MessageBox extends React.Component { 
    constructor(props) { 
        super(props);
    }
    render() { 
      
        return (
             <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <Card style={
                    {
                        maxWidth: '1200',
                        width: '100%',
                        marign: '30px auto',
                        padding:'30px'
                    }
                }>
                    <textarea style={
                    {
                        borderColor: '#D0D0D0',
                        width: '100%',
                        resize: 'none',
                        borderRadius:3,
                        minHeight: 50,
                        color: '#555', 
                        fontSize: 14, 
                        outline: 'auto 0px'
                    }
                    }/>
                </Card>
            </MuiThemeProvider>

               
        );

    }
}

export default MessageBox;