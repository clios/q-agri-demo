import { Add20, Download20, Filter20, Reset20 } from '@carbon/icons-react'

import Address from '../Address'
import ButtonIcon from '../components/ButtonIcon'
import { CSVLink } from 'react-csv'
import FadeAnimation from '../components/FadeAnimation'
import Farmers from '../json/farmers.json'
import Field from '../components/Field'
import FormRow from '../components/FormRow'
import Help from '../Help'
import Input from '../components/Input'
import React from 'react'
import SearchBox from '../components/SearchBox'
import Select from '../components/Select'
import Table from '../components/Table'
import TableFooter from '../components/TableFooter'
import TableToolbar from '../components/TableToolbar'
import { navigate } from '@reach/router'
import { toast } from 'react-toastify'

function FarmerList() {
  // INFORMATION STATE
  const [display, setDisplay] = React.useState(false)

  // INPUT STATE
  const [limit, setLimit] = React.useState(50)
  const [page, setPage] = React.useState(1)
  const [municipality, setMunicipality] = React.useState('')
  const [barangay, setBarangay] = React.useState('')

  return (
    <FadeAnimation>
      <TableToolbar>
        <Input className="table-toolbar-search" placeholder="Search by name" />
        <ButtonIcon className="is-gray" onClick={() => setDisplay(!display)} title={display ? 'Hide filter options' : 'Display more filter options'}>
          <Filter20 />
        </ButtonIcon>
        <ButtonIcon className="is-gray" onClick={() => toast.info('Table refreshed')} title="Refresh and reset table">
          <Reset20 />
        </ButtonIcon>
        <CSVLink
          filename={`Farmers.csv`}
          data={Farmers || []}
          headers={[
            { label: 'Name', key: 'name' },
            { label: 'Birthday', key: 'birthday' },
            { label: 'Sex', key: 'sex' },
            { label: 'Age', key: 'age' },
            { label: 'Civil Status', key: 'civil_status' },
            { label: 'Spouse Name', key: 'spouse_name' },
            { label: 'No. of Children', key: 'no_of_children' },
            { label: 'Name of Children', key: 'name_of_children' },
            { label: 'Municipality', key: 'municipality' },
            { label: 'Barangay', key: 'barangay' },
            { label: 'Purok', key: 'purok' },
            { label: 'Date Created', key: 'created_at' },
            { label: 'Date Updated', key: 'updated_at' },
            { label: 'Updated By', key: 'last_updated_by' }
          ]}>
          <ButtonIcon className="is-gray" title="Download current table">
            <Download20 />
          </ButtonIcon>
        </CSVLink>
        <ButtonIcon onClick={() => navigate('/farmers/records/new')} label="Add Farmer Record">
          <Add20 />
        </ButtonIcon>
      </TableToolbar>
      <SearchBox className={display ? 'display' : 'hidden'}>
        <FormRow>
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
          <Field label="Order By">
            <Select>
              <option value="name:desc">NAME (DESC)</option>
              <option value="name:asc">NAME (ASC)</option>
              <option value="munipality:desc">MUNICIPALITY (DESC)</option>
              <option value="munipality:asc">MUNICIPALITY (ASC)</option>
              <option value="barangay:desc">BARANGAY (DESC)</option>
              <option value="barangay:asc">BARANGAY (ASC)</option>
            </Select>
          </Field>
        </FormRow>
      </SearchBox>
      <Table status="success" emptyLabel="No farmers found" headers={['Index', 'Name', 'Municipality', 'Barangay'].filter(Boolean)} total={1}>
        {Farmers.map((item, index) => (
          <tr key={index} onClick={() => navigate(`/farmers/records/${item.id}`)} title="Click to view more details">
            <td>{Help.findTableIndex(limit, page, index)}</td>
            <td>{item.name}</td>
            <td>{item.address_municipality}</td>
            <td>{item.address_barangay}</td>
          </tr>
        ))}
      </Table>
      <TableFooter page={page} limit={limit} total={1} onUpdatePage={(data) => setPage(data)} onUpdateLimit={(data) => setLimit(data)} />
    </FadeAnimation>
  )
}

export default FarmerList
