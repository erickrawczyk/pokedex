import React from 'react';
import {Card, CardHeader} from 'material-ui/Card';
import {request} from './http';

class Pokemon extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      avatar : '',
      name: '',
      types: []
    };
  }

  componentDidMount() {
    this.serverRequest = request(`http://pokeapi.co/api/v2/pokemon/1`, function (result) {
      this.setState({
        avatar: result.sprites.front_default,
        name: result.name,
        types: result.types.map((t) => t.type.name)
      });
    }.bind(this));
  }

  render() {
    return (
      <Card>
        <CardHeader
          title={this.state.name}
          subtitle={this.state.types.join(' | ')}
          avatar={this.state.avatar}
        />
      </Card>
    );
  }

}

export default Pokemon;
