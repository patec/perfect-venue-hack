import React from 'react';
import PropTypes from 'prop-types';
import Chart from 'react-google-charts';

class Analytics2 extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Chart
          chartType="ColumnChart"
          // spreadSheetUrl="https://docs.google.com/spreadsheets/d/1SfB6GHs4GtBwEZdA4pMzxEo91GunpmnMeoysRfoHzb0"
          spreadSheetUrl={this.props.dataUrl}
          spreadSheetQueryParameters={{
            headers: 1,
            query: this.props.query
          }}
          width="700px"
          height="300px"
          style={{ margin: 'auto', padding: '20px' }}
          title="Revenue"
          // options={{
          //   vAxis: { format: 'long' }
          // }}
          // spreadSheetUrl="https://docs.google.com/spreadsheets/d/1XWJLkAwch5GXAt_7zOFDcg8Wm8Xv29_8PWuuW15qmAE"
          // spreadSheetQueryParameters={{
          //   headers: 1,
          //   query: 'SELECT A, H, O, Q, R, U LIMIT 5 OFFSET 8'
          // }}
          options={{
            title: this.props.title,
            legend: 'top',
            hAxis: {
              format: 'short'
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
