import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './PersonalInfo.css'


export default function PersonalInfo({ name, setName, email, setEmail, phone, setPhone}) {
  const navigate = useNavigate()
  const [Nameerror, setNameError] = useState(false)
  const [Emailerror, setEmailError] = useState(false)
  const [Phoneerror, setPhoneError] = useState(false)

  const movetoPlanPage = () => {

    // Validate the form fields
    if (name === '') {
      setNameError(true)
    } else {
      setNameError(false)
    }
    if (email === '') {
      setEmailError(true)
    } else {
      setEmailError(false)
    }
    if (phone === '') {
      setPhoneError(true)
    } else {
      setPhoneError(false)
    }

    if (name === '' || email === '' || phone === '') {
      return
    } else {
      navigate('/plan-selection')
    }
    console.log(name, email, phone)
  }
  const changeName = (e) => {
    setName(e.target.value)
  } 
  const changeEmail = (e) => {
    setEmail(e.target.value)
  }
  const changePhone = (e) => {
    setPhone(e.target.value)
  }  

  return (
    <div className='PersonalInfo'>
      <h1> Personal info</h1>
      <p className='ProvideInfo'> Please provide your name, email address and phone number </p>

      <div className='PersonalInfoForm'>
        <div className='FormGroup'>
          <div className='FormGroupLabel'>
            <label htmlFor='name'>Name</label>
            <p className={`errorText ${Nameerror? "show" : ""}`}> 
              This field is required </p>
          </div>
          <input type='text' id='name' name='name' value={name}
          required className='FormGroupInput' onChange={changeName}
          placeholder='e.g Vanessa May' />
        </div>

        <div className='FormGroup'>
          <div className='FormGroupLabel'>
            <label htmlFor='email'>Email Address</label>
            <p className={`errorText ${Emailerror? "show" : ""}`}> 
              This field is required </p>
          </div>
          <input type='email' id='email' name='email' value={email}
          required className='FormGroupInput' onChange={changeEmail}
          placeholder='e.g vanessamay@outlook.com' />
        </div>

        <div className='FormGroup'>
          <div className='FormGroupLabel'>
            <label htmlFor='phone'>Phone Number</label>
            <p className={`errorText ${Phoneerror? "show" : ""}`} > 
              This field is required </p>
          </div>
          <input type='tel' id='phone' name='phone' value={phone}
          required className='FormGroupInput' onChange={changePhone}
          placeholder='e.g +123 801 567 3456' />
        </div>

        <button type='submit' className='PersonalInfoButton' onClick={movetoPlanPage}> Next Step </button>
      </div>
    </div>
  )
}
 