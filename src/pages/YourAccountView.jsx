import Account from '../json/account.json'
import ButtonIcon from '../components/ButtonIcon'
import { Edit20 } from '@carbon/icons-react'
import FadeAnimation from '../components/FadeAnimation'
import Field from '../components/Field'
import Help from '../Help'
import React from 'react'
import SectionBody from '../components/SectionBody'
import SectionFooter from '../components/SectionFooter'
import SectionHeader from '../components/SectionHeader'
import { navigate } from '@reach/router'

function YourAccountView() {
  return (
    <FadeAnimation>
      <SectionHeader title="Personal Information">
        <ButtonIcon onClick={() => navigate('/your-account/information/edit')} title="Edit your account">
          <Edit20 />
        </ButtonIcon>
      </SectionHeader>
      <SectionBody>
        <Field label="Name" text="CLIEMTOR B. FABROS" />
        <Field label="Email" text="cliemtor08@gmail.com" />
      </SectionBody>
      <SectionHeader title="Office Information" />
      <SectionBody>
        <Field label="Office" text="COMMUNITY FORESTRY FOUNDATION QUIRINO INCORPORATED" />
        <Field label="Position" text="SYSTEM LEAD DEVELOPER" />
      </SectionBody>
      <SectionHeader title="Permissions" />
      <SectionBody>
        <Field label="View Farmers Dashboard" text="YES" />
        <Field label="Search and View Farmer Records" text="YES" />
        <Field label="Add, Edit and Delete Farmer Records" text="YES" />
      </SectionBody>
      <SectionBody>
        <Field label="View Farm Records" text="YES" />
        <Field label="Add, Edit and Delete Farm Records" text="YES" />
      </SectionBody>
      <SectionBody>
        <Field label="Search and View User Accounts" text="YES" />
        <Field label="Add, Edit and Delete User Accounts" text="YES" />
      </SectionBody>
      <SectionFooter>Last Update {Help.displayDateTime('2021-11-05T06:11:56.926268Z')}</SectionFooter>
    </FadeAnimation>
  )
}

export default YourAccountView
