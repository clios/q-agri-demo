import Address from '../Address'
import Age from '../components/Age'
import ButtonIcon from '../components/ButtonIcon'
import CivilStatus from '../components/CivilStatus'
import DashboardContent from '../components/DashboardContent'
import DashboardItem from '../components/DashboardItem'
import DashboardToolbar from '../components/DashboardToolbar'
import FadeAnimation from '../components/FadeAnimation'
import Field from '../components/Field'
import Fishery from '../components/Fishery'
import HighValueCrops from '../components/HighValueCrops'
import Livestock from '../components/Livestock'
import Poultry from '../components/Poultry'
import React from 'react'
import { Reset20 } from '@carbon/icons-react'
import RiceAndCorn from '../components/RiceAndCorn'
import Select from '../components/Select'
import TotalFarmers from '../components/TotalFarmers'
import { toast } from 'react-toastify'

function FarmerDashboard() {
  // INPUT STATE
  const [municipality, setMunicipality] = React.useState('')
  const [barangay, setBarangay] = React.useState('')

  // REFRESH AND RESET TABLE
  function refreshDashboard() {
    toast.info('Dashboard refreshed')
  }

  return (
    <FadeAnimation>
      <DashboardToolbar
        action={
          <ButtonIcon className="is-gray" onClick={refreshDashboard} title="Refresh">
            <Reset20 />
          </ButtonIcon>
        }>
        <Field label="Municipality">
          <Select
            onChange={(e) => {
              setBarangay('')
              setMunicipality(e.target.value)
            }}
            value={municipality}>
            <option value="">ALL MUNICIPALITIES</option>
            {Address.Municipalities('02', 'QUIRINO').map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </Select>
        </Field>
        <Field label="Barangay">
          <Select onChange={(e) => setBarangay(e.target.value)} value={barangay}>
            <option value="">ALL BARANGAYS</option>
            {Address.Barangays('02', 'QUIRINO', municipality).map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </Select>
        </Field>
        <Field label="Year">
          <Select defaultValue="2022">
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
          </Select>
        </Field>
      </DashboardToolbar>

      <DashboardContent>
        <DashboardItem title="Farmer Population">
          <TotalFarmers />
        </DashboardItem>
      </DashboardContent>

      <DashboardContent>
        <DashboardItem title="Population Per Age">
          <Age />
        </DashboardItem>
      </DashboardContent>

      <DashboardContent>
        <DashboardItem title="Population Per Civil Status">
          <CivilStatus />
        </DashboardItem>
      </DashboardContent>

      <DashboardContent>
        <DashboardItem title="Rice And Corn">
          <RiceAndCorn />
        </DashboardItem>
      </DashboardContent>

      <DashboardContent>
        <DashboardItem title="High Value Crops">
          <HighValueCrops />
        </DashboardItem>
      </DashboardContent>

      <DashboardContent>
        <DashboardItem title="Livestock">
          <Livestock />
        </DashboardItem>
      </DashboardContent>

      <DashboardContent>
        <DashboardItem title="Poultry">
          <Poultry />
        </DashboardItem>
      </DashboardContent>

      <DashboardContent>
        <DashboardItem title="Fishery">
          <Fishery />
        </DashboardItem>
      </DashboardContent>
    </FadeAnimation>
  )
}

export default FarmerDashboard
