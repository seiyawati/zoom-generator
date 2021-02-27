import React from 'react'
import { useRecoilState } from 'recoil'
import { profileState } from 'components/generator/store'

function Profile() {
    const [profile, setProfile] = useRecoilState(profileState)
    const handleInputChange = (event, keyName) => {
        event.preventDefault()
        setProfile((profile) => {
            return { ...profile, [keyName]: event.target.value }
        })
        console.log(profile)
    }

    return (
        <div>
            <input
            placeholder='Kyoko'
            type='text'
            name='firstName'
            value={profile.firstName}
            onChange={(event) => handleInputChange(event, 'firstName')}
            />
        </div>
    )
}

export default Profile
export { profileState } 