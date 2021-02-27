import React from 'react'
import { RecoilRoot } from 'recoil'
import Header from "components/Header";
import Footer from "components/Footer";
import Copyright from "components/Copyright";
import Profile from 'components/generator/Profile/Profile'
import WallPaper from 'components/generator/Card/WallPaper'
import GridItem from 'components/generator/TimComponents/components/Grid/GridItem'
import GridContainer from 'components/generator/TimComponents/components/Grid/GridContainer'
import { getProfile, getSocials, getSocialAccounts, getSkill, getSkillLevel } from 'components/generator/store'
import { useRecoilValue } from 'recoil'
import { makeStyles } from '@material-ui/core/styles'
import { CssBaseline, Hidden } from '@material-ui/core'

const style = {
  main: {
    overflow: "hidden",
  },
  body: {
    padding: '1rem'
  }
}

const useStyles = makeStyles(style)
function Generator() {
  const classes = useStyles()
  return (
    <div className={classes.main}>
      <Header />
      <div className={classes.body}>
        <GridContainer>
          <GridItem xs={12} sm={5} md={3}>
            <Profile />
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
  )
}

function App() {
    return (
        <RecoilRoot>
            <Generator />
        </RecoilRoot>
    )
}

export default App
