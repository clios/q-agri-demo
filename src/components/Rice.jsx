import './Rice.css'

import Box from './Box'
import React from 'react'
import Text from './Text'

function Rice() {
  return (
    <div className="rice">
      <Box>
        <Text orange>Irrigated</Text>
        <Text two>32,261</Text>
        <Text>Hectare</Text>
      </Box>
      <Box>
        <Text orange>Rainfed</Text>
        <Text two>32,261</Text>
        <Text>Hectare</Text>
      </Box>
      <Box>
        <Text orange>Upland</Text>
        <Text two>32,261</Text>
        <Text>Hectare</Text>
      </Box>
      <Box>
        <Text orange>Total</Text>
        <Text two>96,261</Text>
        <Text>Hectare</Text>
      </Box>
    </div>
  )
}

export default Rice
