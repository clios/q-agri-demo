import './Tabs.css'

import { Link } from '@reach/router'
import PageContent from '../components/PageContent'
import PageTitle from '../components/PageTitle'
import React from 'react'
import { TableOfContents24 } from '@carbon/icons-react'

function UserTabs(props) {
  function isPartiallyActive({ isPartiallyCurrent }) {
    return isPartiallyCurrent ? { className: 'tabs-item active' } : {}
  }

  return (
    <div className="tabs">
      <div className="tabs-header">
        <PageTitle title="Users" />
        <div className="tabs-content">
          <Link className="tabs-item" to="/users/records" getProps={isPartiallyActive}>
            <TableOfContents24 /> Records
          </Link>
        </div>
      </div>
      <PageContent>{props.children}</PageContent>
    </div>
  )
}

export default UserTabs
