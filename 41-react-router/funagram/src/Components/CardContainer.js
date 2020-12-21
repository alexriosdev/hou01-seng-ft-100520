import Card from './Card';
import React from 'react';

class CardContainer extends React.Component {

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


  render(){
    return (
      <div className="card-container">
        {
          this.state.posts.map(image => {
            return <Card key={image.id} image={image} removePost={this.removePost} />
          })
        }
      </div>
    )
  }
}

export default CardContainer;
