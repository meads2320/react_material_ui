import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

class Message extends React.Component {  
    constructor(props) { 
        super(props);
    }

    render() { 
        return (
              <ListItem key={this.props.message}  
                leftAvatar={<Avatar src="http://www.material-ui.com/images/kerem-128.jpg" />}>
                {this.props.message}
                </ListItem>

                
        );
    }
}

export default Message;