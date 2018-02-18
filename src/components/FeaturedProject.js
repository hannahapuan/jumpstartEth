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
import LinearProgress from "material-ui/LinearProgress";
import FlatButton from "material-ui/FlatButton";
import { FeaturedProjectData } from "../utils/projects";

const style = {
  height: "100%"
};
const imgStyle = {
  width: "100%",
  height: "100%"
};
const progressStyle = {
  top: "-50px",
  float: "right",
  width: "15em"
};
const button = {
  fontSize: "25px",
  top: "-30px",
  right: "-14px",
  float: "right"
};

//TODO: make this clickable with this.props.source
const FeaturedProject = () => (
  <Card style={style}>
    <img
      style={imgStyle}
      src={FeaturedProjectData.url}
      alt={FeaturedProjectData.title}
    />
    <CardTitle
      title={FeaturedProjectData.title}
      subtitle={FeaturedProjectData.director}
    />
    <CardText>
      <LinearProgress
        style={progressStyle}
        mode="determinate"
        value={
          FeaturedProjectData.amountContributed /
          FeaturedProjectData.amountGoal *
          100
        }
      />

      {FeaturedProjectData.description}
    </CardText>
    <CardActions>
      <FlatButton
        onClick={() => {
          this.props.history.push("/project");
        }}
        style={button}
      >
        {" "}
        >
      </FlatButton>
    </CardActions>
    />
  </Card>
);

export default FeaturedProject;
