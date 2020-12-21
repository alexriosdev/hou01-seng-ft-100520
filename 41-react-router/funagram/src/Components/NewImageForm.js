import React, { Component } from 'react';
import { withRouter } from 'react-router'


class NewImageForm extends Component {
  state = {
    url: '',
  };

  componentDidMount(){
    console.log('Component mounted.')
  }

  componentWillUnmount(){
    console.log('Component will be unmounted.')
  }

  addPost = (img) => {
    const newpost = {
      likes: 0,
      img
    };

    fetch('http://localhost:3000/posts',{
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newpost)
    })
    .then(res => res.json())
    .then(post => {
      this.props.history.push('/shivang')
    })
  }

  render() {
    return (
      <div>
        URL:{' '}
        <input
          type="text"
          value={this.state.url}
          onChange={(e) => this.setState({ url: e.target.value })}
        />
        <button onClick={() => this.addPost(this.state.url)}>GO</button>
      </div>
    );
  }
}

export default withRouter(NewImageForm)
