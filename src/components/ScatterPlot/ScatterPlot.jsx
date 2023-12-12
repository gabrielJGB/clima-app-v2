import React from 'react';
import {  XYPlot,
    XAxis,
    YAxis,
    HorizontalGridLines,
    VerticalGridLines,
    LineSeries } from 'react-vis';

const ScatterPlot = ({ data }) => {
  return (
    <XYPlot width={300} height={300}>
    
    
    
    <YAxis title="Y Axis" />
    <LineSeries

      data={[{x: 1, y: 3}, {x: 2, y: 5}, {x: 4, y: 5}]}

    />
    
 
  </XYPlot>
  );
};

export default ScatterPlot;
