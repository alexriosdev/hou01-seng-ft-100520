import React, { Component } from 'react';

export default class NewImageForm extends Component {
  state = {
    url: '',
  };

  render() {
    return (
      <div>
        URL:{' '}
        <input
          type="text"
          value={this.state.url}
          onChange={(e) => this.setState({ url: e.target.value })}
        />
        <button onClick={() => this.props.addPost(this.state.url)}>GO</button>
      </div>
    );
  }
}
