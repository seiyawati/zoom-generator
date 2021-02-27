import React from 'react'
import { useRecoilValue } from 'recoil'
import html2canvas from 'html2canvas'
import { getProfile, getSocials, getSocialAccounts, getSkill, getSkillLevel } from 'components/generator/store'

const Card = () => {
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
  return (
    <div>
      <div id='wall-paper'>
        <h1>Hrllo Card</h1>
      </div>
      <button onClick={handleClick}>download</button>
    </div>

  )
}

export default Card
