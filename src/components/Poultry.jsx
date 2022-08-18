import './Poultry.css'

import Box from './Box'
import React from 'react'
import Text from './Text'

function Poultry() {
  return (
    <div className="poultry">
      <Box>
        <Text orange>Chicken</Text>
        <Text two>1,943,684</Text>
        <Text>Heads</Text>
      </Box>
      <Box>
        <Text orange>Duck</Text>
        <Text two>1,943,684</Text>
        <Text>Heads</Text>
      </Box>
      <Box>
        <Text orange>Goose</Text>
        <Text two>1,943,684</Text>
        <Text>Heads</Text>
      </Box>
      <Box>
        <Text orange>Turkey</Text>
        <Text two>1,943,684</Text>
        <Text>Heads</Text>
      </Box>
    </div>
  )
}

export default Poultry
