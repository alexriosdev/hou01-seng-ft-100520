import logo from './logo.svg';
import './App.css';

import Header from './Components/Header';
import CardContainer from './Components/CardContainer';

const images = [
  'https://images-na.ssl-images-amazon.com/images/I/51HSkTKlauL._SX346_BO1,204,203,200_.jpg',
  'https://images-na.ssl-images-amazon.com/images/I/51jNORv6nQL._SX340_BO1,204,203,200_.jpg',
  'https://i5.walmartimages.com/asr/6203b8f8-2b25-4210-8f86-74bd8f29cad4_1.7fb18bac579090c28ec66e3a28d1c801.jpeg?odnWidth=450&odnHeight=450&odnBg=ffffff'
]

const App = () => {

  return (
    <div className="App">
      <Header />
      <CardContainer posts={images} />
    </div>
  );
}

export default App;
