import './SignIn.css'

import Button from '../components/Button'
import FadeAnimation from '../components/FadeAnimation'
import Field from '../components/Field'
import Form from '../components/Form'
import Input from '../components/Input'
import React from 'react'
import { navigate } from '@reach/router'

function SignIn() {
  // INFORMATION STATE
  const [helper, setHelper] = React.useState('')

  return (
    <FadeAnimation>
      <div className="sign-in-container">
        <div className="sign-in-content bg-dark">
          <img className="sign-in-image" src={require('../assets/sign_in_bg.svg')} alt="poster" />
          <Form className="sign-in-form" onSubmit={() => navigate('/farmers/dashboard', { replace: true })}>
            <div className="sign-in-title text-orange">Q-Agri MIS</div>
            <p className="sign-in-note">By signing in, you agree to our Terms of Use and Privacy Policy.</p>
            <Field label="Email">
              <Input className="sign-in-input" size="35" type="email" />
            </Field>
            <Field label="Password" error={helper}>
              <Input
                className="sign-in-input"
                onKeyUp={(e) => (e.getModifierState('CapsLock') ? setHelper('⚠️ Caps Lock is on') : setHelper(''))}
                size="35"
                type="password"
              />
            </Field>
            <Button className="sign-in-button" type="submit">
              Sign In
            </Button>
          </Form>
        </div>
        <div className="logo-container">
          <img className="sign-in-logo" src={require('../assets/pgq_logo.png')} alt="logo" />
          <img className="sign-in-logo" src={require('../assets/cffqi_logo.png')} alt="logo" />
        </div>
      </div>
    </FadeAnimation>
  )
}

export default SignIn
