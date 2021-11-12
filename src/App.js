import './App.css';

import NavBar from './NavBar';
import Header from './landing-only/Header';
import Archive from './landing-only/Archive';
import About from './landing-only/About';
import Gallery from './landing-only/Gallery';
import Comment from './landing-only/Comment';
import Footer from './landing-only/Footer';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Archive />
      <About />
      <Gallery />
      <Comment />
      <Footer />
      
    </div>
  );
}

export default App;
