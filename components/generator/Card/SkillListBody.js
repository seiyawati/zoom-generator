import React from 'react'
// recoil
import { getSkill, getSkillLevel } from 'components/generator/store'
import { useRecoilValue } from 'recoil'
// material ui components
import { makeStyles } from '@material-ui/core/styles';
import GridItem from "components/generator/TimComponents/components/Grid/GridItem";
import GridContainer from '../TimComponents/components/Grid/GridContainer';

const style = {
  main: {
    marginTop: '1rem'
  },
  icon: {
    fontSize: '1.3em',
    padding: 0,
    margin: '0 auto'
  },
  nameBox: {
    fontSize: '1.3em',
    padding: 0,
    margin: '0 auto'
  },
  name: {
    paddingLeft: '0.5rem',
    position: 'relative',
    left: 0,
    bottom: '0.3rem'
  },
  percentBar: {
    height: '10px',
    borderRadius: '1em',
    backgroundColor: '#303f9f',
  }
}

const useStyles = makeStyles(style)

export default function SkillListBody() {
  const skill = useRecoilValue(getSkill)
  const skillLevel = useRecoilValue(getSkillLevel)
  const classes = useStyles()

  return (
    <div style={{ marginTop: '2rem'}}>
      <GridContainer>
      {skill.map(({ name, icon }) => {
              const level = skillLevel[name] * 9
              return (
                <GridItem xs={12}>
                  <div key={name}>
                  <div className={classes.main}>
                    <h1 className={classes.nameBox}>
                      <span className={classes.icon}>{icon}</span>
                      <span className={classes.name}>{name}</span>
                    </h1>
                  </div>
                  <div className={classes.percentBar} style={{ width: `${level}%` }}></div>
                </div>
                </GridItem>
              )
        })}
        </GridContainer>
    </div>

  )
}
