import { atom } from 'recoil'

// profile data
const initProfileState = {
    firstName: '',
    lastName: '',
    affiliation: '',
    description: '',
    freespace: ''
}
export const profileState = atom({
    key: 'profileState',
    default: initProfileState
})

// socials data
const initSocialState = []
export const socialState = atom({
  key: 'socialState',
  default: initSocialState
})

// social accounts data
const initSocialAccount = {}
export const socialAccount = atom ({
  key: 'socialAccount',
  default: initSocialAccount
})

// skills data
const initSkillState = []
export const skillState = atom({
  key: 'skillState',
  default: initSkillState
})

// skill level data
const initSkilllevel = {}
export const skillLevel = atom({
  key: 'skillLevel',
  default: initSkilllevel
})

// background style
const initBackgroundStyle = []
export const backgroundStyle = atom({
  key: 'backgroundStyle',
  default: initBackgroundStyle
})
