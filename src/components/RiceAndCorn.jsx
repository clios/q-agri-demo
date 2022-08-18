import './RiceAndCorn.css'

import Box from './Box'
import React from 'react'
import Text from './Text'

function RiceAndCorn() {
  return (
    <div className="rice-and-corn">
      <Box>
        <Text orange>Rice Field Total Area</Text>
        <Text two>1,832,261</Text>
        <Text>Square Meter</Text>
      </Box>
      <Box>
        <Text orange>Corn Field Total Area</Text>
        <Text two>1,832,261</Text>
        <Text>Square Meter</Text>
      </Box>
    </div>
  )
}

export default RiceAndCorn
