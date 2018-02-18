// @flow

import React from "react";
import { Container } from "reactstrap";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import { FeaturedProjectData } from "../utils/projects";

const style = {
  height: "100%"
};
const imgStyle = {
  width: "100%",
  height: "100%"
};
//TODO: make this clickable with this.props.source
const FeaturedProject = () => (
  <Card style={style}>
    <img
      style={imgStyle}
      src={FeaturedProjectData.url}
      alt={FeaturedProjectData.description}
    />
    <CardTitle
      title={FeaturedProjectData.title}
      subtitle={FeaturedProjectData.description}
    />
  </Card>
);

export default FeaturedProject;
