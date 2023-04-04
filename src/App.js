import Navbar from "./Components/Navbar/Navbar";
import "./App.css"
import {Action, Originals} from'./urls'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner />
      <RowPost url={Originals} title="Netflix Originals" />
      <RowPost url={Action} title="Action" isSmall />
    </div>
  );
}

export default App;
