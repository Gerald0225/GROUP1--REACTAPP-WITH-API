import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './RoomStatusChart.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const RoomStatusChart = () => {
  const data = {
    labels: ['Occupied Room 58', 'Block Room 7'],
    datasets: [
      {
        data: [58, 7],
        backgroundColor: ['#2c3e50', '#c0392b'],
        borderWidth: 0,
        cutout: '70%',
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="room-status-chart">
      <Doughnut data={data} options={options} />
      <div className="room-status-label">
        <p><strong>Occupied</strong></p>
        <p>58 Rooms</p>
      </div>
    </div>
  );
};

export default RoomStatusChart;