import './App.css';

import NavBar from './NavBar';
import Header from './landing-only/Header';
import Archive from './landing-only/Archive';
import About from './landing-only/About';
import Gallery from './landing-only/Gallery';
import Comment from './landing-only/Comment';
import Footer from './landing-only/Footer';
import BlogHeader from './blog-only/BlogHeader';
import BlogArticle from './blog-only/BlogArticle';
import Sidebar from './blog-only/Sidebar';
import BlogFooter from './blog-only/BlogFooter';


function App() {
  return (
    <div className="App">
      {/* landing page */}
      <NavBar />
      <Header />
      <Archive />
      <About />
      <Gallery />
      <Comment />
      <Footer />

      {/* blog page */}
      <NavBar />
      <BlogHeader />
      <BlogArticle />
      <Sidebar />
      <BlogFooter />
    </div>
  );
}

export default App;
