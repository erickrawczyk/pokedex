import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {render} from 'react-dom';

// components
import Pokemon from './Pokemon.jsx';

class App extends React.Component {
  render () {
    return (
      <MuiThemeProvider>
        <Pokemon pokeID={27}/>
      </MuiThemeProvider>
    );
  }
}

render(<App/>, document.getElementById('app'));
