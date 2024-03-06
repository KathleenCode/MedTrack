import React from 'react'
import Chart from "react-apexcharts";
import { labData } from '../Data/LabData';

function LabChart({chartData}) {
  return (
    <div>
      <Chart
      type="bar"
      width={500}
      height={350}
      series={[
        {
          name: "Equipment price",
          data: labData.map(data => data.price),
          // color: "lightblue"
        },
        {
          name: "Equipment main category",
          data: labData.map(data => data.mainCategory),
          // color: "purple"
        }
      ]}
      options={{
        title:{
          text: "Distribution of equipment in a hospital laboratory",
          style: {
            fontSize: "15",
            color: "blue"
          }
        },
        chart:{
          stacked:true
        },
        plotOptions: {
          bar: {
            // horizontal: true,
            // columnWidth: "20%"
          }
        },
        stroke: {
          width: 5
        },
        xaxis: {
          title: {
            text: "Equipment name",
            style: {
              fontSize: "13",
              color: "green",
            }
          },
          categories: labData.map(data => data.itemName)
        },
        yaxis: {
          title: {
            text: "Distribution",
            style: {
              fontSize: "13",
              color: "green"
            }
          }
        },
        legend: {
          position: "top"
        },
        dataLabels: {
          enabled: true
        },
        grid: {
          show: true,
          xaxis: {
            lines: {
              show: false
            }
          },
          yaxis: {
            lines: {
              show: false
            }
          }
        }
      }}
      />
    </div>
  )
}

export default LabChart










