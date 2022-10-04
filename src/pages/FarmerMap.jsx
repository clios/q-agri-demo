import Address from '../Address'
import DashboardToolbar from '../components/DashboardToolbar'
import Field from '../components/Field'
import Input from '../components/Input'
import PageTitle from '../components/PageTitle'
import React from 'react'
import Select from '../components/Select'

function FarmerMap() {
  const [address_municipal, setAddressMunicipal] = React.useState('')
  const [address_barangay, setAddressBarangay] = React.useState('')

  return (
    <div>
      <DashboardToolbar>
        <Field label="Municipality" status={status}>
          <Select
            onChange={(e) => {
              setAddressBarangay('')
              setAddressMunicipal(e.target.value)
            }}
            value={address_municipal}>
            <option value="">ALL MUNICIPALS</option>
            {Address.Municipalities('02', 'QUIRINO').map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </Select>
        </Field>

        <Field label="Barangay" status={status}>
          <Select onChange={(e) => setAddressBarangay(e.target.value)} value={address_barangay}>
            <option value="">ALL BARANGAYS</option>
            {Address.Barangays('02', 'QUIRINO', address_municipal).map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </Select>
        </Field>
        <Field label="Purok">
          <Input onChange={(e) => setAddressPurok(e.target.value)} size={5} type="text" />
        </Field>
        <Field label="Year" status={status}>
          <Select>
            <option>2020</option>
            <option>2021</option>
            <option>2022</option>
          </Select>
        </Field>
      </DashboardToolbar>

      <div className="map-here">MAP HERE</div>
    </div>
  )
}

export default FarmerMap
