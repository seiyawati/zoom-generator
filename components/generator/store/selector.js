import { selector } from 'recoil'
import { profileState, socialState, socialAccount, skillLevel, skillState } from '.'

export const getProfile = selector({
    key:"getProfile",
    get: ({get}) => {
        const profile = get(profileState)
        return profile
    }
})

export const getSocials = selector({
  key: 'getSocials',
  get: ({get}) => {
    const socials = get(socialState)
    return socials
  }
})

export const getSocialAccounts = selector({
  key: 'getSocialAccounts',
  get: ({get}) => {
    const accounts = get(socialAccount)
    return accounts
  }
})

export const getSkill = selector({
  key: 'getSkill',
  get: ({get}) => {
    const skills = get(skillState)
    return skills
  }
})

export const getSkillLevel = selector({
  key: 'getSkillLevel',
  get: ({get}) => {
    const skillLevels = get(skillLevel)
    return skillLevels
  }
})
