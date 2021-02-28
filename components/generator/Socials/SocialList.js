import React from 'react'
// recoil
import { useRecoilState } from 'recoil'
import { socialState, socialAccount } from 'components/generator/store'
// material ui components
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

const SocialDetails = ({ name, icon, account, handleDelete, handleChange }) => {

  return (
    <div>
      {/* <Grid container justify='center' alignItems='center'>
        <Grid>
          <h2 style={{ margin: 0, padding: 0}}>{icon}</h2>
        </Grid>
      </Grid> */}
      <h1>Hello World</h1>
    </div>
  )
}


const SocialList = () => {
  const [social, setSocial] = useRecoilState(socialState)
  const handleDelete = (event, name) => {
    event.preventDefault()
    setSocial((social) => {
      return social.filter(elm => elm.name !== name)
    })
  }

  // Social acocunt
  const [accounts, setAccounts] = useRecoilState(socialAccount)
  const handleChange = (event, name) => {
    event.preventDefault()
    setAccounts((accounts) => {
      return { ...accounts, [name]: event.target.value}
    })
  }

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {social.map(({ name, icon, account }) => {
          return (
            <Grid item>
              <Paper className={classes.paper}>
                <SocialDetails
                key={name}
                name={name}
                account={account}
                icon={icon}
                //handleDelete={(event) => handleDelete(event, name)}
                //handleChange={(event) => handleChange(event, name)}
                />
              </Paper>
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}

export default SocialList
