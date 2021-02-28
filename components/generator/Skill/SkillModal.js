import React from 'react'
// recoil
import { useRecoilState, useRecoilValue } from 'recoil'
import { skillState, skillLevel, getSkill } from 'components/generator/store/'
// react icons
import { BiAddToQueue } from 'react-icons/bi'
// material components
import { makeStyles } from '@material-ui/core/styles'
import CustomizedDialogs from 'components/generator/Modal/Dialog'
import skillData from 'components/generator/Skill/skill.data'
import GridItem from 'components/generator/TimComponents/components/Grid/GridItem'
import GridContainer from 'components/generator/TimComponents/components/Grid/GridContainer'
import RegularButton from 'components/generator/TimComponents/components/CustomButtons/Button'

const SkillSelectorStyle = {
  btn: {
    width: '100%',
    justifyContent: 'center',
  }
}

const useStyles = makeStyles(SkillSelectorStyle)

const SkillSelector = ({ name, icon, selected, onhandleSelect }) => {
  const skills = useRecoilValue(getSkill)
  const skillsLen = skills.length
  const classes = useStyles()
  const disabled = selected || skillsLen === 5
  const btnClass = selected ? 'info' : 'transparent'
  const iconColor = selected ? 'white' : 'black'
  return (
    <GridItem sx={2}>
      <div>
        <RegularButton
          color={btnClass}
          onClick={onhandleSelect}
          disabled={disabled}
          className={classes.btn}
        >
          <span style={{ color: `${iconColor}`}}>{icon}</span>
        </RegularButton>
      </div>
    </GridItem>
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
      <CustomizedDialogs title={'Select Skill'} openicon={<BiAddToQueue />}>
        <GridContainer spacing={2} justify='center'>
          {skillData.map(({ name, icon }) => {
              const selected = skills.find((item) => item.name === name)
              return (
                <SkillSelector key={name} name={name} icon={icon} selected={selected} onhandleSelect={(event) => onhandleSelect(event, name, icon)}/>
              )
            })}
        </GridContainer>
      </CustomizedDialogs>
  )
}
