import React from 'react'
import backgroundData from './Background.data'
// recoil
import { useRecoilState } from 'recoil'
import { backgroundStyle } from 'components/generator/store'
// material ui component
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import RegularButton from 'components/generator/TimComponents/components/CustomButtons/Button'
// react icons
import { BiUpArrow, BiDownArrow, BiTrash } from 'react-icons/bi'
import styles from '../Card/WallPaperStyle';

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


const BackgroundList = () => {
  const [background, setBackgroundStyle] = useRecoilState(backgroundStyle)
  const handleSelect = (e, keyName) => {
    e.preventDefault()
    setBackgroundStyle(backgroundData[keyName])
  }

  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container spacing={2} justify='center'>
        {Object.keys(backgroundData).map((key) => {
          const style = backgroundData[key]
          return (
            <Grid item xs={4} key={key}>
              <Paper className={classes.paper}>
                <div style={style}>
                  <p>Style</p>
                  <button onClick={(e) => handleSelect(e, key)}>
                    Select
                  </button>
                </div>
              </Paper>
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}

export default BackgroundList
