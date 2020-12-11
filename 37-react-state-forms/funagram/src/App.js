import React from 'react';

import Header from './Components/Header';
import CardContainer from './Components/CardContainer';
import NewImageForm from './Components/NewImageForm';

const images = [
  {
    id: 1,
    img:
      'https://www.hillspet.com/content/dam/cp-sites/hills/hills-pet/en_us/exported/dog-care/new-pet-parent/images/golden-retriever-puppy-running-outside.jpg',
    likes: 110,
  },
  {
    id: 2,
    img:
      'https://www.fox26medford.com/wp-content/uploads/2020/04/AprilShoe-720x399-1.jpg',
    likes: 44,
  },
  {
    id: 3,
    img:
      'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12231413/Labrador-Retriever-MP.jpg',
    likes: 39,
  },
];

class App extends React.Component {
  state = {
    posts: images,
  }

  addPost = (img) => {
    const newpost = {
      id: Math.random(),
      likes: 0,
      img,
    };

    this.setState({
      posts: [...this.state.posts, newpost],
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <NewImageForm addPost={this.addPost} />
        <CardContainer images={this.state.posts} />
      </div>
    );
  }
}

export default App;
