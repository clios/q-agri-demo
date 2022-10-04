import './Corn.css'

import Box from './Box'
import React from 'react'
import Text from './Text'

function Corn() {
  return (
    <div className="corn">
      <Box>
        <Text orange>Lower Vega</Text>
        <Text two>21,261</Text>
        <Text>Hectare</Text>
      </Box>
      <Box>
        <Text orange>Upper Vega</Text>
        <Text two>21,261</Text>
        <Text>Hectare</Text>
      </Box>
      <Box>
        <Text orange>Broad Plain</Text>
        <Text two>21,261</Text>
        <Text>Hectare</Text>
      </Box>
      <Box>
        <Text orange>Hilly Areas</Text>
        <Text two>21,261</Text>
        <Text>Hectare</Text>
      </Box>
      <Box>
        <Text orange>Total</Text>
        <Text two>85,261</Text>
        <Text>Hectare</Text>
      </Box>
    </div>
  )
}

export default Corn
