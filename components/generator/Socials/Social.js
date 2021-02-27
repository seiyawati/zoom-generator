import React from 'react'
// react icons
import { BsFillPlusSquareFill } from 'react-icons/bs'
import { AiFillMinusCircle } from 'react-icons/ai'
// material ui
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
// core components
import SocialModal from './SocialModal'
import SocialList from './SocialList'
import GridItem from 'components/generator/TimComponents/components/Grid/GridItem'
import GridContainer from 'components/generator/TimComponents/components/Grid/GridContainer'
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

export default function Skill() {
  const [show, setShow] = React.useState(true)
    const handleShow = (e) => {
      e.preventDefault()
      setShow(!show)
    }
  const classes = useStyles()
  const showStyle = show ? { display: 'None' } : { display: 'block' }
  const buttonIcon = show ? <BsFillPlusSquareFill color='white'/> : <AiFillMinusCircle color='white' />
  return (
    <Card>
              <CardHeader color="danger">
                <GridContainer>
                  <GridItem xs={8}>
                    <h4 className={classes.cardTitleWhite}>Socials</h4>
                    <p className={classes.cardCategoryWhite}>Select your Socials</p>
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
                  <SocialModal />
                  <SocialList />
                </GridContainer>
              </CardBody>
            </Card>
  )
}
