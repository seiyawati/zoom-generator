import React from 'react'
// recoil
import { getSocials, getSocialAccounts } from 'components/generator/store'
import { useRecoilValue } from 'recoil'
// material ui components
import { makeStyles } from '@material-ui/core/styles';
import GridItem from "components/generator/TimComponents/components/Grid/GridItem";
import GridContainer from '../TimComponents/components/Grid/GridContainer';

const style = {
  root: {
    marginTop: '3rem'
  },
  main: {
    marginTop: '0.7rem'
  },
  icon: {
    fontSize: '1.6em',
    padding: 0,
    margin: '0 auto'
  },
  nameBox: {
    fontSize: '1.6em',
    padding: 0,
    margin: '0 auto'
  },
  name: {
    paddingLeft: '0.5rem',
    position: 'relative',
    left: 0,
    bottom: '0.6rem'
  },
  percentBar: {
    height: '10px',
    borderRadius: '1em',
    backgroundColor: '#75d5fd'
  }
}

const useStyles = makeStyles(style)

export default function SocialBody() {
  const social = useRecoilValue(getSocials)
  const socialAccount = useRecoilValue(getSocialAccounts)
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <GridContainer>
      {social.map(({ name, icon }) => {
              const account = socialAccount[name]
              return (
                <GridItem xs={12}>
                  <div key={name}>
                  <div className={classes.main}>
                    <h1 className={classes.nameBox}>
                      <span className={classes.icon}>{icon}</span>
                      <span className={classes.name}>{account}</span>
                    </h1>
                  </div>
                </div>
                </GridItem>
              )
        })}
        </GridContainer>
    </div>

  )
}
