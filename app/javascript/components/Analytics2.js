import React from 'react';
import PropTypes from 'prop-types';
import Chart from 'react-google-charts';

class Analytics2 extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Chart
          chartType="ColumnChart"
          spreadSheetUrl={this.props.dataUrl}
          spreadSheetQueryParameters={{
            headers: 1,
            query: this.props.query
          }}
          width="700px"
          height="300px"
          style={{ margin: 'auto', marginBottom: '30px' }}
          options={{
            title: this.props.title,
            titlePosition: 'out',
            titleTextStyle: {
              color: 'grey'
            },
            legend: { position: 'top', alignment: 'center' },
            hAxis: {
              type: 'string',
              format: 'string',
              slantedText: 'true'
            },
            vAxis: {
              format: this.props.type
            }
          }}
        ></Chart>
      </React.Fragment>
    );
  }
}
Analytics2.propTypes = {
  title: PropTypes.string,
  dataUrl: PropTypes.string,
  query: PropTypes.string,
  type: PropTypes.string
};

export default Analytics2;
