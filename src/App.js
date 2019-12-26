import React from "react";

import Header from "./Components/header/index.jsx";
import Headline from "./Components/Headline";
import "./app.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <hr />
      <section className="main">
        <Headline header="Post" desc="Click the Button" />
      </section>
    </div>
  );
}

export default App;
