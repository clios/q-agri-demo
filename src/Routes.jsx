import { Redirect, Router } from '@reach/router'

import FarmParcelEdit from './pages/FarmParcelEdit'
import FarmParcelNew from './pages/FarmParcelNew'
import FarmerDashboard from './pages/FarmerDashboard'
import FarmerEdit from './pages/FarmerEdit'
import FarmerList from './pages/FarmerList'
import FarmerNew from './pages/FarmerNew'
import FarmerTabs from './layouts/FarmerTabs'
import FarmerView from './pages/FarmerView'
import React from 'react'
import Sider from './layouts/Sider'
import SignIn from './pages/SignIn'
import UserEdit from './pages/UserEdit'
import UserList from './pages/UserList'
import UserNew from './pages/UserNew'
import UserTabs from './layouts/UserTabs'
import UserView from './pages/UserView'
import YourAccountEdit from './pages/YourAccountEdit'
import YourAccountTabs from './layouts/YourAccountTabs'
import YourAccountView from './pages/YourAccountView'

function Routes() {
  return (
    <Router>
      <SignIn path="/" />
      <Sider path="/">
        <Redirect from="/your-account" to="/your-account/information" noThrow />
        <YourAccountTabs path="your-account">
          <YourAccountView path="/information" />
          <YourAccountEdit path="/information/edit" />
        </YourAccountTabs>

        <Redirect from="/farmers" to="/farmers/dashboard" noThrow />
        <FarmerTabs path="farmers">
          <FarmerDashboard path="/dashboard" />
          <FarmerList path="/records" />
          <FarmerNew path="/records/new" />
          <FarmerView path="/records/:farmer_id" />
          <FarmerEdit path="/records/:farmer_id/edit" />
          <FarmParcelNew path="/records/:farmer_id/new-farm-parcel" />
          <FarmParcelEdit path="/records/:farmer_id/edit-farm-parcel/:farm_parcel_id" />
        </FarmerTabs>

        <Redirect from="/users" to="/users/records" noThrow />
        <UserTabs path="users">
          <UserList path="/records" />
          <UserNew path="/records/new" />
          <UserView path="/records/:user_id" />
          <UserEdit path="/records/:user_id/edit" />
        </UserTabs>
      </Sider>
    </Router>
  )
}

export default Routes
