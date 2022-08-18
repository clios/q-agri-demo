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

function FarmParcelEdit() {
  // INPUT STATE
  const [municipality, setMunicipality] = React.useState('SAGUDAY')
  const [barangay, setBarangay] = React.useState('DIBUL')

  function submitForm(e) {
    e.preventDefault()
    navigate(-1, { replace: true })
    toast.success('Farm parcel updated')
  }

  return (
    <FadeAnimation>
      <Form>
        <SectionHeader title="Farm Parcel Information">
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
        <SectionHeader title="Rice and/or Corn Field Area (square meter)" />
        <FormRow>
          <Field label="Rice Field">
            <Cleave
              className="input"
              size={5}
              value={249}
              onChange={() => null}
              options={{
                numeral: true,
                numeralIntegerScale: 5,
                numeralDecimalScale: 3,
                numeralPositiveOnly: true,
                numeralThousandsGroupStyle: 'none'
              }}
            />
          </Field>
          <Field label="Corn Field">
            <Cleave
              className="input"
              size={5}
              value={173}
              onChange={() => null}
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
        <SectionHeader title="High Value Crops Area (square meter)" />
        <FormRow>
          <Field label="Vegetables">
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
          <Field label="Fruit Trees">
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
          <Field label="Banana">
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
          <Field label="Cassava">
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
          <Field label="Pineapple">
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
          <Field label="Coffee">
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
          <Field label="Cacao">
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
          <Field label="Other">
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
        <SectionHeader title="Livestock (total head)" />
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
          <Field label="Other">
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
        <SectionHeader title="Poultry (total head)" />
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
          <Field label="Other">
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
        <SectionHeader title="Fishery" />
        <FormRow>
          <Field label="Fish Pond Area (square meter)">
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
            <Input type="text" />
          </Field>
        </FormRow>
        <FormFooter>
          <Button onClick={submitForm} title="Create farm parcel" type="submit">
            Update Farm Parcel Record
          </Button>
        </FormFooter>
      </Form>
    </FadeAnimation>
  )
}

export default FarmParcelEdit
