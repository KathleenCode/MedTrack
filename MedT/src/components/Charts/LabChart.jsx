// import React from 'react'
// import Chart from "react-apexcharts";
// import { labData } from '../Data/LabData';

// function LabChart({chartData}) {
//   return (
//     <div>
//       <Chart
//       type="bar"
//       width={500}
//       height={350}
//       series={[
//         {
//           name: "Equipment price",
//           data: labData.map(data => data.price),
//           // color: "lightblue"
//         },
//         {
//           name: "Equipment main category",
//           data: labData.map(data => data.mainCategory),
//           // color: "purple"
//         }
//       ]}
//       options={{
//         title:{
//           text: "Distribution of equipment in a hospital laboratory",
//           style: {
//             fontSize: "15",
//             color: "blue"
//           }
//         },
//         chart:{
//           stacked:true
//         },
//         plotOptions: {
//           bar: {
//             // horizontal: true,
//             // columnWidth: "20%"
//           }
//         },
//         stroke: {
//           width: 5
//         },
//         xaxis: {
//           title: {
//             text: "Equipment name",
//             style: {
//               fontSize: "13",
//               color: "green",
//             }
//           },
//           categories: labData.map(data => data.itemName)
//         },
//         yaxis: {
//           title: {
//             text: "Distribution",
//             style: {
//               fontSize: "13",
//               color: "green"
//             }
//           }
//         },
//         legend: {
//           position: "top"
//         },
//         dataLabels: {
//           enabled: true
//         },
//         grid: {
//           show: true,
//           xaxis: {
//             lines: {
//               show: false
//             }
//           },
//           yaxis: {
//             lines: {
//               show: false
//             }
//           }
//         }
//       }}
//       />
//     </div>
//   )
// }

// export default LabChart






import React from 'react';
import Chart from "react-apexcharts";
import {labData} from "../Data/LabData"

export default function LabChart() {
  return (
    <div>
      <Chart
      type="area"
      width={500}
      height={380}
      series={[
        {
          name: "Equipment Price",
          data: labData.map(data => data.price),
        },
        {
          name: "Equipment code",
          data: labData.map(data => data.itemCode)
        },
      ]}
      options={{
        title: {
          text: "Equipment Distribution",
          align: 'left',
          style: {
            fontSize: 15,
            color: "#0d47a1"
          }
        },
        subtitle: {
          text: 'Price Movements',
          align: 'left'
        },
        dataLabels: {
          enabled: false
        },
        colors: ["#41bbd9", "#dab785"],
        stroke: {width: 5, curve: "smooth"},
        fill: {
          opacity: 0.7,
          type: "solid"
        },
        legend: {
          position: "top"
        },
        chart: {
          stacked: true
        },
        xaxis: {
          title: {
            text: "Equipment Name",
            style: {
              fontSize: 12,
              color: "#1e96fc"
            }
          },
          categories: labData.map(data => data.itemName)
        },
        yaxis: {
          title: {
            text: "Distribution",
            style: {
              fontSize: 12,
              color: "#1e96fc"
            }
          },
          // categories: labData.map(data => data.itemName)
        }
      }}
      />
      {/* <Chart
      type="area"
      width={500}
      height={350}
      // style={{backgroundColor: "white"}}
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
          },
        },
        chart:{
          stacked:true
        },
        fill: {
          type: 'pattern',
          pattern: {
            style: 'verticalLines',
            width: 2,
            height: 5,
            strokeWidth: 1
          }
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
          categories: labData.map(data => data.itemName),
        },
        yaxis: {
          title: {
            text: "Distribution",
            style: {
              fontSize: "13",
              color: "green"
            }
          },
        },
        legend: {
          position: "top"
        },
        dataLabels: {
          enabled: true,
          style: {
            colors: ['white', 'lightblue']
          }
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
      /> */}
    </div>
  )
}



















