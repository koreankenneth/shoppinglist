import React from 'react';
import logo from './logo.svg';
import './App.css';
import ItemManage from './ItemManage';
import ItemDisplay from './ItemDisplay';

class App extends React.Component {
  state = {
    items: []
  };

  addItem = value => {
    this.setState(oldState => ({
      items: [...oldState.items, value],
    }));
  };

  deleteLastItem = deletedItems => {
    this.setState(prevState => ({ items: deletedItems }))
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
        <ItemManage 
          addItem = {this.addItem}
          items = {this.state.items}
          deleteLastItem = {this.deleteLastItem}
        />
        <ItemDisplay items = {this.state.items} />
      </div>
    );
  }
}

export default App;
