import React, { Component } from 'react'

class ItemManage extends Component {
  state = {
    value : ""
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  inputIsEmpty = () => {
    return this.state.value === '';
  };

  addItem = event => {
    event.preventDefault()
    this.props.addItem(this.state.value)
  };

  deleteLastItem = event => {
    this.props.deleteLastItem(this.props.items.slice(0, -1))
  };

  noItemsFound = () => {
    return this.props.items.length === 0;
  };

  render () {

    return (
      <div>
        <form onSubmit={this.addItem}>
          <input
            type="text"
            placeholder="Enter New Item"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button disabled={this.inputIsEmpty()}>Add</button>
        </form>

        <button onClick={this.deleteLastItem} disabled={this.noItemsFound()}>
          Delete Last Item
        </button>
      </div>
    )
  }
}

export default ItemManage 