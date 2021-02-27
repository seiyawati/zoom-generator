import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import HelpIcon from "@material-ui/icons/Help";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{ color: "#e0f2f1", backgroundColor: "#0E5D5D" }}
      >
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Site Name
          </Typography>
          <Button>
            <HomeIcon style={{ color: "white" }} href="#"/>
          </Button>
          <Button>
            <HelpIcon style={{ color: "white" }} />
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
