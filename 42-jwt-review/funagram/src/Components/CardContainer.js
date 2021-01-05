import Card from './Card';
import React from 'react';

class CardContainer extends React.Component {

  state = {
    posts: [],
    errors: []
  }


  componentDidMount() {
    fetch('http://localhost:3000/posts')
    .then(res => res.json())
    .then(posts => this.setState({ posts }))
  }

  removePost = (id) => {
    fetch(`http://localhost:3000/posts/${id}`,{
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'auth-key': localStorage.getItem('token')
      }
    }).then(res => res.json())
    .then(msg => {
      alert(msg.msg)

      const updatedPosts = [...this.state.posts].filter(post => post.id !== id)
      this.setState({
        posts: updatedPosts
      })
    })


  }


  renderErrorsOrNot = () => {
    if(this.state.errors.length > 1) {

    }
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
