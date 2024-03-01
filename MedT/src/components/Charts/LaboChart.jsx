import { animator } from 'chart.js';
import React from 'react';
import {Bar, Line, Pie, Doughnut, Bubble, PolarArea} from "react-chartjs-2";
import {Chart as ChartJS, defaults} from "chart.js/auto";

export default function LaboChart({chartData}) {
  return (
    <div style={{width: "700px"}}>
        <Bubble data={chartData} options={animator} />
    </div>
  )
}
