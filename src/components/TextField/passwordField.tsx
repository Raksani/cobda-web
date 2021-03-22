import React, { useState } from 'react'
import Image from 'next/image'

interface PasswordField {
  readonly label: String
  readonly errorInput: string
}

const PasswordField = ({ label, errorInput }: PasswordField) => {
  const [isPasswordShown, setPasswordShown] = useState(false)

  const togglePasswordVisiblity = () => {
    setPasswordShown(!isPasswordShown)
  }

  const renderValidInput = () => (
    <div className="form__input-group">
      <input
        placeholder="Enter your Password"
        type={isPasswordShown ? 'text' : 'password'}
        className="form__input"
      />
      {renderEyeIcon()}
    </div>
  )

  const renderInvalidInput = () => (
    <>
      <div className="form__input-group">
        <input
          type={isPasswordShown ? 'text' : 'password'}
          className="form__input form__input--invalid"
        />
        {renderEyeIcon()}
      </div>
      <div className="form__error">{errorInput}</div>
    </>
  )

  const renderEyeIcon = () => (
    <i className="form__eye-icon">
      <Image
        src={isPasswordShown ? '/icons/eye.svg' : '/icons/invisible.svg'}
        height={17}
        width={21}
        onClick={togglePasswordVisiblity}
      />
    </i>
  )

  return (
    <>
      <div className="form__group">
        <label className="form__input-label">{label}</label>
        {!errorInput ? renderValidInput() : renderInvalidInput()}
      </div>
    </>
  )
}

export default PasswordField
