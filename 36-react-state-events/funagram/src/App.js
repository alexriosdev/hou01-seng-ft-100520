import React from 'react';

import Header from './Components/Header';
import CardContainer from './Components/CardContainer';

const images = [
  {
    id: 1,
    img: 'https://www.hillspet.com/content/dam/cp-sites/hills/hills-pet/en_us/exported/dog-care/new-pet-parent/images/golden-retriever-puppy-running-outside.jpg',
    likes: 110
  },
  {
    id: 2,
    img: 'https://www.fox26medford.com/wp-content/uploads/2020/04/AprilShoe-720x399-1.jpg',
    likes: 44
  },
  {
    id: 3,
    img: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12231413/Labrador-Retriever-MP.jpg',
    likes: 39
  }
]

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      posts: images
    }
  }

  render(){
    return (
      <div className="App">
        <Header />
        <CardContainer images={this.state.posts} />
      </div>
    );
  }
}

export default App;
