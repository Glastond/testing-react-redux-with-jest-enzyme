import React from "react";

import Header from "./Components/header/index.jsx";
import Headline from "./Components/Headline";
import "./app.scss";

const tempArr = [
  {
    fName: "Glaston",
    lName: "D'souza",
    age: 22,
    loggedIn: true
  }
];

function App() {
  return (
    <div className="App">
      <Header />
      <hr />
      <section className="main">
        <Headline header="Posts" desc="Click the Button" tempArr={tempArr} />
      </section>
    </div>
  );
}

export default App;
