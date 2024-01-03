import logo from './logo.svg';
import './App.css';
import Header from './componemts/header/Header';
import Offers from './componemts/offers/Offers';
import Attributes from './componemts/attributes/Attributes';
import Posts from './componemts/posts/Posts';
import Travells from './componemts/travells/Travells';
import Comments from './componemts/comments/Comments';
import Footer from './componemts/footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Offers />
      <Attributes />
      <Posts />
      <Travells />
      <Comments />
      <Footer />
    </>
  );
}

export default App;
