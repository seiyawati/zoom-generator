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

function Generator() {
    const profile = useRecoilValue(getProfile) // Object
    const socials = useRecoilValue(getSocials) // list
    const socialAccounts = useRecoilValue(getSocialAccounts) // Object
    const skills = useRecoilValue(getSkill) // Object
    return (
      <div>
        <Header />
          <GridContainer>
            <GridItem xs={12} sm={6} md={3}>
              <Profile />
            </GridItem>
            <GridItem xs={12} sm={6} md={9}>
              <WallPaper />
            </GridItem>
          </GridContainer>
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
