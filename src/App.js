import Categories from './Components/Categories';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import Products from './Components/Products';
import Tabs from './Components/Tabs';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Products />
      <hr />
      <Categories />
      <hr />
      <Tabs />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
