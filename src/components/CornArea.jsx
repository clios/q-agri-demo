import './CornArea.css'

import { VictoryPie, VictoryTooltip } from 'victory'

import Box from './Box'
import React from 'react'
import Table from './Table'
import Text from './Text'

function CornArea() {
  return (
    <div className="corn-area">
      <div>
        <VictoryPie
          height={250}
          labels={() => null}
          padding={0}
          innerRadius={50}
          colorScale={['#20DF20', '#20A8DF', '#D020DF', '#DF207C']}
          labels={({ datum }) => `${datum.x}: ${datum.y}`}
          labelComponent={
            <VictoryTooltip cornerRadius={0} flyoutPadding={{ left: 20, right: 20, bottom: 10, top: 10 }} style={{ fontSize: '16px' }} />
          }
          data={[
            { x: 'Upper Vega', y: 59 },
            { x: 'Lower Vega', y: 41 },
            { x: 'Broad Plain', y: 28 },
            { x: 'Hilly Areas', y: 37 }
          ]}
        />
      </div>
      <div>
        <Table className="no-click" headers={['Legend', 'Variety', 'Area']}>
          <tr>
            <td>
              <div className="box-green" />
            </td>
            <td>Upper Vega</td>
            <td>59</td>
          </tr>
          <tr>
            <td>
              <div className="box-blue" />
            </td>
            <td>Lower Vega</td>
            <td>41</td>
          </tr>
          <tr>
            <td>
              <div className="box-indigo" />
            </td>
            <td>Broad Plain</td>
            <td>28</td>
          </tr>
          <tr>
            <td>
              <div className="box-violet" />
            </td>
            <td>Hilly Areas</td>
            <td>37</td>
          </tr>
        </Table>
      </div>
      <div>
        <Box>
          <Text orange>Corn Field</Text>
          <Text>Total Area</Text>
          <Text two>159</Text>
          <Text>Hectares</Text>
        </Box>
      </div>
    </div>
  )
}

export default CornArea
