import React from "react";
import "./App.css";
import Nav from "./component/Nav/Nav";
import routes from './routes'

function App() {
  return (
    <div className="App">
      <Nav />
      {routes}
    </div>
  );
}

export default App;
