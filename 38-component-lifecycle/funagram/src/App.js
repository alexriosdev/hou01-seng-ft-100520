import React from 'react';

import Header from './Components/Header';
import CardContainer from './Components/CardContainer';
import NewImageForm from './Components/NewImageForm';


class App extends React.Component {

  state = {
    posts: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/posts')
    .then(res => res.json())
    .then(posts => this.setState({ posts }))
  }

  removePost = (id) => {
    fetch(`http://localhost:3000/posts/${id}`,{
      method: "DELETE"
    }).then(res => res.json())

    const updatedPosts = [...this.state.posts].filter(post => post.id !== id)
    this.setState({
      posts: updatedPosts
    })
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
      this.setState({
        posts: [...this.state.posts, post],
      });
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <NewImageForm addPost={this.addPost} />
        <CardContainer images={this.state.posts} removePost={this.removePost} />
      </div>
    );
  }
}

export default App;
