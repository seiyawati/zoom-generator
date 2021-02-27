import React from 'react'
import SimpleModal from 'components/generator/Modal/Modal'
import skillData from 'components/generator/Skill/skill.data'
import { useRecoilState } from 'recoil'
import { skillState, skillLevel } from 'components/generator/store/'


const SkillSelector = ({ name, icon, selected, onhandleSelect }) => {
  return (
    <div>
      <button onClick={onhandleSelect} disabled={selected}>
        {name}
        {icon}
      </button>
    </div>
  )
}


export default function SkillModal() {
  const [skills, setSkills] = useRecoilState(skillState)
  const [level, setSkillLevel] = useRecoilState(skillLevel)
  const onhandleSelect = (event, name, icon) => {
    event.preventDefault()
    const newSkill = {
      name: name,
      icon: icon,
      //id: social.length
    }
    setSkills((skills) => [...skills, newSkill])
    setSkillLevel((level) => {
      return { ...level, [name]: 0 }
    })
  }

  return (
      <SimpleModal openLabel={"Skills"}>
          {skillData.map(({ name, icon }) => {
            const selected = skills.find((item) => item.name === name)
            return (
              <SkillSelector key={name} name={name} icon={icon} selected={selected} onhandleSelect={(event) => onhandleSelect(event, name, icon)}/>
            )
          })}
      </SimpleModal>
  )
}
