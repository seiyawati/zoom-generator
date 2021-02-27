import React from "react";
// react icons
import { FaReact, FaTwitterSquare } from 'react-icons/fa';
// recoil
import {
  getProfile,
  getSocials,
  getSocialAccounts,
  getSkill,
  getSkillLevel,
} from "components/generator/store";
import { useRecoilValue } from "recoil";
// html to canvas
import html2canvas from "html2canvas";
// material ui core
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "components/generator/TimComponents/components/Grid/GridItem";
import GridContainer from "components/generator/TimComponents/components/Grid/GridContainer";
import styles from 'components/generator/Card/WallPaperStyle'


// const pattern =  {
//   pattern1: {
//     backgroundColor: "",
//     color: ,
//     fontFamily:
//   },
//   pattern2: {
//     backgroundColor: ,
//     color: ,
//     fontFamily:
//   },
//   pattern3: {
//     backgroundColor: ,
//     color: ,
//     fontFamily:
//   },
//   pattern4: {
//     backgroundColor: ,
//     color: ,
//     fontFamily:
//   },
// };

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
  const profile = useRecoilValue(getProfile)
  const skill = useRecoilValue(getSkill)
  const skillLevel = useRecoilValue(getSkillLevel)
  const social = useRecoilValue(getSocials)
  const socialAccount = useRecoilValue(getSocialAccounts)
  return (
    <>
    <div id='wall-paper' className={classes.main}>
      <GridContainer>
        <GridItem xs={3}>
          <div>
            <h1>{profile.firstName} {profile.lastName}</h1>
            <h2>{profile.affiliation}</h2>
            <p>{profile.description}</p>
          </div>
        </GridItem>
        <GridItem xs={6}>
          <div>
            <h1>{profile.freespace}</h1>
          </div>
        </GridItem>
        <GridItem xs={3}>
          <div>
            {skill.map(({ name, icon }) => {
              const level = skillLevel[name] * 10
              console.log(level)
              return (
                <div key={name}>
                  <div>
                    <h1>{icon} {name}</h1>
                  </div>
                  <div className={classes.percentBar} style={{ width: `${level}%` }}></div>
                </div>
              )
            })}
          </div>
          <div>
            <div>
              {social.map(({ name, icon }) => {
                const account = socialAccount[name]
                return (
                  <div key={name}>
                    <h3>{icon} {account}</h3>
                  </div>
                )
              })}
            </div>
          </div>

        </GridItem>
      </GridContainer>
    </div>
    <button onClick={handleClick}>download</button>
    </>
  );
};

export default WallPaper;
