import { Close20, Download20, Edit20, Password20, TrashCan20 } from '@carbon/icons-react'

import ButtonIcon from '../components/ButtonIcon'
import { CSVLink } from 'react-csv'
import { Entropy } from 'entropy-string'
import FadeAnimation from '../components/FadeAnimation'
import Field from '../components/Field'
import Help from '../Help'
import React from 'react'
import SectionBody from '../components/SectionBody'
import SectionFooter from '../components/SectionFooter'
import SectionHeader from '../components/SectionHeader'
import { confirmAlert } from 'react-confirm-alert'
import { navigate } from '@reach/router'
import { toJpeg } from 'html-to-image'
import { toast } from 'react-toastify'

function UserView() {
  const User = {
    id: 1,
    name: 'CLIEMTOR B. FABROS',
    email: 'cliemtor@devhaus.ph',
    position: 'SYSTEM ADMINISTRATOR',
    inactive: false,
    office_name: 'DEVHAUS TECHNOLOGIES',
    vicinity_barangay: '',
    vicinity_municipality: '',
    vicinity_province: 'QUIRINO',
    permissions: ['read_users', 'write_users', 'read_tasks', 'write_tasks', 'read_dashboard', 'read_map'],
    created_at: '2021-11-05T06:11:56.926268Z',
    updated_at: '2021-11-05T06:11:56.926268Z'
  }

  function alertDeleteUser() {
    function deleteUser() {
      toast.success('User deleted')
      navigate('/users', { replace: true })
    }

    confirmAlert({
      title: 'Delete User',
      buttons: [{ label: 'Delete', onClick: () => deleteUser() }, { label: 'Cancel' }]
    })
  }

  function resetPasswordAlert() {
    function downloadUAT() {
      toJpeg(document.getElementById('UserAccessTicket'))
        .then((dataUrl) => {
          var link = document.createElement('a')
          link.download = `${User.name}.jpeg`
          link.href = dataUrl
          link.click()
        })
        .then(() => {
          toast.success('Downloaded successfully')
        })
        .catch(() => {
          toast.error('Download failed')
        })
    }

    function resetPassword() {
      toast.success('Password has been reset successfully')
      downloadUAT()
    }

    confirmAlert({
      title: 'Reset Password',
      message: 'Reset password and download new User Access Ticket',
      buttons: [{ label: 'Reset', onClick: () => resetPassword() }, { label: 'Cancel' }]
    })
  }

  return (
    <FadeAnimation>
      <SectionHeader title="Personal Information">
        <CSVLink
          filename="User Report.csv"
          data={[{ ...User }] || []}
          headers={[
            { label: 'Name', key: 'name' },
            { label: 'Email', key: 'email' },
            { label: 'Position', key: 'position' },
            { label: 'Inactive', key: 'inactive' },
            { label: 'Office', key: 'office_name' },
            { label: 'Barangay', key: 'vicinity_barangay' },
            { label: 'Municipality', key: 'vicinity_municipality' },
            { label: 'Province', key: 'vicinity_province' },
            { label: 'Permissions', key: 'permissions' },
            { label: 'Date Created', key: 'created_at' },
            { label: 'Date Updated', key: 'updated_at' }
          ]}>
          <ButtonIcon title="Download User Info">
            <Download20 />
          </ButtonIcon>
        </CSVLink>
        <ButtonIcon onClick={() => navigate('/users/records/1/edit')} title="Edit user">
          <Edit20 />
        </ButtonIcon>
        <ButtonIcon onClick={alertDeleteUser} title="Delete user">
          <TrashCan20 />
        </ButtonIcon>
        <ButtonIcon onClick={() => navigate('/users')} title="Close">
          <Close20 />
        </ButtonIcon>
      </SectionHeader>
      <SectionBody>
        <Field label="Email" text={User.email} />
        <Field label="Position" text={Help.displayText(User.position)} />
        <Field label="Inactive" text={Help.displayBoolean(User.inactive)} />
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
      <SectionFooter>Last Update {Help.displayDateTime(User.updated_at)}</SectionFooter>
      <SectionHeader title="Reset Password">
        <ButtonIcon onClick={resetPasswordAlert} title="Reset password">
          <Password20 />
        </ButtonIcon>
      </SectionHeader>
      <SectionBody>
        <div id="UserAccessTicket" className="user-account-ticket">
          <p className="user-account-ticket-title">User Access Ticket</p>
          <p className="user-account-ticket-subtitle">Q-PHN MIS</p>
          <p className="user-account-ticket-item">Name: {User.name}</p>
          <p className="user-account-ticket-item">Email: {User.email}</p>
          <p className="user-account-ticket-item">Password: {new Entropy({ total: 1e6, risk: 1e9 }).string().substring(0, 8)}</p>
          <p className="user-account-ticket-item">Office: {User.office_name}</p>
          <p className="user-account-ticket-item">Position: {User.position}</p>
          <p className="user-account-ticket-note">
            Upon receipt of this ticket, use it immediately and change your password. Please refrain from sharing your password, thanks.
          </p>
        </div>
      </SectionBody>
    </FadeAnimation>
  )
}

export default UserView
