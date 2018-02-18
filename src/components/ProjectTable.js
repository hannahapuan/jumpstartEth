// @flow

import React from "react";
import { Table, Button, Progress, Container } from "reactstrap";
import FlatButton from "material-ui/FlatButton";
import { GridList, GridTile } from "material-ui/GridList";
import IconButton from "material-ui/IconButton";
import Subheader from "material-ui/Subheader";
import StarBorder from "material-ui/svg-icons/toggle/star-border";
import { ProjectData } from "../utils/projects";
import FeaturedProject from "../components/FeaturedProject.js";
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

const ProjectRow = ({ title, description, source, url }) => (
  <tr style={style}>
    <td>
      <img src={url} />
    </td>
    <td>
      <b>{title}</b>
      <br />
      {description}
    </td>
  </tr>
);

// type votingTableProps = {
//   candidateList: Array<string>,
//   votes: { [name: string]: number },
//   voteHandler: (name: string) => () => any,
//   votePending: boolean,
// };

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const ProjectTable = () => (
  // <div style={styles.root}>
  //   <GridList cellHeight={180} style={styles.gridList}>
  //     <Subheader>December</Subheader>
  //     {ProjectData.map(tile => (
  //       <GridTile
  //         key={tile.url}
  //         title={tile.title}
  //         actionIcon={
  //           <IconButton>
  //             <StarBorder color="white" />
  //           </IconButton>
  //         }
  //       >
  //         <img src={tile.url} />
  //       </GridTile>
  //     ))}
  //   </GridList>
  // </div>
  <Container>
    <br />
    <h1 style={h1}>Jumpstart</h1>
    <br />
    <br />
    <h1 style={h2}>Featured Projects</h1>
    <Table>
      <tbody>
        <tr>
          <td style={style1}>
            <FeaturedProject />
          </td>
          <td>
            {ProjectData.map(project => (
              <ProjectRow
                url={project.url}
                title={project.title}
                description={project.description}
                source={project.source}
              />
            ))}
          </td>
        </tr>
      </tbody>
    </Table>
  </Container>
);

export default ProjectTable;
