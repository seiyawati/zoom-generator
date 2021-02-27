import React from 'react'
import SimpleModal from 'components/generator/Modal/Modal'
import socialData from 'components/generator/Socials/social.data'
import { useRecoilState } from 'recoil'
import { socialState } from 'components/generator/store/'


const SocialSelector = ({ name, icon, selected, onhandleSelect }) => {
  return (
    <div>
      <button onClick={onhandleSelect} disabled={selected}>
        {name}
        {icon}
      </button>
    </div>
  )
}


export default function SocialModal() {
  const [social, setSocial] = useRecoilState(socialState)
  const onhandleSelect = (event, name, icon) => {
    event.preventDefault()
    const newSocial = {
      name: name,
      icon: icon,
      //id: social.length
    }
    setSocial((social) => [...social, newSocial])
    return console.log(social)
  }

  return (
      <SimpleModal openLabel={"Socials"}>
          {socialData.map(({ name, icon }) => {
            const selected = social.find((item) => item.name === name)
            return (
              <SocialSelector key={name} name={name} icon={icon} selected={selected} onhandleSelect={(event) => onhandleSelect(event, name, icon)}/>
            )
          })}
      </SimpleModal>
  )
}
