import Account from '../json/account.json'
import Address from '../Address'
import Button from '../components/Button'
import ButtonIcon from '../components/ButtonIcon'
import Checkbox from '../components/Checkbox'
import { Close20 } from '@carbon/icons-react'
import { Entropy } from 'entropy-string'
import FadeAnimation from '../components/FadeAnimation'
import Field from '../components/Field'
import Form from '../components/Form'
import FormFooter from '../components/FormFooter'
import FormRow from '../components/FormRow'
import Input from '../components/Input'
import React from 'react'
import SectionHeader from '../components/SectionHeader'
import Select from '../components/Select'
import { confirmAlert } from 'react-confirm-alert'
import { navigate } from '@reach/router'
import { toJpeg } from 'html-to-image'
import { toast } from 'react-toastify'

function UserNew() {
  // INPUT STATE
  const [municipality, setMunicipality] = React.useState(Account.vicinity_municipal)
  const [barangay, setBarangay] = React.useState(Account.vicinity_barangay)

  function successAlert() {
    confirmAlert({
      title: 'User Created',
      message: 'Return to users records',
      buttons: [{ label: 'Yes', onClick: () => navigate(-1, { replace: true }) }]
    })
  }

  function downloadUAT() {
    toJpeg(document.getElementById('UserAccessTicket'))
      .then((dataUrl) => {
        var link = document.createElement('a')
        link.download = `CLIEMTOR B. FABROS.jpeg`
        link.href = dataUrl
        link.click()
      })
      .then(() => {
        toast.success('UAT Downloaded')
        successAlert()
      })
      .catch(() => {
        toast.error('Download failed')
      })
  }

  function submitForm(e) {
    e.preventDefault()
    toast.success('New user created')
    downloadUAT()
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
          <Field label="Full Name">
            <Input uppercase size={30} type="text" />
          </Field>
          <Field label="Email">
            <Input size={30} type="email" />
          </Field>
        </FormRow>
        <SectionHeader title="Office Information" />
        <FormRow>
          <Field label="Office">
            <Input size={30} />
          </Field>
          <Field label="Position">
            <Input size={30} />
          </Field>
        </FormRow>
        <SectionHeader title="Permissions" />
        <FormRow>
          <Checkbox text="View Farmers Dashboard" />
          <Checkbox text="Search and View Farmer Records" />
          <Checkbox text="Add, Edit and Delete Farmer Records" />
        </FormRow>
        <FormRow>
          <Checkbox text="View Farm Records" />
          <Checkbox text="Add, Edit and Delete Farm Records" />
        </FormRow>
        <FormRow>
          <Checkbox text="Search and View User Accounts" />
          <Checkbox text="Add, Edit and Delete User Accounts" />
        </FormRow>
        <SectionHeader title="User Access Ticket" />
        <FormRow>
          <div id="UserAccessTicket" className="user-account-ticket">
            <p className="user-account-ticket-title">User Access Ticket</p>
            <p className="user-account-ticket-subtitle">Q-PHN MIS</p>
            <p className="user-account-ticket-item">Name: CLIEMTOR B. FABROS</p>
            <p className="user-account-ticket-item">Email: cliemtor08@gmail.com</p>
            <p className="user-account-ticket-item">Password: {new Entropy({ total: 1e6, risk: 1e9 }).string().substring(0, 8)}</p>
            <p className="user-account-ticket-item">Office: DEVHAUS TECHNOLOGIES</p>
            <p className="user-account-ticket-item">Position: SYSTEM ADMINISTRATOR</p>
            <p className="user-account-ticket-note">
              Upon receipt of this ticket, use it immediately and change your password. Please refrain from sharing your password, thanks.
            </p>
          </div>
        </FormRow>
        <FormFooter>
          <Button onClick={submitForm} title="Add new user" type="submit">
            Add New User Account
          </Button>
        </FormFooter>
      </Form>
    </FadeAnimation>
  )
}

export default UserNew
