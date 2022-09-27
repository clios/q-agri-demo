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
import Help from '../Help'
import Input from '../components/Input'
import React from 'react'
import SectionHeader from '../components/SectionHeader'
import Select from '../components/Select'
import { navigate } from '@reach/router'
import { toast } from 'react-toastify'

function FarmParcelNew() {
  // INPUT STATE
  const [address_municipal, setAddressMunicipal] = React.useState('')
  const [address_barangay, setAddressBarangay] = React.useState('')
  const [address_latitude, setAddressLatitude] = React.useState('')
  const [address_longitude, setAddressLongitude] = React.useState('')

  function submitForm(e) {
    e.preventDefault()
    navigate(-1, { replace: true })
    toast.success('Farm parcel created')
  }

  return (
    <FadeAnimation>
      <Form>
        <SectionHeader title="Farm Information">
          <ButtonIcon onClick={() => navigate(-1)} title="Close this form">
            <Close20 />
          </ButtonIcon>
        </SectionHeader>
        <FormRow>
          <Field label="Ownership">
            <Select>
              <option>NO ANSWER</option>
              <option>OWNED</option>
              <option>TENANT</option>
            </Select>
          </Field>
        </FormRow>
        <SectionHeader title="Address" />
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
                setAddressBarangay('')
                setAddressMunicipal(e.target.value)
              }}
              value={address_municipal}>
              <option value=""></option>
              {Address.Municipalities('02', 'QUIRINO').map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </Select>
          </Field>
          <Field label="Barangay">
            <Select onChange={(e) => setAddressBarangay(e.target.value)} value={address_barangay}>
              <option value=""></option>
              {Address.Barangays('02', 'QUIRINO', address_municipal).map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </Select>
          </Field>
          <Field label="Purok">
            <Input type="text" size={10} />
          </Field>
          <Field error={Help.address_latitude} label="Latitude" status={status}>
            <Cleave
              className="input"
              onChange={(e) => setAddressLatitude(e.target.value)}
              size={20}
              type="text"
              options={{
                numeral: true,
                numeralIntegerScale: 3,
                numeralDecimalScale: 15,
                numeralThousandsGroupStyle: 'none'
              }}
              value={address_latitude}
            />
          </Field>
          <Field error={Help.address_longitude} label="Longitude" status={status}>
            <Cleave
              className="input"
              onChange={(e) => setAddressLongitude(e.target.value)}
              size={20}
              type="text"
              options={{
                numeral: true,
                numeralIntegerScale: 3,
                numeralDecimalScale: 15,
                numeralThousandsGroupStyle: 'none'
              }}
              value={address_longitude}
            />
          </Field>
        </FormRow>
        <SectionHeader title="Rice Field" />
        <FormRow>
          <Field label="Total Area in Hectare">
            <Cleave
              className="input"
              size={13}
              options={{
                numeral: true,
                numeralIntegerScale: 5,
                numeralDecimalScale: 3,
                numeralPositiveOnly: true,
                numeralThousandsGroupStyle: 'none'
              }}
            />
          </Field>
        </FormRow>
        <SectionHeader title="Corn Field" />
        <FormRow>
          <Field label="Total Area in Hectare">
            <Cleave
              className="input"
              size={13}
              options={{
                numeral: true,
                numeralIntegerScale: 5,
                numeralDecimalScale: 3,
                numeralPositiveOnly: true,
                numeralThousandsGroupStyle: 'none'
              }}
            />
          </Field>
        </FormRow>
        <SectionHeader title="High Value Crops" />
        <FormRow>
          <Field label="Variety">
            <Select>
              <option></option>
              <option>Banana</option>
              <option>Cacao</option>
              <option>Coffee</option>
              <option>Fruit Tree</option>
              <option>Root Crops</option>
              <option>Spices</option>
              <option>Vegetables</option>
            </Select>
          </Field>
          <Field label="Total Area in Hectare">
            <Cleave
              className="input"
              size={13}
              options={{
                numeral: true,
                numeralIntegerScale: 5,
                numeralDecimalScale: 3,
                numeralPositiveOnly: true,
                numeralThousandsGroupStyle: 'none'
              }}
            />
          </Field>
        </FormRow>
        <SectionHeader title="Livestock Total Head" />
        <FormRow>
          <Field label="Goat">
            <Cleave
              className="input"
              size={5}
              options={{
                numeral: true,
                numeralIntegerScale: 5,
                numeralDecimalScale: 3,
                numeralPositiveOnly: true,
                numeralThousandsGroupStyle: 'none'
              }}
            />
          </Field>
          <Field label="Pig">
            <Cleave
              className="input"
              size={5}
              options={{
                numeral: true,
                numeralIntegerScale: 5,
                numeralDecimalScale: 3,
                numeralPositiveOnly: true,
                numeralThousandsGroupStyle: 'none'
              }}
            />
          </Field>
          <Field label="Cattle">
            <Cleave
              className="input"
              size={5}
              options={{
                numeral: true,
                numeralIntegerScale: 5,
                numeralDecimalScale: 3,
                numeralPositiveOnly: true,
                numeralThousandsGroupStyle: 'none'
              }}
            />
          </Field>
          <Field label="Carabao">
            <Cleave
              className="input"
              size={5}
              options={{
                numeral: true,
                numeralIntegerScale: 5,
                numeralDecimalScale: 3,
                numeralPositiveOnly: true,
                numeralThousandsGroupStyle: 'none'
              }}
            />
          </Field>
          <Field label="Sheep">
            <Cleave
              className="input"
              size={5}
              options={{
                numeral: true,
                numeralIntegerScale: 5,
                numeralDecimalScale: 3,
                numeralPositiveOnly: true,
                numeralThousandsGroupStyle: 'none'
              }}
            />
          </Field>
        </FormRow>
        <SectionHeader title="Poultry Total Head" />
        <FormRow>
          <Field label="Chicken">
            <Cleave
              className="input"
              size={5}
              options={{
                numeral: true,
                numeralIntegerScale: 5,
                numeralDecimalScale: 3,
                numeralPositiveOnly: true,
                numeralThousandsGroupStyle: 'none'
              }}
            />
          </Field>
          <Field label="Duck">
            <Cleave
              className="input"
              size={5}
              options={{
                numeral: true,
                numeralIntegerScale: 5,
                numeralDecimalScale: 3,
                numeralPositiveOnly: true,
                numeralThousandsGroupStyle: 'none'
              }}
            />
          </Field>
          <Field label="Goose">
            <Cleave
              className="input"
              size={5}
              options={{
                numeral: true,
                numeralIntegerScale: 5,
                numeralDecimalScale: 3,
                numeralPositiveOnly: true,
                numeralThousandsGroupStyle: 'none'
              }}
            />
          </Field>
          <Field label="Turkey">
            <Cleave
              className="input"
              size={5}
              options={{
                numeral: true,
                numeralIntegerScale: 5,
                numeralDecimalScale: 3,
                numeralPositiveOnly: true,
                numeralThousandsGroupStyle: 'none'
              }}
            />
          </Field>
        </FormRow>
        <SectionHeader title="Fish Pond" />
        <FormRow>
          <Field label="Total Area in Square Meter">
            <Cleave
              className="input"
              options={{
                numeral: true,
                numeralIntegerScale: 5,
                numeralDecimalScale: 3,
                numeralPositiveOnly: true,
                numeralThousandsGroupStyle: 'none'
              }}
            />
          </Field>
          <Field label="Total Fingerlings">
            <Cleave
              className="input"
              options={{
                numeral: true,
                numeralIntegerScale: 5,
                numeralDecimalScale: 3,
                numeralPositiveOnly: true,
                numeralThousandsGroupStyle: 'none'
              }}
            />
          </Field>
        </FormRow>

        <FormFooter>
          <Button onClick={submitForm} title="Create farm parcel" type="submit">
            Create Farm Record
          </Button>
        </FormFooter>
      </Form>
    </FadeAnimation>
  )
}

export default FarmParcelNew
