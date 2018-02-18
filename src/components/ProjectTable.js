// @flow

import React from "react";
import {
  Table,
  Button,
  Progress,
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";
import FlatButton from "material-ui/FlatButton";
import { GridList, GridTile } from "material-ui/GridList";
import IconButton from "material-ui/IconButton";
import Subheader from "material-ui/Subheader";
import StarBorder from "material-ui/svg-icons/toggle/star-border";
import { ProjectData } from "../utils/projects";
import FeaturedProject from "../components/FeaturedProject.js";
import LinearProgress from "material-ui/LinearProgress";
// const styles = {
//   root: {
//     display: "flex",
//     flexWrap: "wrap",
//     justifyContent: "space-around"
//   },
//   gridList: {
//     width: 500,
//     height: 450,
//     overflowY: "auto"
//   }
// };
const style = {
  height: "100%"
};
const style1 = {
  width: "50em"
};
const imgStyle = {
  width: "50%",
  height: "50%"
};
const h1 = {
  fontFamily: "Fredoka One, cursive",
  fontSize: "48px",
  fontStyle: "bold",
  textAlign: "center"
};
const h2 = {
  fontFamily: "Fredoka One, cursive",
  fontSize: "32px",
  fontStyle: "bold"
};

const header = {
  fontFamily: "Fredoka One, cursive",
  fontStyle: "bold"
};

const ProjectRow = ({ title, description, source, url, progress, goal }) => (
  <tr style={style}>
    <td>
      <img src={url} />
    </td>
    <td>
      <b>{title}</b>
      <br />
      <LinearProgress mode="determinate" value={progress / goal * 100} />
      {description}
    </td>
  </tr>
);

const ProjectTable = () => (
  <Container>
    <br />
    <h1 style={h1}>Jumpstart</h1>
    <br />
    <br />
    <h1 style={h2}>Create Project</h1>
    <Table>
      <tbody>
        <tr>
          <td style={style1}>
            <FeaturedProject />
          </td>
          <td>
            <Form>
              <FormGroup>
                <Label for="Title">Title</Label>
                <Input type="text" name="title" id="title" />
              </FormGroup>
              <FormGroup>
                <Label for="director"> Director</Label>
                <Input
                  type="text"
                  name="director"
                  id="director"
                  placeholder="Organization"
                />
              </FormGroup>
              <FormGroup>
                <Label for="description">Description</Label>
                <Input type="text" name="description" id="description" />
              </FormGroup>
              <FormGroup>
                <Label for="url">Image URL</Label>
                <Input type="text" name="url" id="url" />
              </FormGroup>
              <FormGroup>
                <Label for="goal">Goal (ETH)</Label>
                <Input type="number" name="goal" id="goal" placeholder="40.0" />
              </FormGroup>
            </Form>
          </td>
        </tr>
      </tbody>
    </Table>
  </Container>
);

export default ProjectTable;
