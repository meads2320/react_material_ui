import React from 'react';
import App from './components/App.jsx';
import {render} from 'react-dom';

require('./main.scss');

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

render(<App/>, document.getElementById('container'));
