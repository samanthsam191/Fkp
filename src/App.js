import Carousel from "./Components/Carousel";
import Categories from "./Components/Categories";
import Footer from "./Components/Footer";
import Gallery from "./Components/Gallery";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import Tabs from "./Components/Tabs";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Tabs />
      <hr />
      <div className="mx-auto mt-16 max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          FOCUS
        </h2>
        <p className="mt-4 text-gray-500 p-1">
          Transforming the world around us into a work of art, one frame at a
          time, that's the magic of photography
        </p>
      </div>
      <Carousel />
      <Gallery />
      <hr />
      <Categories />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
