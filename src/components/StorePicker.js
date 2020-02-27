import React from "react";
import PropTypes from "prop-types";
import { getFunName } from "../helpers";

export default class StorePicker extends React.Component {
  static propTypes = {
    history: PropTypes.object
  };

  storeNameInput = React.createRef();

  // Use this syntax to avoid having to bind function
  goToStore = event => {
    // 1. Stop the form from submitting
    event.preventDefault();
    // 2. get the text from the input
    const storeName = this.storeNameInput.current.value;
    // 3. Change the page to /store/whatever-they-entered
    this.props.history.push(`/store/${storeName}`);
  };
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          ref={this.storeNameInput}
          required
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}
