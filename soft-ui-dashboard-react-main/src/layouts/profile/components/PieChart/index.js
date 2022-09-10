import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

class PieRechartComponent extends React.Component {
  COLORS = ["#dd7e6b", "#f9cb9c", "#b6d7a8", "#9fc5e8", "#b4a7d6", "#d5a6bd"];
  pieData = [
    {
      name: "Metered",
      value: parseInt(localStorage.getItem("meteredValue"))
    },
    {
      name: "UnMetered",
      value: parseInt(localStorage.getItem("unmeteredValue"))
    },
    {
      name: "External",
      value: parseInt(localStorage.getItem("externalValue"))
    },
    {
      name: "Laundry",
      value: parseInt(localStorage.getItem("laundryValue"))
    },
    {
      name: "Toilets",
      value: parseInt(localStorage.getItem("toiletsValue"))
    },
    {
      name: "Greenery",
      value: parseInt(localStorage.getItem("greeneryValue"))
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
          <label>{`${payload[0].name} : ${payload[0].value} L`}</label>
        </div>
      );
    }
    return null;
  };
  render() {
    return (
      <PieChart width={500} height={300}>
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