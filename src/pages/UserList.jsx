import { Add20, Download20, Filter20, Reset20 } from '@carbon/icons-react'

import Account from '../json/account.json'
import Address from '../Address'
import ButtonIcon from '../components/ButtonIcon'
import { CSVLink } from 'react-csv'
import FadeAnimation from '../components/FadeAnimation'
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
import Users from '../json/users.json'
import { navigate } from '@reach/router'
import { toast } from 'react-toastify'

function UserList() {
  // INFORMATION STATE
  const [display, setDisplay] = React.useState(false)

  // INPUT STATE
  const [limit, setLimit] = React.useState(50)
  const [page, setPage] = React.useState(1)
  const [municipality, setMunicipality] = React.useState(Account.vicinity_municipality)
  const [barangay, setBarangay] = React.useState(Account.vicinity_barangay)

  return (
    <FadeAnimation>
      <TableToolbar>
        <Input placeholder="Search by user name" />
        <ButtonIcon className="is-gray" onClick={() => setDisplay(!display)} title={display ? 'Hide filter options' : 'Display more filter options'}>
          <Filter20 />
        </ButtonIcon>
        <ButtonIcon className="is-gray" onClick={() => toast.info('Table refreshed')} title="Refresh and reset table">
          <Reset20 />
        </ButtonIcon>
        <CSVLink
          filename={`Users.csv`}
          data={Users || []}
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
          <ButtonIcon className="is-gray" title="Download current table">
            <Download20 />
          </ButtonIcon>
        </CSVLink>
        <ButtonIcon onClick={() => navigate('/users/records/new')} label="Add User Account">
          <Add20 />
        </ButtonIcon>
      </TableToolbar>
      <SearchBox className={display ? 'display' : 'hidden'}>
        <FormRow>
          <Field label="Inactive">
            <Select>
              <option value="">ALL</option>
              <option value="yes">YES</option>
              <option value="no">NO</option>
            </Select>
          </Field>
          <Field label="Municipality">
            <Select
              onChange={(e) => {
                setBarangay('')
                setMunicipality(e.target.value)
              }}
              value={municipality}>
              <option value="">ALL MUNICIPALS</option>
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
      <Table
        status="success"
        emptyLabel="No users found"
        headers={['Index', 'Name', 'Inactive', 'Municipality', 'Barangay'].filter(Boolean)}
        total={2}>
        {Users.map((item, index) => (
          <tr key={index} onClick={() => navigate(`/users/records/${item.id}`)} title="Click to view more details">
            <td>{Help.findTableIndex(limit, page, index)}</td>
            <td>{item.name}</td>
            <td>{item.inactive ? 'YES' : 'NO'}</td>
            <td>{item.vicinity_municipality || 'ALL MUNICIPALITIES'}</td>
            <td>{item.vicinity_barangay || 'ALL BARANGAYS'}</td>
          </tr>
        ))}
      </Table>
      <TableFooter page={page} limit={limit} total={2} onUpdatePage={(data) => setPage(data)} onUpdateLimit={(data) => setLimit(data)} />
    </FadeAnimation>
  )
}

export default UserList
