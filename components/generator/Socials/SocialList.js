import React from 'react'
import { useRecoilState } from 'recoil'
import { socialState, socialAccount } from 'components/generator/store'

const SocialDetails = ({ name, icon, account, handleDelete, handleChange }) => {

  return (
    <div>
      <div>
        {icon}
        {name}
      </div>
      <div>
        <input
          type='text'
          value={account}
          onChange={handleChange}
        />
      </div>
      <div>
        <button onClick={handleDelete}>delete</button>
      </div>
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

  return (
    <div>
      {social.map(({ name, icon, account }) => {
        return (
          <SocialDetails
            key={name}
            name={name}
            account={account}
            icon={icon}
            handleDelete={(event) => handleDelete(event, name)}
            handleChange={(event) => handleChange(event, name)}
            />
        )
      })}
    </div>
  )
}

export default SocialList
