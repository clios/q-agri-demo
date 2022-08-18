import './Livestock.css'

import Box from './Box'
import React from 'react'
import Text from './Text'

function Livestock() {
  return (
    <div className="livestock">
      <Box>
        <Text orange>Cattle</Text>
        <Text two>73,129</Text>
        <Text>Heads</Text>
      </Box>
      <Box>
        <Text orange>Carabao</Text>
        <Text two>73,129</Text>
        <Text>Heads</Text>
      </Box>
      <Box>
        <Text orange>Pig</Text>
        <Text two>73,129</Text>
        <Text>Heads</Text>
      </Box>
      <Box>
        <Text orange>Goat</Text>
        <Text two>73,129</Text>
        <Text>Heads</Text>
      </Box>
      <Box>
        <Text orange>Sheep</Text>
        <Text two>73,129</Text>
        <Text>Heads</Text>
      </Box>
    </div>
  )
}

export default Livestock
