import React, { Component } from "react";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";

export default class Account extends Component {
  state = {
    selected: [1]
  };

  isSelected = index => {
    return this.state.selected.indexOf(index) !== -1;
  };

  handleRowSelection = selectedRows => {
    this.setState({
      selected: selectedRows
    });
  };

  render() {
    return (
      <Table>
        <TableBody>
          <TableRow>
            <TableRowColumn>Address</TableRowColumn>
            <TableRowColumn>
              0x2845947f36a9f0d8a411b832e8b818d250d048e9
            </TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Name</TableRowColumn>
            <TableRowColumn>Randall White</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Organization</TableRowColumn>
            <TableRowColumn>Homes for Humanity</TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
    );
  }
}
