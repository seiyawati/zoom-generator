import React from 'react'
// recoil
import { useRecoilState, useRecoilValue } from 'recoil'
import { socialState, getSocials } from 'components/generator/store/'
// react icons
import { BiAddToQueue } from 'react-icons/bi'
// material ui components
import SimpleModal from 'components/generator/Modal/Modal'
import socialData from 'components/generator/Socials/social.data'
import { makeStyles } from '@material-ui/core/styles'
import CustomizedDialogs from 'components/generator/Modal/Dialog'
import GridItem from 'components/generator/TimComponents/components/Grid/GridItem'
import GridContainer from 'components/generator/TimComponents/components/Grid/GridContainer'
import RegularButton from 'components/generator/TimComponents/components/CustomButtons/Button'

const SocialSelectorStyle = {
  btn: {
    width: '100%',
    justifyContent: 'center',
  }
}

const useStyles = makeStyles(SocialSelectorStyle)

const SocialSelector = ({ name, icon, selected, onhandleSelect }) => {
  const social = useRecoilValue(getSocials)
  const socialLen = social.length
  const classes = useStyles()
  const disabled = selected || socialLen === 3
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
  }

  return (
    <CustomizedDialogs title={'Select Socials'} openicon={<BiAddToQueue />}>
        <GridContainer spacing={2} justify='center'>
          {socialData.map(({ name, icon }) => {
              const selected = social.find((item) => item.name === name)
              return (
                <SocialSelector key={name} name={name} icon={icon} selected={selected} onhandleSelect={(event) => onhandleSelect(event, name, icon)}/>
              )
            })}
        </GridContainer>
      </CustomizedDialogs>
  )
}
