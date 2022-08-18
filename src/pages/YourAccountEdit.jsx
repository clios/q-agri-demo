import Button from '../components/Button'
import ButtonIcon from '../components/ButtonIcon'
import { Close20 } from '@carbon/icons-react'
import FadeAnimation from '../components/FadeAnimation'
import Field from '../components/Field'
import Form from '../components/Form'
import FormFooter from '../components/FormFooter'
import FormRow from '../components/FormRow'
import Input from '../components/Input'
import React from 'react'
import SectionHeader from '../components/SectionHeader'
import { navigate } from '@reach/router'
import { toast } from 'react-toastify'

function YourAccountEdit() {
  // INFORMATION STATE
  const [helper, setHelper] = React.useState({})

  // INPUT STATE: ACCOUNT
  const [name, setName] = React.useState('CLIEMTOR B. FABROS')
  const [email, setEmail] = React.useState('cliemtor@devhaus.ph')
  const [new_password, setNewPassword] = React.useState('')
  const [confirm_password, setConfirmPassword] = React.useState('')

  // SEND PATCH ACCOUNT REQUEST
  function submitForm(e) {
    e.preventDefault()

    if (new_password !== confirm_password) {
      toast.error('Password mismatched')
      return
    }

    toast.success('Your account has been updated')
    navigate(-1, { replace: true })
  }

  return (
    <FadeAnimation>
      <Form>
        <SectionHeader title="Personal Information">
          <ButtonIcon onClick={() => navigate(-1)} title="Close this form">
            <Close20 />
          </ButtonIcon>
        </SectionHeader>
        <FormRow>
          <Field label="Name">
            <Input uppercase onChange={(e) => setName(e.target.value)} size={20} type="text" value={name} />
          </Field>
          <Field label="Email">
            <Input onChange={(e) => setEmail(e.target.value)} size={30} type="email" value={email} />
          </Field>
        </FormRow>
        <SectionHeader title="Password" subtitle="If you do not wish to change your password, just leave it blank." />
        <FormRow>
          <Field label="New password" error={helper.new_password}>
            <Input
              maxLength={255}
              minLength={8}
              onChange={(e) => {
                setNewPassword(e.target.value)
                setConfirmPassword('')
                setPassword(null)
              }}
              onKeyUp={(e) => {
                e.getModifierState('CapsLock') ? setHelper({ new_password: '⚠️ Caps Lock is on' }) : setHelper({})
              }}
              size={35}
              type="password"
              value={new_password}
            />
          </Field>
          <Field label="Confirm password" error={helper.confirm_password}>
            <Input
              maxLength={255}
              minLength={8}
              onChange={(e) => {
                setConfirmPassword(e.target.value)
                if (new_password === e.target.value) {
                  toast.info('Password matched')
                  setPassword(e.target.value)
                }
              }}
              onKeyUp={(e) => {
                e.getModifierState('CapsLock') ? setHelper({ confirm_password: '⚠️ Caps Lock is on' }) : setHelper({})
              }}
              required={new_password ? true : false}
              size={35}
              type="password"
              value={confirm_password}
            />
          </Field>
        </FormRow>
        <FormRow>
          <Field />
        </FormRow>
        <FormFooter>
          <Button onClick={submitForm} title="Update your account" type="submit">
            Update Your Account
          </Button>
        </FormFooter>
      </Form>
    </FadeAnimation>
  )
}

export default YourAccountEdit
