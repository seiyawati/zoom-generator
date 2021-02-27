import React from 'react'
import { useRecoilState } from 'recoil'
import { profileState } from 'components/generator/store'
// react icons
import { BsFillPlusSquareFill } from 'react-icons/bs'
import { AiFillMinusCircle } from 'react-icons/ai'
// material ui
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
// core components
import GridItem from 'components/generator/TimComponents/components/Grid/GridItem'
import GridContainer from 'components/generator/TimComponents/components/Grid/GridContainer'
import CustomInput from 'components/generator/TimComponents/components/CustomInput/CustomInput'
import Card from 'components/generator/TimComponents/components/Card/Card'
import CardHeader from 'components/generator/TimComponents/components/Card/CardHeader'
import CardBody from 'components/generator/TimComponents/components/Card/CardBody'

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles)

function Profile() {
    const [profile, setProfile] = useRecoilState(profileState)
    const [show, setShow] = React.useState(false)
    const handleShow = (e) => {
      e.preventDefault()
      setShow(!show)
    }
    const handleInputChange = (event, keyName) => {
        event.preventDefault()
        setProfile((profile) => {
            return { ...profile, [keyName]: event.target.value }
        })
        console.log(profile)
    }

    const classes = useStyles()
    const showStyle = show ? { display: 'None' } : { display: 'block' }
    const buttonIcon = show ? <BsFillPlusSquareFill color='white'/> : <AiFillMinusCircle color='white' />
    return (
            <Card>
              <CardHeader color="primary">
                <GridContainer>
                  <GridItem xs={8}>
                    <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
                    <p className={classes.cardCategoryWhite}>Complete yor profile</p>
                  </GridItem>
                  <GridItem xs={4}>
                    <IconButton  onClick={e => handleShow(e)}>
                      {buttonIcon}
                    </IconButton>
                  </GridItem>
                </GridContainer>
              </CardHeader>
              <CardBody style={showStyle}>
                <GridContainer>
                  <GridItem xs={6} sm={6} md={6}>
                    <CustomInput
                      labelText="First Name"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: 'text',
                        name: 'firstName',
                        value: profile.firstName,
                        onChange: (event) => handleInputChange(event, 'firstName')
                      }}
                    />
                  </GridItem>
                  <GridItem xs={6} sm={6} md={6}>
                    <CustomInput
                      labelText="Last Name"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: 'text',
                        name: 'lastName',
                        value: profile.lastName,
                        onChange: (event) => handleInputChange(event, 'lastName')
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12}>
                    <CustomInput
                      labelText="Affiliation"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: 'text',
                        name: 'affiliation',
                        value: profile.affiliation,
                        onChange: (event) => handleInputChange(event, 'affiliation')
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12}>
                    <CustomInput
                      labelText="Description"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: 'text',
                        name: 'description',
                        value: profile.description,
                        multiline: true,
                        rows: 3,
                        onChange: (event) => handleInputChange(event, 'description')
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12}>
                    <CustomInput
                      labelText="Free word"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: 'text',
                        name: 'freespace',
                        value: profile.freespace,
                        multiline: true,
                        rows: 2,
                        onChange: (event) => handleInputChange(event, 'freespace')
                      }}
                    />
                  </GridItem>
                </GridContainer>

              </CardBody>
            </Card>
    )
}

export default Profile
export { profileState }
