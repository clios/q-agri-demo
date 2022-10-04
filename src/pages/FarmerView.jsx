import './FarmerView.css'

import { Add20, Close20, Download20, Edit20, TrashCan20 } from '@carbon/icons-react'

import Box from '../components/Box'
import ButtonIcon from '../components/ButtonIcon'
import { CSVLink } from 'react-csv'
import FadeAnimation from '../components/FadeAnimation'
import Field from '../components/Field'
import Help from '../Help'
import PaperView from '../components/PaperView'
import React from 'react'
import SectionBody from '../components/SectionBody'
import SectionFooter from '../components/SectionFooter'
import SectionHeader from '../components/SectionHeader'
import Text from '../components/Text'
import { confirmAlert } from 'react-confirm-alert'
import { navigate } from '@reach/router'
import { toast } from 'react-toastify'

function FarmerView() {
  const Farmer = {
    id: 1,
    name: 'NATHAN FLORENDO',
    birthday: '1973-11-05T06:11:56.926268Z',
    sex: 'male',
    age: 25,
    civil_status: 'single',
    spouse_name: '',
    no_of_children: null,
    name_of_children: '',
    address_municipality: 'SAGUDAY',
    address_barangay: 'DIBUL',
    address_purok: '02',
    created_at: '2021-11-05T06:11:56.926268Z',
    updated_at: '2021-11-05T06:11:56.926268Z',
    last_updated_by: 'CLIEMTOR B. FABROS'
  }

  function alertDeleteFarmer() {
    confirmAlert({
      title: 'Delete Farmer',
      buttons: [
        {
          label: 'Delete',
          onClick: () => {
            toast.success('Farmer deleted')
            navigate('/farmers/records', { replace: true })
          }
        },
        { label: 'Cancel' }
      ]
    })
  }

  function alertDeleteFarmParcel() {
    confirmAlert({
      title: 'Delete Farm Parcel',
      buttons: [
        {
          label: 'Delete',
          onClick: () => {
            toast.success('Farm parcel deleted')
          }
        },
        { label: 'Cancel' }
      ]
    })
  }

  return (
    <FadeAnimation>
      <PaperView>
        <SectionHeader bigTitle="Farmer Record">
          <CSVLink
            filename="Farmer.csv"
            data={[{ ...Farmer }] || []}
            headers={[
              { label: 'Name', key: 'name' },
              { label: 'Birthday', key: 'birthday' },
              { label: 'Sex', key: 'sex' },
              { label: 'Age', key: 'age' },
              { label: 'Civil Status', key: 'civil_status' },
              { label: 'Spouse Name', key: 'spouse_name' },
              { label: 'Total Children', key: 'no_of_children' },
              { label: 'Name of Children', key: 'name_of_children' },
              { label: 'Address Municipality', key: 'address_municipality' },
              { label: 'Address Barangay', key: 'address_barangay' },
              { label: 'Address Purok', key: 'address_purok' },
              { label: 'Date Created', key: 'created_at' },
              { label: 'Date Update', key: 'updated_at' },
              { label: 'Updated By', key: 'last_updated_by' }
            ]}>
            <ButtonIcon title="Download Farmer Info">
              <Download20 />
            </ButtonIcon>
          </CSVLink>
          <ButtonIcon onClick={() => navigate('/farmers/records/1/edit')} title="Edit farmer">
            <Edit20 />
          </ButtonIcon>
          <ButtonIcon onClick={alertDeleteFarmer} title="Delete farmer">
            <TrashCan20 />
          </ButtonIcon>
          <ButtonIcon onClick={() => navigate('/farmers/records')} title="Close">
            <Close20 />
          </ButtonIcon>
        </SectionHeader>
        <SectionBody>
          <Field label="Date Recorded" text="September 27, 2022" />
        </SectionBody>
        <SectionHeader title="I. Personal Information" />
        <SectionBody>
          <Field label="Name" text={Help.displayText(Farmer.name)} />
          <Field label="Birthday" text={Help.displayDate(Farmer.birthday)} />
          <Field label="Age" text={Help.displayNumber(Farmer.age) + ' years old'} />
          <Field label="Sex" text={Help.displayText(Farmer.sex)} />
          <Field label="Civil Status" text={Help.displayText(Farmer.civil_status)} />
          <Field label="Main Livelihood" text="OWNER" />
          <Field label="Spouse Name" text={Help.displayText(Farmer.spouse_name)} />
          <Field label="Total Children" text={Help.displayNumber(Farmer.no_of_children)} />
        </SectionBody>
        <SectionHeader title="II. Address and Coordinates" />
        <SectionBody>
          <Field label="Region" text="02" />
          <Field label="Province" text="QUIRINO" />
          <Field label="Municipality" text={Help.displayText(Farmer.address_municipality)} />
          <Field label="Barangay" text={Help.displayText(Farmer.address_barangay)} />
          <Field label="Purok" text={Help.displayText(Farmer.address_purok)} />
          <Field label="Latitude" text="NOT FOUND" />
          <Field label="Longitude" text="NOT FOUND" />
        </SectionBody>
        <SectionHeader title="III. Farm Profile">
          <ButtonIcon onClick={() => navigate('/farmers/records/1/new-farm-parcel')} label="Add Farm Record">
            <Add20 />
          </ButtonIcon>
        </SectionHeader>
        <SectionBody>
          <Box className="farmer-view-box">
            <div className="farmer-view-box-content">
              <div className="farmer-view-box-content-item">
                <Text blue>{Help.displayTags(['SAGUDAY', 'RIZAL'])}, PUROK 03</Text>
              </div>
              <div className="farmer-view-box-content-item">
                <Field label="Rice" text="1 hectare " />
                <Field label="Corn" text="2 hectare" />
              </div>
              <div className="farmer-view-box-content-item">
                <Text blue italic>
                  Updated by CLIEMTOR B. FABROS | FRIDAY, NOVEMBER 5, 2021, 2:11:56 PM
                </Text>
              </div>
            </div>
            <div className="farmer-view-box-toolbar">
              <ButtonIcon onClick={() => navigate('farmers/records/1/edit-farm-parcel/1')}>
                <Edit20 />
              </ButtonIcon>
              <ButtonIcon onClick={alertDeleteFarmParcel}>
                <TrashCan20 />
              </ButtonIcon>
            </div>
          </Box>
        </SectionBody>
      </PaperView>
    </FadeAnimation>
  )
}

export default FarmerView
