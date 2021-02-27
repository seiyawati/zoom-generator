import React from 'react'
import { useRecoilState } from 'recoil'
import { profileState } from 'components/generator/store'
// material ui
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
// core components
import GridItem from 'components/generator/TimComponents/components/Grid/GridItem'
import GridContainer from 'components/generator/TimComponents/components/Grid/GridContainer'
import CustomInput from 'components/generator/TimComponents/components/CustomInput/CustomInput'
import Card from 'components/generator/TimComponents/components/Card/Card'
import CardHeader from 'components/generator/TimComponents/components/Card/CardHeader'
import CardBody from 'components/generator/TimComponents/components/Card/CardBody'
import CardFooter from 'components/generator/TimComponents/components/Card/CardFooter'

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
    const handleInputChange = (event, keyName) => {
        event.preventDefault()
        setProfile((profile) => {
            return { ...profile, [keyName]: event.target.value }
        })
        console.log(profile)
    }

    const classes = useStyles()

    return (
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
              </CardHeader>
              <CardBody>
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
                </GridContainer>
              </CardBody>
            </Card>
    )
}

export default Profile
export { profileState }
