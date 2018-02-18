// @flow

import React from "react";
import {
  Table,
  Progress,
  Container,
  Button,
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
import TextInput from "../components/TextInput";
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

const AddProject = () => (
  <Container>
    <TextInput />
    <Button type="submit">Submit</Button>
  </Container>
);

export default AddProject;
