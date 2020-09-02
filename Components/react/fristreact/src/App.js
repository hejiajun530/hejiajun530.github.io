import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var data = '123123';
  console.log(data);
  const list = [1, 2, 3, 4, 5, 6];
  const listItem = list.map((item) =>
    <li key={item.toString()}>
      {item}
    </li>
  );
  function handleClickAlert() {
    alert('test');
    console.log('test');
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={handleClickAlert}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="./index.js"
          rel="noopener noreferrer"
        >
          index{data}
        </a>
        <ul>
          {listItem}
        </ul>
      </header>
    </div>
  );
}

export default App;
