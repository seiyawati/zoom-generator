import React from "react";
// recoil
import { RecoilRoot } from "recoil";
// material ui core components
import Header from "components/Header";
import Footer from "components/Footer";
import Copyright from "components/Copyright";
import Profile from "components/generator/Profile/Profile";
import Skill from "components/generator/Skill/Skill";
import Social from "components/generator/Socials/Social";
import Background from "components/generator/Background/Background";
import WallPaper from "components/generator/Card/WallPaper";
import GridItem from "components/generator/TimComponents/components/Grid/GridItem";
import GridContainer from "components/generator/TimComponents/components/Grid/GridContainer";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Head from "next/head";

const style = {
  main: {
    overflow: "hidden",
  },
  body: {
    padding: "1rem",
  },
};

const useStyles = makeStyles(style);
function Generator() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Head>
        <title>Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={classes.body}>
        <GridContainer>
          <GridItem xs={12} sm={5} md={3}>
            <Profile />
            <Skill />
            <Social />
            <Background />
          </GridItem>
          <CssBaseline />
          <GridItem xs={12} sm={6} md={9}>
            <WallPaper />
          </GridItem>
        </GridContainer>
      </div>
      <Footer />
      <Copyright />
    </div>
  );
}

function App() {
  return (
    <RecoilRoot>
      <Generator />
    </RecoilRoot>
  );
}

export default App;
