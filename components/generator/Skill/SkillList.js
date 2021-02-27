import React from 'react'
import { useRecoilState } from 'recoil'
import { skillState, skillLevel } from 'components/generator/store'

const SkillDetail = ({ name, icon, handleLevelUp, handleLevelDown, handleDelete }) => {
  const [level, setSkillLevel] = useRecoilState(skillLevel)
  const stopLevelUp = () => {
    return level[name] === 10
  }
  const stopLevelDown = () => {
    return level[name] === 0
  }

  return (
    <div>
      {icon} {name} Lv.{level[name]}
      <button onClick={handleDelete}>
        Delete
      </button>
      <button onClick={handleLevelUp} disabled={stopLevelUp()}>+</button>
      <button onClick={handleLevelDown} disabled={stopLevelDown()}>-</button>
    </div>
  )
}

// Set Selected Skill
const SkillList = () => {
  const [skill, setSkill] = useRecoilState(skillState)
  const handleDelete = (event, name) => {
    event.preventDefault()
    setSkill((skill) => {
      return skill.filter(elm => elm.name !== name)
    })
  }

  // Set Skill Level
  const [level, setSkillLevel] = useRecoilState(skillLevel)
  const handleLevelUp = (event, name) => {
    event.preventDefault()
    setSkillLevel((level) => {
      return { ...level, [ name ]: level[name] + 1 }
    })
  }
  const handleLevelDown = (event, name) => {
    event.preventDefault()
    setSkillLevel((level) => {
      return { ...level, [ name ]: level[name] - 1}
    })
  }

  return (
    <div>
      {skill.map(({ name, icon }) => {
        return (
          <div>
            <SkillDetail
            name={name}
            icon={icon}
            handleDelete={event => handleDelete(event, name)}
            handleLevelUp={event => handleLevelUp(event, name)}
            handleLevelDown={event => handleLevelDown(event, name)}
            />
          </div>
        )
      })}
    </div>
  )
}

export default SkillList
