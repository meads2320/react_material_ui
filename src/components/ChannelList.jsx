import React from 'react';
import Channel from './Channel.jsx';
import {List, ListItem} from 'material-ui/List';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class ChannelList extends React.Component { 
    constructor(props) { 
        super(props);
         this.state = {
            channels: [
                'Channel 1',
                'Channel 2'
            ]
        };
    }
    render() { 
        var channelNodes = this.state.channels.map((channel, index) => {
            return (
              <Channel channel={channel} />
            );
        });

        return (
             <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <Card style={
                    {
                        flexGrow: 1
                    }
                }>
                    <List>
                    {channelNodes}
                    </List> 
                </Card>
            </MuiThemeProvider>

               
        );

    }
}

export default ChannelList;