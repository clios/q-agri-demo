import './Tabs.css'

import { Map24, Meter24, TableOfContents24 } from '@carbon/icons-react'

import { Link } from '@reach/router'
import PageContent from '../components/PageContent'
import PageTitle from '../components/PageTitle'
import React from 'react'

function FarmerTabs(props) {
  function isPartiallyActive({ isPartiallyCurrent }) {
    return isPartiallyCurrent ? { className: 'tabs-item active' } : {}
  }

  return (
    <div className="tabs">
      <div className="tabs-header">
        <PageTitle title="Farmers" />
        <div className="tabs-content">
          <Link className="tabs-item" to="/farmers/dashboard" getProps={isPartiallyActive}>
            <Meter24 /> Dashboard
          </Link>
          <Link className="tabs-item" to="/farmers/records" getProps={isPartiallyActive}>
            <TableOfContents24 /> Records
          </Link>
          <Link className="tabs-item" to="/farmers/map/farmers" getProps={isPartiallyActive}>
            <Map24 /> Farmer Locations
          </Link>
        </div>
      </div>
      <PageContent>{props.children}</PageContent>
    </div>
  )
}

export default FarmerTabs
