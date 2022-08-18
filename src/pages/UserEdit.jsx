import Account from '../json/account.json'
import Address from '../Address'
import Button from '../components/Button'
import ButtonIcon from '../components/ButtonIcon'
import Checkbox from '../components/Checkbox'
import { Close20 } from '@carbon/icons-react'
import FadeAnimation from '../components/FadeAnimation'
import Field from '../components/Field'
import Form from '../components/Form'
import FormFooter from '../components/FormFooter'
import FormRow from '../components/FormRow'
import Input from '../components/Input'
import React from 'react'
import SectionHeader from '../components/SectionHeader'
import Select from '../components/Select'
import { navigate } from '@reach/router'
import { toast } from 'react-toastify'

function UserEdit() {
  // INPUT STATE
  const [municipality, setMunicipality] = React.useState(Account.vicinity_municipality)
  const [barangay, setBarangay] = React.useState(Account.vicinity_barangay)

  // SEND PATCH USER REQUEST
  function submitForm(e) {
    e.preventDefault()
    toast.success('User updated')
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
          <Field label="Full Name">
            <Input uppercase required size={30} type="text" defaultValue="CLIEMTOR B. FABROS" />
          </Field>
          <Field label="Email">
            <Input size={30} type="email" defaultValue="cliemtor08@gmail.com" />
          </Field>
          <Field label="Deactivated">
            <Select defaultValue="NO">
              <option value="YES">YES</option>
              <option value="NO">NO</option>
            </Select>
          </Field>
        </FormRow>
        <SectionHeader title="Office Information" />
        <FormRow>
          <Field label="Office">
            <Input size={30} defaultValue="COMMUNITY FORESTRY FOUNDATION QUIRINO INCORPORATED" />
          </Field>
          <Field label="Position">
            <Input size={30} defaultValue="SYSTEM LEAD DEVELOPER" />
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
        <FormFooter>
          <Button onClick={submitForm} title="Update user account" type="submit">
            Update User
          </Button>
        </FormFooter>
      </Form>
    </FadeAnimation>
  )
}

export default UserEdit
