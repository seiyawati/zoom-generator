import React from 'react'
import { FaReact, FaTwitterSquare } from 'react-icons/fa'
import { useRecoilValue } from 'recoil'
import html2canvas from 'html2canvas'
import { makeStyles } from '@material-ui/core/styles'
import GridItem from 'components/generator/TimComponents/components/Grid/GridItem'
import GridContainer from 'components/generator/TimComponents/components/Grid/GridContainer'
import Card from 'components/generator/TimComponents/components/Card/Card'
import CardBody from 'components/generator/TimComponents/components/Card/CardBody'
import styles from 'components/generator/Card/WallPaperStyle'
import { getProfile, getSocials, getSocialAccounts, getSkill, getSkillLevel } from 'components/generator/store'

const useStyles = makeStyles(styles)

const WallPaper = () => {
  const handleClick = (event) => {
    event.preventDefault()
    var node = document.getElementById('wall-paper')
    html2canvas(node)
      .then((canvas) => {
        saveAs(canvas.toDataURL(), 'your-wall-paper.png')
      })
      .catch((error) => {
        console.error('Oops, something went wrong!!', error)
      })
  }
  const saveAs = (uri, filename) => {
    var link = document.createElement('a')
    if (typeof link.download === 'string') {
      link.href = uri
      link.download = filename

      // FireFox requires the link to be in the body
      document.body.appendChild(link)

      // simulate click
      link.click()

      // remove the link when done
      document.body.removeChild(link)
    } else {
      window.open(uri)
    }
  }

  const classes = useStyles()
  return (
    <>
    <div id='wall-paper' className={classes.main}>
      <GridContainer>
        <GridItem xs={3}>
          <div>
            <h1>Name</h1>
            <h2>Hokkaido University</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </GridItem>
        <GridItem xs={6}>
          <div>
            <h1>Uoooooooooo Hoooooooo!!</h1>
          </div>
        </GridItem>
        <GridItem xs={3}>
          <div>
            <div>
              <h2><FaReact /><span>React</span></h2>
              <div className={classes.percentBar}></div>
            </div>
            <div>
              <h2><FaReact /><span>React</span></h2>
              <div className={classes.percentBar}></div>
            </div>
            <div>
              <h2><FaReact /><span>React</span></h2>
              <div className={classes.percentBar}></div>
            </div>
            <div>
              <h2><FaReact /><span>React</span></h2>
              <div className={classes.percentBar}></div>
            </div>
            <div>
              <h2><FaReact /><span>React</span></h2>
              <div className={classes.percentBar}></div>
            </div>
          </div>
          <div>
            <div>
              <h2><FaTwitterSquare /><span>@unkounko</span></h2>
              <h2><FaTwitterSquare /><span>@unkounko</span></h2>
              <h2><FaTwitterSquare /><span>@unkounko</span></h2>
            </div>
          </div>

        </GridItem>
      </GridContainer>
    </div>
    <button onClick={handleClick}>download</button>
    </>
  )
}

export default WallPaper
