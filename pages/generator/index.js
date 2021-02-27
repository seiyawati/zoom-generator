import React from 'react'
import { RecoilRoot } from 'recoil'
import Profile from 'components/generator/Profile/Profile'
import SocialModal from 'components/generator/Socials/SocialModal'
import SkillModal from 'components/generator/Skill/SkillModal'
import SocialList from 'components/generator/Socials/SocialList'
import { getProfile, getSocials, getSocialAccounts, getSkill, getSkillLevel } from 'components/generator/store'
import { useRecoilValue } from 'recoil'

function Generator() {
    const profile = useRecoilValue(getProfile) // Object
    const socials = useRecoilValue(getSocials) // list
    const socialAccounts = useRecoilValue(getSocialAccounts) // Object
    const skills = useRecoilValue(getSkill) // Object
    return (
        <div>
            <Profile />
            <SocialModal />
            <SocialList />
            <SkillModal />
            <div>
              <h1>Skills</h1>
              {skills.map(({ name, icon}) => {
                return (
                  <div>
                    {icon} {name}
                  </div>
                )
              })}
            </div>
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
