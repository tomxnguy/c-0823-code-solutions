import './App.css';
import Carousel from './Carousel';

function App() {
  const images = [
    '/images/001.png',
    '/images/004.png',
    '/images/007.png',
    '/images/025.png',
    '/images/039.png',
  ];
  return (
    <>
      <Carousel images={images} />
    </>
  );
}

export default App;
