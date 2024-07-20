import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';

// Register the components
ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

const PieChart = ({ data = { labels: [], datasets: [] } }) => {
    return <Pie data={data} />;
};

export default PieChart;
