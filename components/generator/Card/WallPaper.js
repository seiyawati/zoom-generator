import React from "react";
// react icons

// recoil
import {
  getBackgorundStyle,
} from "components/generator/store";
import { useRecoilValue } from "recoil";
// html to canvas
import html2canvas from "html2canvas";
// material ui core
import ProfileBody from './ProfileBody'
import SkillListBody from './SkillListBody'
import SocialBody from './SocialBody'
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "components/generator/TimComponents/components/Grid/GridItem";
import GridContainer from "components/generator/TimComponents/components/Grid/GridContainer";
import styles from 'components/generator/Card/WallPaperStyle'


const useStyles = makeStyles(styles);

const WallPaper = () => {
  const handleClick = (event) => {
    event.preventDefault();
    var node = document.getElementById("wall-paper");
    html2canvas(node)
      .then((canvas) => {
        saveAs(canvas.toDataURL(), "your-wall-paper.png");
      })
      .catch((error) => {
        console.error("Oops, something went wrong!!", error);
      });
  };
  const saveAs = (uri, filename) => {
    var link = document.createElement("a");
    if (typeof link.download === "string") {
      link.href = uri;
      link.download = filename;

      // FireFox requires the link to be in the body
      document.body.appendChild(link);

      // simulate click
      link.click();

      // remove the link when done
      document.body.removeChild(link);
    } else {
      window.open(uri);
    }
  };

  const classes = useStyles();
  const backgroundStyle = useRecoilValue(getBackgorundStyle)

  return (
    <>
    <div id='wall-paper' className={classes.main} style={backgroundStyle}>
      <GridContainer>
        <ProfileBody />
        <GridItem xs={3}>
          <SkillListBody />
          <SocialBody />
        </GridItem>
      </GridContainer>
    </div>
    <button onClick={handleClick}>download</button>
    </>
  );
};

export default WallPaper;
