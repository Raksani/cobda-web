import React from 'react'
import { useRouter } from 'next/router'
import ReCAPTCHA from 'react-google-recaptcha'
import ProfileUpload from '../ProfileUpload'
import CommonField from '../TextField'
import PasswordField from '../TextField/passwordField'

const Form = () => {
  const router = useRouter()

  const handleSubmitClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    router.push('/sign-up-success')
  }

  return (
    <form className="form">
      <header className="form__header">
        <h2 className="form__title">Sign up</h2>
      </header>
      <ProfileUpload />
      <CommonField label="Username" inputType="text" errorInput="Your username is being use." />
      <CommonField label="Email" inputType="email" errorInput="Email is incorrect." />
      <PasswordField label="Password" errorInput="Password should be at least 8 characters." />
      <CommonField label="First Name" inputType="text" errorInput="Invalid input type." />
      <CommonField label="Surname" inputType="text" errorInput="Invalid input type." />
      <div className="form__recaptcha">
        <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY!} />
      </div>
      <div className="form__actionable">
        <button className="form__button" onClick={handleSubmitClick}>
          Submit
        </button>
      </div>
    </form>
  )
}

export default Form
