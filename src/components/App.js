// @flow

import React from "react";
import ReactDOM from "react-dom";
import { AragonApp } from "@aragon/ui";
import "bootstrap/dist/css/bootstrap.css";
import { darkBlack } from "material-ui/styles/colors";
import { Container } from "reactstrap";

import spacing from "material-ui/styles/spacing";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import * as serviceWorker from "../serviceWorker";
import Voting from "../helpers/Voting";
import Web3 from "web3";
import Promise from "bluebird";
import getWeb3 from "../helpers/getWeb3";
import "./App.css";
import Web3Client from "../helpers/Web3Client";
import fetchContracts from "../helpers/fetchContracts";
import ElectionRegistry from "../helpers/ElectionRegistry";

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: "rgb(0, 40, 104)",
    canvasColor: darkBlack,
    textColor: darkBlack
  },
  appBar: {
    height: 50
  }
});
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accounts: []
    };
  }

  async componentDidMount() {
    if (typeof window.web3 !== 'undefined') {
      console.log(typeof web3 )
      console.log('injected web3 detected')
      // console.log(web3.currentProvider)
      const web3 = new Web3(window.web3.currentProvider)
      const accounts = await Promise.promisify(web3.eth.getAccounts)()
      console.log(accounts)
      this.setState({ accounts })
    }
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <AragonApp publicUrl="/">
          hihihi{" "}
          {this.state.accounts ? this.state.accounts[0] : "not rendering"}
        </AragonApp>
      </MuiThemeProvider>
    );
  }
}
export default App;
