import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {

  const values = props.dataPoints.map(dataPoint => dataPoint.value)
  const totalMaximum = Math.max(...values)

  return (
    <div className="chart">
      {props.dataPoint.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
          key={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
