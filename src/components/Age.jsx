import './Age.css'

import Box from './Box'
import React from 'react'
import Text from './Text'

function Age() {
  return (
    <div className="age">
      <Box>
        <Text className="mb-1" orange>
          20-29 yrs old
        </Text>
        <Text blue onePointThree>
          263
        </Text>
        <Text className="mb-1" blue>
          Male
        </Text>
        <Text yellow>127</Text>
        <Text className="mb-1" yellow>
          Female
        </Text>
        <Text onePointThree>43</Text>
        <Text className="mb-1">Not Sure</Text>
        <Text onePointThree total>
          1,246
        </Text>
        <Text>Total</Text>
      </Box>
      <Box>
        <Text className="mb-1" orange>
          30-39 yrs old
        </Text>
        <Text blue onePointThree>
          2,049
        </Text>
        <Text className="mb-1" blue>
          Male,049
        </Text>
        <Text yellow>394</Text>
        <Text className="mb-1" yellow>
          Female
        </Text>
        <Text onePointThree>15</Text>
        <Text className="mb-1">Not Sure</Text>
        <Text onePointThree total>
          2,457
        </Text>
        <Text>Total</Text>
      </Box>
      <Box>
        <Text className="mb-1" orange>
          40-49 yrs old
        </Text>
        <Text blue onePointThree>
          3,095
        </Text>
        <Text className="mb-1" blue>
          Male,095
        </Text>
        <Text yellow>409</Text>
        <Text className="mb-1" yellow>
          Female
        </Text>
        <Text onePointThree>62</Text>
        <Text className="mb-1">Not Sure</Text>
        <Text onePointThree total>
          3,476
        </Text>
        <Text>Total</Text>
      </Box>
      <Box>
        <Text className="mb-1" orange>
          50-59 yrs old
        </Text>
        <Text blue onePointThree>
          1,023
        </Text>
        <Text className="mb-1" blue>
          Male,023
        </Text>
        <Text yellow>192</Text>
        <Text className="mb-1" yellow>
          Female
        </Text>
        <Text onePointThree>23</Text>
        <Text className="mb-1">Not Sure</Text>
        <Text onePointThree total>
          2,921
        </Text>
        <Text>Total</Text>
      </Box>
      <Box>
        <Text className="mb-1" orange>
          60 yrs old and above
        </Text>
        <Text blue onePointThree>
          309
        </Text>
        <Text className="mb-1" blue>
          Male
        </Text>
        <Text yellow>12</Text>
        <Text className="mb-1" yellow>
          Female
        </Text>
        <Text onePointThree>5</Text>
        <Text className="mb-1">Not Sure</Text>
        <Text onePointThree total>
          509
        </Text>
        <Text>Total</Text>
      </Box>
    </div>
  )
}

export default Age
