import React from "react";
import { BrowserRouter, withRouter } from "react-router-dom";

import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      web3: props.web3,
      accounts: props.accounts
    };
  }

  renderChildren = () => {
    return React.Children.map(this.props.children, child => {
      if (child.type === React.Child) {
        return React.cloneElement(child, {
          ...this.state,
          ...this.props
        });
      } else {
        return child;
      }
    });
  };

  render() {
    console.log("props", this.props);
    return this.renderChildren;
  }
}

export default withRouter(AppContainer);
