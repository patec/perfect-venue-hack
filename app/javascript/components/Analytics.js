import React from 'react';
import PropTypes from 'prop-types';
import { Chart } from 'react-charts';

class Analytics extends React.Component {
  render() {
    const data = [
      {
        label: 'Series 1',
        data: [
          ['January', 5324.58],
          ['February', 14075.03],
          ['March', 12197.61],
          ['April', 10860.19],
          ['May', 37666.82],
          ['June', 13738.24],
          ['July', 20953.02],
          ['August', 20869.28],
          ['September', 26483],
          ['October', 23653.81],
          ['November', 10597.57],
          ['December', 48477.94]
        ]
      },
      {
        label: 'Series 2',
        data: [
          ['January', 24668.07],
          ['February', 8353.68],
          ['March', 4328.49],
          ['April', 1729.99],
          ['May', 865.94],
          ['June', 0],
          ['July', 0],
          ['August', 0],
          ['September', 0],
          ['October', 0],
          ['November', 0],
          ['December', 500]
        ]
      }
    ];

    const axes = [
      { primary: true, type: 'ordinal', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ];

    const series = { type: 'bar' };

    return (
      <React.Fragment>
        <h3 style={{ marginLeft: '-600px', textAlign: 'center' }}>
          Performance
        </h3>
        <div
          style={{
            width: '400px',
            height: '300px',
            margin: 'auto',
            padding: '25px',
            backgroundColor: 'white'
          }}
        >
          <p style={{ marginBottom: '10px', marginTop: '0px' }}>Revenue</p>
          <Chart series={series} data={data} axes={axes} />
        </div>
      </React.Fragment>
    );
  }
}

export default Analytics;
