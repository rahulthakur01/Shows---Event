import { useState } from "react";
import Navbar from "./component/Navbar";
import "./App.css";
import dummyData from "./data.js";
import Cards from "./component/Cards";
function App() {
  const [shows, setShows] = useState(dummyData);
  console.log(shows);
  return (
    <>
      <div>
        <Navbar />
        <div>
          <Cards shows={shows} />
        </div>
      </div>
    </>
  );
}

export default App;
