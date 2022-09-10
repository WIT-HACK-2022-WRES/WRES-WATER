import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

class PieRechartComponent extends React.Component {
  COLORS = ["#8884d8", "#82ca9d", "#FFBB28", "#FF8042", "#AF19FF", "#3994D0"];
  pieData = [
    {
      name: "Metered",
      value: localStorage.getItem("meteredValue")
    },
    {
      name: "UnMetered",
      value: localStorage.getItem("unmeteredValue")
    },
    {
      name: "External",
      value: localStorage.getItem("externalValue")
    },
    {
      name: "Laundry",
      value: localStorage.getItem("laundryValue")
    },
    {
      name: "Toilets",
      value: localStorage.getItem("toiletsValue")
    },
    {
      name: "Greenery",
      value: localStorage.getItem("greeneryValue")
    }
  ];
  CustomTooltip = ({ active, payload }) => {
    if (active) {
      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: "#ffff",
            padding: "5px",
            border: "1px solid #cccc"
          }}
        >
          <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
        </div>
      );
    }
    return null;
  };
  render() {
    return (
      <PieChart width={730} height={300}>
        <Pie
          data={this.pieData}
          color="#000000"
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={120}
          fill="#8884d8"
        >
          {this.pieData.map((_entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={this.COLORS[index % this.COLORS.length]}
            />
          ))}
        </Pie>
        <Tooltip content={<this.CustomTooltip />} />
        <Legend />
      </PieChart>
    );
  }
}
export default PieRechartComponent;