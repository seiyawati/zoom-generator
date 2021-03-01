import React from 'react'
import backgroundData from './Background.data'
// recoil
import { useRecoilState } from 'recoil'
import { backgroundStyle } from 'components/generator/store'
// material ui component
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton'
// react icons
import { AiFillCheckCircle } from 'react-icons/ai'
import styles from '../Card/WallPaperStyle';
import GridContainer from '../TimComponents/components/Grid/GridContainer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  promotion: {
    width: '100%',
    height: '2rem',
    borderRadius: '0.3rem',
    textAlign: 'center',
  },
  style: {
    margin: '0 auto',
    paddingTop: '0.4rem'
  },
  icon: {
    position: 'relative',
    right: '0.7rem',
    bottom: '0.4rem'
  }
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
      <Grid container spacing={1} justify='center'>
        {Object.keys(backgroundData).map((key) => {
          const style = backgroundData[key]
          return (
            <>
                <Grid item xs={4}>
                  <div className={classes.promotion} style={style}>
                    <p className={classes.style}>Style</p>
                  </div>
                </Grid>
                <Grid item xs={2}>
                  <div className={classes.icon}>
                    <IconButton onClick={(e) => handleSelect(e, key)}>
                      <AiFillCheckCircle  color='green'/>
                    </IconButton>
                  </div>
                </Grid>
            </>
          )
        })}
      </Grid>
    </div>
  )
}

export default BackgroundList
