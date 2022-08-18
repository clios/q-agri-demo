import './Tabs.css'

import { Information24 } from '@carbon/icons-react'
import { Link } from '@reach/router'
import PageContent from '../components/PageContent'
import PageTitle from '../components/PageTitle'
import React from 'react'

function YourAccountTabs(props) {
  function isPartiallyActive({ isPartiallyCurrent }) {
    return isPartiallyCurrent ? { className: 'tabs-item active' } : {}
  }

  return (
    <div className="tabs">
      <div className="tabs-header">
        <PageTitle title="Your Account" />
        <div className="tabs-content">
          <Link className="tabs-item" to="/your-account/information" getProps={isPartiallyActive}>
            <Information24 /> Information
          </Link>
        </div>
      </div>
      <PageContent>{props.children}</PageContent>
    </div>
  )
}

export default YourAccountTabs
