import './Fishery.css'

import Box from './Box'
import React from 'react'
import Text from './Text'

function Fishery() {
  return (
    <div className="fishery">
      <Box>
        <Text orange>Total Area</Text>
        <Text two>82,192</Text>
        <Text>Square Meter</Text>
      </Box>
      <Box>
        <Text orange>Qty. of Fingerlings</Text>
        <Text two>8,192,927</Text>
        <Text>Pieces</Text>
      </Box>
    </div>
  )
}

export default Fishery
