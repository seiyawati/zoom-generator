import React from 'react'
// recoil
import { useRecoilState } from 'recoil'
import { skillState, skillLevel } from 'components/generator/store'
// material ui component
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton'
// react icons
import { BiUpArrow, BiDownArrow, BiTrash } from 'react-icons/bi'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

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
      <Grid container justify='center' alignItems='center'>
        <Grid item xs={4}>
          <h2 style={{ margin: 0, padding: 0}}>{icon} <span style={{ fontSize: '0.7em' }} >Lv.{level[name]}</span></h2>
        </Grid>
        <Grid item xs={8}>
          <IconButton onClick={handleLevelUp} disabled={stopLevelUp()}>
            <BiUpArrow />
          </IconButton>
          <IconButton onClick={handleLevelDown} disabled={stopLevelDown()}>
            <BiDownArrow />
          </IconButton>
          <IconButton onClick={handleDelete}>
            <BiTrash />
          </IconButton>
        </Grid>
      </Grid>
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

  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container spacing={2} justify='center'>
        {skill.map(({ name, icon }) => {
          return (
            <Grid item xs={11}>
              <Paper className={classes.paper}>
                <SkillDetail
                name={name}
                icon={icon}
                handleDelete={event => handleDelete(event, name)}
                handleLevelUp={event => handleLevelUp(event, name)}
                handleLevelDown={event => handleLevelDown(event, name)}
                />
              </Paper>
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}

export default SkillList
