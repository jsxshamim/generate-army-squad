import "./App.css";
import Blog from "./Components/Blog/Blog";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Players from "./Components/Players/Players";

function App() {
    return (
        <div id="App" className="App">
            <Header></Header>
            <Players></Players>
            <Blog></Blog>
            <Footer></Footer>
        </div>
    );
}

export default App;
