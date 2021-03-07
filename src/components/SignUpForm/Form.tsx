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
    <div className="form__input-stack form__input-stack--upper">
      <div className="form__input-group">
        <label className="form__input-label">{t('firstName')}</label>
        <input type="text" className="form__input" />
      </div>
      <div className="form__input-group">
        <label className="form__input-label">{t('surname')}</label>
        <input type="text" className="form__input" />
      </div>
    </div>
  )

  const renderLowerInput = () => (
    <div className="form__input-stack form__input-stack--lower">
      <div className="form__input-group">
        <label className="form__input-label">{t('username')}</label>
        <input type="text" className="form__input" />
      </div>
      <div className="form__input-group">
        <label className="form__input-label">{t('email')}</label>
        <input type="text" className="form__input" />
      </div>
      <div className="form__input-group">
        <label className="form__input-label">{t('password')}</label>
        <input type="text" className="form__input" />
      </div>
    </div>
  )

  const renderFormActionable = () => (
    <div className="form__actionable">
      <div className="form__recaptcha">{/* TODO: Add reCAPTCHA */}</div>
      <a className="form__button" onClick={handleSubmitClick}>
        {t('register')}
      </a>
    </div>
  )

  return (
    <form className="form">
      {/* TODO: Change these inputs according to the design */}
      {renderUpperInput()}
      {renderLowerInput()}
      {renderFormActionable()}
    </form>
  )
}

export default Form
