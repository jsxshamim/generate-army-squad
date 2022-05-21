import "./App.css";
import Blog from "./Components/Blog/Blog";
import Header from "./Components/Header/Header";
import Players from "./Components/Players/Players";

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Players></Players>
            <Blog></Blog>
        </div>
    );
}

export default App;
