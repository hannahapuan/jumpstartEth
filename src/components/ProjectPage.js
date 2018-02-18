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
import { Button } from "reactstrap";
import LinearProgress from "material-ui/LinearProgress";
import FlatButton from "material-ui/FlatButton";
import { FeaturedProjectData } from "../utils/projects";

const style = {
  height: "100%"
};
const imgStyle = {
  width: "50%",
  height: "50%"
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
const h1 = {
  fontFamily: "Fredoka One, cursive",
  fontSize: "48px",
  fontStyle: "bold"
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
const contribute = {
  float: "right"
};

//TODO: make this clickable with this.props.source
const ProjectPage = () => (
  <Container>
    <br />
    <img
      style={imgStyle}
      src={FeaturedProjectData.url}
      className="pic"
      alt="pic of dump"
    />
    <h1 className="App-content" style={h1}>
      {FeaturedProjectData.title}
    </h1>
    <h3 style={h2}>{FeaturedProjectData.director}</h3>
    <LinearProgress
      mode="determinate"
      value={
        FeaturedProjectData.amountContributed /
        FeaturedProjectData.amountGoal *
        100
      }
    />
    {FeaturedProjectData.amountContributed} ETH/{FeaturedProjectData.amountGoal}{" "}
    ETH
    <br />
    <br />
    <div className="text">
      <p>{FeaturedProjectData.description}</p>
      <Button style={contribute} className="button" color="danger">
        Contribute
      </Button>
      <br />
      <br />
      <br />
      <p className="stuff">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id tortor
        finibus arcu finibus imperdiet a sit amet urna. Quisque laoreet
        fringilla magna, in euismod tellus sodales non. Integer ut velit
        posuere, tincidunt neque a, sodales eros. Donec cursus dolor quam, ut
        ornare libero lobortis sed. Proin iaculis luctus purus non pulvinar. Sed
        bibendum, erat a euismod suscipit, velit leo condimentum ante, et
        fermentum lectus libero eu magna.
        <br />
        <br />Mauris sit amet risus ex. Integer et tincidunt turpis, eu varius
        dui. Sed id elit dignissim, rhoncus orci et, porttitor massa. Etiam
        scelerisque pharetra odio eu tincidunt. Mauris eros purus, sagittis vel
        erat a, ultricies pretium mi. Ut fringilla enim nec euismod dapibus.
        Curabitur sed rhoncus risus. Vivamus condimentum fermentum arcu, in
        molestie orci imperdiet in. Sed quis leo ac turpis sodales tincidunt.
        Etiam pharetra turpis sollicitudin sem aliquam euismod. In a orci vitae
        lacus sodales blandit tempor a tortor. Praesent elementum mauris sit
        amet mi maximus consequat. Phasellus tincidunt volutpat lectus a
        condimentum. Sed pharetra turpis sed mi dictum, vel pharetra augue
        sagittis. Pellentesque porttitor euismod magna id scelerisque. Cras ex
        neque, suscipit ac sagittis at, mattis at magna. Nunc mattis, dolor sed
        lacinia consequat, ligula eros semper nulla, vel placerat quam elit ut
        tellus. Vivamus nec enim eget purus porttitor feugiat eu quis neque. Ut
        enim ante, ornare a nunc in, aliquet maximus mauris.
      </p>
    </div>
  </Container>
);

export default ProjectPage;
