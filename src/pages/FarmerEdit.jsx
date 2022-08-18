import Address from '../Address'
import Button from '../components/Button'
import ButtonIcon from '../components/ButtonIcon'
import Cleave from 'cleave.js/react'
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

function FarmerEdit() {
  // INPUT STATE
  const [municipality, setMunicipality] = React.useState('SAGUDAY')
  const [barangay, setBarangay] = React.useState('DIBUL')

  function submitForm(e) {
    e.preventDefault()
    navigate('/farmers/records/1')
    toast.success('Farmer record updated')
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
          <Field label="Employment">
            <Select>
              <option value="owner">OWNER</option>
              <option value="tenant">TENANT</option>
              <option value="laborer">LABORER</option>
            </Select>
          </Field>
          <Field label="Name">
            <Input defaultValue="NATHAN FLORENDO" size={30} type="text" />
          </Field>
        </FormRow>
        <FormRow>
          <Field label="Birthday">
            <Input defaultValue="1973-11-05" type="date" />
          </Field>
          <Field label="Sex">
            <Select defaultValue="male">
              <option>NO ANSWER</option>
              <option value="male">MALE</option>
              <option>FEMALE</option>
            </Select>
          </Field>
          <Field label="Marital Status">
            <Select defaultValue="single">
              <option value="">NO ANSWER</option>
              <option value="single">SINGLE</option>
              <option value="living_in">LIVING-IN</option>
              <option value="married">MARRIED</option>
              <option value="widowed">WIDOWED</option>
              <option value="divorced">DIVORCED</option>
              <option value="separated">SEPARATED</option>
            </Select>
          </Field>
        </FormRow>
        <FormRow>
          <Field label="Spouse Name">
            <Input size={30} type="text" />
          </Field>
          <Field label="Total Children">
            <Cleave
              className="input"
              size={7}
              options={{ numeral: true, numeralIntegerScale: 3, numeralDecimalScale: 0, numeralPositiveOnly: true }}
            />
          </Field>
        </FormRow>
        <SectionHeader title="Residential Address" />
        <FormRow>
          <Field label="Region">
            <Select disabled>
              <option>02</option>
            </Select>
          </Field>
          <Field label="Province">
            <Select disabled>
              <option>Quirino</option>
            </Select>
          </Field>
          <Field label="Municipality">
            <Select
              onChange={(e) => {
                setBarangay('')
                setMunicipality(e.target.value)
              }}
              value={municipality}>
              <option value=""></option>
              {Address.Municipalities('02', 'QUIRINO').map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </Select>
          </Field>
          <Field label="Barangay">
            <Select onChange={(e) => setBarangay(e.target.value)} value={barangay}>
              <option value=""></option>
              {Address.Barangays('02', 'QUIRINO', municipality).map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </Select>
          </Field>
          <Field label="Purok">
            <Input defaultValue="02" size={5} type="text" />
          </Field>
        </FormRow>
        <FormFooter>
          <Button onClick={submitForm} title="Update farmer record" type="submit">
            Update Farmer Record
          </Button>
        </FormFooter>
      </Form>
    </FadeAnimation>
  )
}

export default FarmerEdit
