import React from 'react';
import ReactDOM from 'react-dom';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import MessageList from './MessageList.jsx';
import ChannelList from './ChannelList.jsx';
import MessageBox from './MessageBox.jsx';

class App extends React.Component {
  render() {
    return (
        <div>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <AppBar title="My Chat App" />
        </MuiThemeProvider>
            <div style={
                    {
                        display: 'flex',
                        flexFlow: 'row wrap',
                        maxWidth: '1200px',
                        width: '100%',
                        marign: '30px auto 30px',
                        padding:'30px'
                    }
                }>
                  <ChannelList/>
                  <MessageList/>
                  
            </div>
            <MessageBox/>
       </div>
    );
  }
}

export default App;