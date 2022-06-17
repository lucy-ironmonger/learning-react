import './Chart.css'
import ChartBar from './ChartBar'

const Chart = (props) => {
  return ( 
    <div className="chart">
      {props.dataPoint.map(dataPoint => <ChartBar value={dataPoint.value} maxValue={null} label={dataPoint.label} key={dataPoint.label} />)}
    </div>
   );
}
 
export default Chart;