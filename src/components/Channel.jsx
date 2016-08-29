import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {List, ListItem} from 'material-ui/List';

class Channel extends React.Component {  
    constructor(props) { 
        super(props);
    }

    render() { 
        return (
              <ListItem key={this.props.channel} >
                {this.props.channel}
                </ListItem>

                
        );
    }
}

export default Channel;