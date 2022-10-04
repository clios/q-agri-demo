import Address from '../Address'
import Box from '../components/Box'
import Button from '../components/Button'
import ButtonIcon from '../components/ButtonIcon'
import Checkbox from '../components/Checkbox'
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
  const [rice, setRice] = React.useState(false)
  const [corn, setCorn] = React.useState(false)
  const [hvc, setHvc] = React.useState(false)
  const [livestock, setLivestock] = React.useState(false)
  const [poultry, setPoultry] = React.useState(false)
  const [fishpond, setFishpond] = React.useState(false)

  function submitForm(e) {
    e.preventDefault()
    navigate(-1, { replace: true })
    toast.success('Farm parcel created')
  }

  return (
    <FadeAnimation>
      <Form>
        <SectionHeader bigTitle="New Farm Form">
          <ButtonIcon onClick={() => navigate(-1)} title="Close this form">
            <Close20 />
          </ButtonIcon>
        </SectionHeader>
        <SectionHeader title="1. Ownership" />
        <FormRow>
          <Field label="">
            <Select>
              <option>NO ANSWER</option>
              <option>OWNED</option>
              <option>TENANT</option>
            </Select>
          </Field>
        </FormRow>
        <SectionHeader title="2. Address and Coordinates" />
        <FormRow>
          <Field label="Region">
            <Select disabled>
              <option>02</option>
            </Select>
          </Field>
          <Field label="Province">
            <Select disabled>
              <option>QUIRINO</option>
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
        <SectionHeader title="3. Type of Farming Activity" />
        <FormRow>
          <Field>
            <Checkbox text="3.1 RICE" onChange={(e) => setRice(e.target.checked)} />
          </Field>
          <Field>
            <Checkbox text="3.2 CORN" onChange={(e) => setCorn(e.target.checked)} />
          </Field>
          <Field>
            <Checkbox text="3.3 HVC" onChange={(e) => setHvc(e.target.checked)} />
          </Field>
          <Field>
            <Checkbox text="3.4 LIVESTOCK" onChange={(e) => setLivestock(e.target.checked)} />
          </Field>
          <Field>
            <Checkbox text="3.5 POULTRY" onChange={(e) => setPoultry(e.target.checked)} />
          </Field>
          <Field>
            <Checkbox text="3.6 FISH POND" onChange={(e) => setFishpond(e.target.checked)} />
          </Field>
        </FormRow>
        {rice === true && (
          <FadeAnimation>
            <SectionHeader title="3.1 Rice" />
            <FormRow>
              <Field label="Irrigated">
                <Cleave
                  className="input"
                  disabled
                  options={{
                    numeral: true,
                    numeralIntegerScale: 5,
                    numeralDecimalScale: 3,
                    numeralPositiveOnly: true,
                    numeralThousandsGroupStyle: 'none'
                  }}
                  placeholder="Hectere"
                  size={13}
                  title="Available soon..."
                />
              </Field>
              <Field label="Rainfed">
                <Cleave
                  className="input"
                  disabled
                  size={13}
                  placeholder="Hectere"
                  options={{
                    numeral: true,
                    numeralIntegerScale: 5,
                    numeralDecimalScale: 3,
                    numeralPositiveOnly: true,
                    numeralThousandsGroupStyle: 'none'
                  }}
                  title="Available soon..."
                />
              </Field>
              <Field label="Upland">
                <Cleave
                  className="input"
                  disabled
                  size={13}
                  placeholder="Hectere"
                  options={{
                    numeral: true,
                    numeralIntegerScale: 5,
                    numeralDecimalScale: 3,
                    numeralPositiveOnly: true,
                    numeralThousandsGroupStyle: 'none'
                  }}
                  title="Available soon..."
                />
              </Field>
              <Field label="Total Area">
                <Cleave
                  className="input"
                  size={13}
                  placeholder="Hectere"
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
          </FadeAnimation>
        )}
        {corn === true && (
          <FadeAnimation>
            <SectionHeader title="3.2 Corn" />
            <FormRow>
              <Field label="Lower Vega">
                <Cleave
                  className="input"
                  disabled
                  placeholder="Hectare"
                  size={13}
                  options={{
                    numeral: true,
                    numeralIntegerScale: 5,
                    numeralDecimalScale: 3,
                    numeralPositiveOnly: true,
                    numeralThousandsGroupStyle: 'none'
                  }}
                  title="Available soon..."
                />
              </Field>
              <Field label="Upper Vega">
                <Cleave
                  className="input"
                  disabled
                  placeholder="Hectare"
                  size={13}
                  options={{
                    numeral: true,
                    numeralIntegerScale: 5,
                    numeralDecimalScale: 3,
                    numeralPositiveOnly: true,
                    numeralThousandsGroupStyle: 'none'
                  }}
                  title="Available soon..."
                />
              </Field>
              <Field label="Broad Plain">
                <Cleave
                  className="input"
                  disabled
                  placeholder="Hectare"
                  size={13}
                  options={{
                    numeral: true,
                    numeralIntegerScale: 5,
                    numeralDecimalScale: 3,
                    numeralPositiveOnly: true,
                    numeralThousandsGroupStyle: 'none'
                  }}
                  title="Available soon..."
                />
              </Field>
              <Field label="Hilly Areas">
                <Cleave
                  className="input"
                  disabled
                  placeholder="Hectare"
                  size={13}
                  options={{
                    numeral: true,
                    numeralIntegerScale: 5,
                    numeralDecimalScale: 3,
                    numeralPositiveOnly: true,
                    numeralThousandsGroupStyle: 'none'
                  }}
                  title="Available soon..."
                />
              </Field>
              <Field label="Total Area">
                <Cleave
                  className="input"
                  placeholder="Hectare"
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
          </FadeAnimation>
        )}
        {hvc === true && (
          <FadeAnimation>
            <SectionHeader title="3.3 High Value Crops" />
            <FormRow>
              <Field label="Banana - Lakatan">
                <Cleave
                  className="input"
                  disabled
                  placeholder="Hectare"
                  size={13}
                  options={{
                    numeral: true,
                    numeralIntegerScale: 5,
                    numeralDecimalScale: 3,
                    numeralPositiveOnly: true,
                    numeralThousandsGroupStyle: 'none'
                  }}
                  title="Available soon..."
                />
              </Field>
              <Field label="Banana - Latundan">
                <Cleave
                  className="input"
                  disabled
                  placeholder="Hectare"
                  size={13}
                  options={{
                    numeral: true,
                    numeralIntegerScale: 5,
                    numeralDecimalScale: 3,
                    numeralPositiveOnly: true,
                    numeralThousandsGroupStyle: 'none'
                  }}
                  title="Available soon..."
                />
              </Field>
              <Field label="Banana - Saba">
                <Cleave
                  className="input"
                  disabled
                  placeholder="Hectare"
                  size={13}
                  options={{
                    numeral: true,
                    numeralIntegerScale: 5,
                    numeralDecimalScale: 3,
                    numeralPositiveOnly: true,
                    numeralThousandsGroupStyle: 'none'
                  }}
                  title="Available soon..."
                />
              </Field>
              <Field label="Banana - Total">
                <Cleave
                  className="input"
                  placeholder="Hectare"
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
            <FormRow>
              <Field label="Cacao - Total">
                <Cleave
                  className="input"
                  placeholder="Hectare"
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
            <FormRow>
              <Field label="Coffee - Arabica">
                <Cleave
                  className="input"
                  disabled
                  placeholder="Hectare"
                  size={13}
                  options={{
                    numeral: true,
                    numeralIntegerScale: 5,
                    numeralDecimalScale: 3,
                    numeralPositiveOnly: true,
                    numeralThousandsGroupStyle: 'none'
                  }}
                  title="Available soon..."
                />
              </Field>
              <Field label="Coffee - Liberica">
                <Cleave
                  className="input"
                  disabled
                  placeholder="Hectare"
                  size={13}
                  options={{
                    numeral: true,
                    numeralIntegerScale: 5,
                    numeralDecimalScale: 3,
                    numeralPositiveOnly: true,
                    numeralThousandsGroupStyle: 'none'
                  }}
                  title="Available soon..."
                />
              </Field>
              <Field label="Coffee - Robusta">
                <Cleave
                  className="input"
                  disabled
                  placeholder="Hectare"
                  size={13}
                  options={{
                    numeral: true,
                    numeralIntegerScale: 5,
                    numeralDecimalScale: 3,
                    numeralPositiveOnly: true,
                    numeralThousandsGroupStyle: 'none'
                  }}
                  title="Available soon..."
                />
              </Field>
              <Field label="Coffee - Total">
                <Cleave
                  className="input"
                  placeholder="Hectare"
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
            <FormRow>
              <Field label="Fruit - Calamansi">
                <Cleave
                  className="input"
                  disabled
                  placeholder="Hectare"
                  size={13}
                  options={{
                    numeral: true,
                    numeralIntegerScale: 5,
                    numeralDecimalScale: 3,
                    numeralPositiveOnly: true,
                    numeralThousandsGroupStyle: 'none'
                  }}
                  title="Available soon..."
                />
              </Field>
              <Field label="Fruit - Guyabano">
                <Cleave
                  className="input"
                  disabled
                  placeholder="Hectare"
                  size={13}
                  options={{
                    numeral: true,
                    numeralIntegerScale: 5,
                    numeralDecimalScale: 3,
                    numeralPositiveOnly: true,
                    numeralThousandsGroupStyle: 'none'
                  }}
                  title="Available soon..."
                />
              </Field>
              <Field label="Fruit - Lemon">
                <Cleave
                  className="input"
                  disabled
                  placeholder="Hectare"
                  size={13}
                  options={{
                    numeral: true,
                    numeralIntegerScale: 5,
                    numeralDecimalScale: 3,
                    numeralPositiveOnly: true,
                    numeralThousandsGroupStyle: 'none'
                  }}
                  title="Available soon..."
                />
              </Field>
              <Field label="Fruit - Mandarin">
                <Cleave
                  className="input"
                  disabled
                  placeholder="Hectare"
                  size={13}
                  options={{
                    numeral: true,
                    numeralIntegerScale: 5,
                    numeralDecimalScale: 3,
                    numeralPositiveOnly: true,
                    numeralThousandsGroupStyle: 'none'
                  }}
                  title="Available soon..."
                />
              </Field>
              <Field label="Fruit - Mango">
                <Cleave
                  className="input"
                  disabled
                  placeholder="Hectare"
                  size={13}
                  options={{
                    numeral: true,
                    numeralIntegerScale: 5,
                    numeralDecimalScale: 3,
                    numeralPositiveOnly: true,
                    numeralThousandsGroupStyle: 'none'
                  }}
                  title="Available soon..."
                />
              </Field>
              <Field label="Fruit - Pomelo">
                <Cleave
                  className="input"
                  disabled
                  placeholder="Hectare"
                  size={13}
                  options={{
                    numeral: true,
                    numeralIntegerScale: 5,
                    numeralDecimalScale: 3,
                    numeralPositiveOnly: true,
                    numeralThousandsGroupStyle: 'none'
                  }}
                  title="Available soon..."
                />
              </Field>
              <Field label="Fruit - Rambutan">
                <Cleave
                  className="input"
                  disabled
                  placeholder="Hectare"
                  size={13}
                  options={{
                    numeral: true,
                    numeralIntegerScale: 5,
                    numeralDecimalScale: 3,
                    numeralPositiveOnly: true,
                    numeralThousandsGroupStyle: 'none'
                  }}
                  title="Available soon..."
                />
              </Field>
              <Field label="Fruit Tree - Total">
                <Cleave
                  className="input"
                  placeholder="Hectare"
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
            <FormRow>
              <Field label="Root Crops - Potato">
                <Cleave
                  className="input"
                  disabled
                  placeholder="Hectare"
                  size={13}
                  options={{
                    numeral: true,
                    numeralIntegerScale: 5,
                    numeralDecimalScale: 3,
                    numeralPositiveOnly: true,
                    numeralThousandsGroupStyle: 'none'
                  }}
                  title="Available soon..."
                />
              </Field>
              <Field label="Root Crops - Taro">
                <Cleave
                  className="input"
                  disabled
                  placeholder="Hectare"
                  size={13}
                  options={{
                    numeral: true,
                    numeralIntegerScale: 5,
                    numeralDecimalScale: 3,
                    numeralPositiveOnly: true,
                    numeralThousandsGroupStyle: 'none'
                  }}
                  title="Available soon..."
                />
              </Field>
              <Field label="Root Crops - Ube">
                <Cleave
                  className="input"
                  disabled
                  placeholder="Hectare"
                  size={13}
                  options={{
                    numeral: true,
                    numeralIntegerScale: 5,
                    numeralDecimalScale: 3,
                    numeralPositiveOnly: true,
                    numeralThousandsGroupStyle: 'none'
                  }}
                  title="Available soon..."
                />
              </Field>
              <Field label="Root Crops - Total">
                <Cleave
                  className="input"
                  placeholder="Hectare"
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
            <FormRow>
              <Field label="Spices - Ginger">
                <Cleave
                  className="input"
                  disabled
                  placeholder="Hectare"
                  size={13}
                  options={{
                    numeral: true,
                    numeralIntegerScale: 5,
                    numeralDecimalScale: 3,
                    numeralPositiveOnly: true,
                    numeralThousandsGroupStyle: 'none'
                  }}
                  title="Available soon..."
                />
              </Field>
              <Field label="Spices - Onion">
                <Cleave
                  className="input"
                  disabled
                  placeholder="Hectare"
                  size={13}
                  options={{
                    numeral: true,
                    numeralIntegerScale: 5,
                    numeralDecimalScale: 3,
                    numeralPositiveOnly: true,
                    numeralThousandsGroupStyle: 'none'
                  }}
                  title="Available soon..."
                />
              </Field>
              <Field label="Spices - Total">
                <Cleave
                  className="input"
                  placeholder="Hectare"
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
            <FormRow>
              <Field label="Vegetable - Total">
                <Cleave
                  className="input"
                  placeholder="Hectare"
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
            <FormRow>
              <Field label="Total Area of HVC">
                <Cleave
                  className="input"
                  placeholder="Hectare"
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
          </FadeAnimation>
        )}
        {livestock === true && (
          <FadeAnimation>
            <SectionHeader title="3.4 Livestock" />
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
                  placeholder="Head"
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
                  placeholder="Head"
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
                  placeholder="Head"
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
                  placeholder="Head"
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
                  placeholder="Head"
                />
              </Field>
            </FormRow>
          </FadeAnimation>
        )}
        {poultry === true && (
          <FadeAnimation>
            <SectionHeader title="3.5 Poultry" />
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
                  placeholder="Head"
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
                  placeholder="Head"
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
                  placeholder="Head"
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
                  placeholder="Head"
                />
              </Field>
            </FormRow>
          </FadeAnimation>
        )}
        {fishpond === true && (
          <FadeAnimation>
            <SectionHeader title="3.6 Fish Pond" />
            <FormRow>
              <Field label="Total Area">
                <Cleave
                  className="input"
                  options={{
                    numeral: true,
                    numeralIntegerScale: 5,
                    numeralDecimalScale: 3,
                    numeralPositiveOnly: true,
                    numeralThousandsGroupStyle: 'none'
                  }}
                  placeholder="Square meter"
                />
              </Field>
              <Field label="Qty. of Fingerlings">
                <Cleave
                  className="input"
                  options={{
                    numeral: true,
                    numeralIntegerScale: 5,
                    numeralDecimalScale: 3,
                    numeralPositiveOnly: true,
                    numeralThousandsGroupStyle: 'none'
                  }}
                  placeholder="Pieces"
                />
              </Field>
            </FormRow>
          </FadeAnimation>
        )}
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
