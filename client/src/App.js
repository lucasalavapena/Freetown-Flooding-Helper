import React from "react";
import logo from "./logo.svg";
import "./App.css";

import * as ReactDOM from 'react-dom';
import { Map } from '@esri/react-arcgis';

function App() {
  const [data, setData] = React.useState(null);

  return (
      <div className="App">
        <header className="App-header">
            <Map />,
            document.getElementById('container')
        </header>
      </div>
  );
}


export default App;
