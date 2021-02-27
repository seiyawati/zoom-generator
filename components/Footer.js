import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";

const useStyles = makeStyles({
  root: {},
});

export default function Footer() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
      style={{ color: "#e0f2f1", backgroundColor: "#0E5D5D" }}
    >
      <BottomNavigationAction
        label="Twitter"
        icon={<TwitterIcon />}
        style={{ color: "white" }}
        href="https://twitter.com/geek_pjt"
      />
      <BottomNavigationAction
        label="GitHub"
        icon={<GitHubIcon />}
        style={{ color: "white" }}
        href="https://github.com/seiyawati/zoom-generator"
      />
    </BottomNavigation>
  );
}
