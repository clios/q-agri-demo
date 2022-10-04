import './RiceArea.css'

import { VictoryPie, VictoryTooltip } from 'victory'

import Box from './Box'
import React from 'react'
import Table from './Table'
import Text from './Text'

function RiceArea() {
  return (
    <div className="rice-area">
      <div>
        <VictoryPie
          height={250}
          labels={() => null}
          padding={0}
          innerRadius={50}
          labels={({ datum }) => `${datum.x}: ${datum.y}`}
          labelComponent={
            <VictoryTooltip cornerRadius={0} flyoutPadding={{ left: 20, right: 20, bottom: 10, top: 10 }} style={{ fontSize: '16px' }} />
          }
          colorScale={['#DF2020', '#DF9C20', '#DFDF20']}
          data={[
            { x: 'Irrigated', y: 41 },
            { x: 'Rainfed', y: 59 },
            { x: 'Upland', y: 17 }
          ]}
        />
      </div>
      <div>
        <Table className="no-click" headers={['Legend', 'Variety', 'Area']}>
          <tr>
            <td>
              <div className="box-red" />
            </td>
            <td>Irrigated</td>
            <td>41</td>
          </tr>
          <tr>
            <td>
              <div className="box-orange" />
            </td>
            <td>Rainfed</td>
            <td>59</td>
          </tr>
          <tr>
            <td>
              <div className="box-yellow" />
            </td>
            <td>Upland</td>
            <td>17</td>
          </tr>
        </Table>
      </div>
      <div>
        <Box>
          <Text orange>Rice Field</Text>
          <Text>Total Area</Text>
          <Text two>281</Text>
          <Text>Hectares</Text>
        </Box>
      </div>
    </div>
  )
}

export default RiceArea
