import React from "react";
import TextField from "material-ui/TextField";

export default class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      director: ""
    };
  }

  handleChange = (event, type) => {
    switch (type) {
      case "title":
        this.setState({
          title: event.target.title
        });
        break;
      case "director":
        this.setState({
          textField: event.target.directory
        });
    }
  };

  render() {
    return (
      <div>
        Title:
        <TextField
          id="text-field-controlled"
          value={this.state.title}
          onChange={event => {
            this.handleChange(event, "title");
          }}
        />
        Director:
        <TextField
          id="text-field-controlled"
          value={this.state.director}
          onChange={event => {
            this.handleChange(event, "director");
          }}
        />
      </div>
    );
  }
}
