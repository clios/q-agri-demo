import './Fishery.css'

import Box from './Box'
import React from 'react'
import Text from './Text'

function Fishery() {
  return (
    <div className="fishery">
      <Box>
        <Text orange>Total Square Meter Area</Text>
        <Text two>82,192</Text>
      </Box>
      <Box>
        <Text orange>Total Fingerlings</Text>
        <Text two>8,192,927</Text>
      </Box>
    </div>
  )
}

export default Fishery
