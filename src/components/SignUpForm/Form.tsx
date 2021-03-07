import React from 'react'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'

const Form = () => {
  const router = useRouter()
  const { t } = useTranslation('sign-up')

  const handleSubmitClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    router.push('/sign-up-success')
  }

  const renderUpperInput = () => (
    <div className="form__input-section form__input-section--upper">
      <div className="form__input-group">
        <label className="form__input-label">First Name</label>
        <input type="text" className="form__input" />
      </div>
      <div className="form__input-group">
        <label className="form__input-label">Surname</label>
        <input type="text" className="form__input" />
      </div>
    </div>
  )

  const renderLowerInput = () => (
    <div className="form__input-section form__input-section--lower">
      <div className="form__input-group">
        <label className="form__input-label">Username</label>
        <input type="text" className="form__input" />
      </div>
      <div className="form__input-group">
        <label className="form__input-label">Email</label>
        <input type="text" className="form__input" />
      </div>
      <div className="form__input-group">
        <label className="form__input-label">Password</label>
        <input type="text" className="form__input" />
      </div>
    </div>
  )

  const renderFormActionable = () => (
    <div className="form__actionable">
      <div className="form__recaptcha">{/* TODO: reCAPTCHA */}</div>
      <a className="form__button" onClick={handleSubmitClick}>
        {t('register')}
      </a>
    </div>
  )

  return (
    <form className="form">
      {renderUpperInput()}
      {renderLowerInput()}
      {renderFormActionable()}
    </form>
  )
}

export default Form
