import React from "react";
import { useRecoilValue } from "recoil";
import html2canvas from "html2canvas";
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "components/generator/TimComponents/components/Grid/GridItem";
import GridContainer from "components/generator/TimComponents/components/Grid/GridContainer";
import Card from "components/generator/TimComponents/components/Card/Card";
import CardBody from "components/generator/TimComponents/components/Card/CardBody";

import {
  getProfile,
  getSocials,
  getSocialAccounts,
  getSkill,
  getSkillLevel,
} from "components/generator/store";

const pattern =  {
 pattern1: {
   backgroundColor: "#0097A7",
   color: "white",
   fontFamily: "sans-serif",
 },
 pattern2: {
   backgroundColor: "#E57E7E",
   color: "white",
   fontFamily: "sans-serif",
 },
 pattern3: {
   backgroundColor: "#F57C00",
   color: "white",
   fontFamily: "sans-serif",
 },
 pattern4: {
   backgroundColor: "#388E3C",
   color: "white",
   fontFamily: "sans-serif",
 },
};

const styles = {
  main: {
    width: "100%",
    height: "calc(100vw * 0.45)",
    backgroundColor: "#444444",
    color: "white",
    fontFamily: "sans-serif", // google fonts をここで使える？
  },
};

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
  return (
    <>
      <div id="wall-paper" className={classes.main}>
        <div>
          <h1>body</h1>
        </div>
      </div>
      <button onClick={handleClick}>download</button>
    </>
  );
};

export default WallPaper;
