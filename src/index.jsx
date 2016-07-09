import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {render} from 'react-dom';

// components
import PokemonList from './PokemonList.jsx';

class App extends React.Component {
  render () {
    return (
      <MuiThemeProvider>
        <PokemonList />
      </MuiThemeProvider>
    );
  }
}

render(<App/>, document.getElementById('app'));
