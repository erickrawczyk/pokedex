import React from 'react';

// components
import Pokemon from './Pokemon.jsx';

class PokemonList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      avatar : '',
      name: '',
      types: []
    };
  }


  render() {
    var pokemon = []
    for (var i = 1; i <= 10; i++) {
      pokemon.push(
        <div key={i} >
          <Pokemon pokeID={i}/>
          <br />
        </div>
      )
    }

    var divStyle = {
      maxWidth: '600px',
      margin: '0 auto'
    }
    return (
      <div style={divStyle}>
        {pokemon}
      </div>
    );
  }

}

export default PokemonList;
