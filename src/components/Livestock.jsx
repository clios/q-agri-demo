import './Livestock.css'

import { VictoryPie, VictoryTooltip } from 'victory'

import Box from './Box'
import React from 'react'
import Table from './Table'
import Text from './Text'

function Livestock() {
  return (
    <div className="livestock">
      <div>
        <VictoryPie
          height={250}
          labels={() => null}
          padding={0}
          innerRadius={50}
          colorScale={['#DF2020', '#DF9C20', '#DFDF20', '#20DF20', '#20A8DF']}
          labels={({ datum }) => `${datum.x}: ${datum.y}`}
          labelComponent={
            <VictoryTooltip cornerRadius={0} flyoutPadding={{ left: 20, right: 20, bottom: 10, top: 10 }} style={{ fontSize: '16px' }} />
          }
          data={[
            { x: 'Cattle', y: 61 },
            { x: 'Carabao', y: 26 },
            { x: 'Pig', y: 37 },
            { x: 'Goat', y: 57 },
            { x: 'Sheep', y: 23 }
          ]}
        />
      </div>
      <div>
        <Table className="no-click" headers={['Legend', 'Livestock', 'Head']}>
          <tr>
            <td>
              <div className="box-red" />
            </td>
            <td>Cattle</td>
            <td>61</td>
          </tr>
          <tr>
            <td>
              <div className="box-orange" />
            </td>
            <td>Carabao</td>
            <td>26</td>
          </tr>
          <tr>
            <td>
              <div className="box-yellow" />
            </td>
            <td>Pig</td>
            <td>37</td>
          </tr>
          <tr>
            <td>
              <div className="box-green" />
            </td>
            <td>Goat</td>
            <td>57</td>
          </tr>
          <tr>
            <td>
              <div className="box-blue" />
            </td>
            <td>Sheep</td>
            <td>23</td>
          </tr>
        </Table>
      </div>
      <div>
        <Box>
          <Text orange>Total Livestock</Text>
          <Text two>195</Text>
          <Text>Heads</Text>
        </Box>
      </div>
    </div>
  )
}

export default Livestock
