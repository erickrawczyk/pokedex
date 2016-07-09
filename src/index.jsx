import React from 'react';
import {render} from 'react-dom';
import Pokemon from './Pokemon.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <p> Hello React!</p>
        <Pokemon />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
