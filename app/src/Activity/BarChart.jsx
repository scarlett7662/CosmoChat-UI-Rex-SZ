import React from "react";

function BarChart() {
  console.log("here is barchart");

  // Sample data and labels
  const data = [35, 44, 24, 34];
  const labels = ["21 Jul", "27 Jul", "28 Jul", "4 Aug"];

  // Calculate the maximum value for scaling
  const maxValue = Math.max(...data);

  return (
    <div style={{ display: "flex", alignItems: "flex-start" }}>
      <div
        style={{
          marginRight: "10px",
          writingMode: "vertical-rl",
          textAlign: "center",
          marginTop: "150px",
        }}
      >
        Number of Messages from GPT {/* Vertical label */}
      </div>
      <div>
        <h1>Chat History Statistics</h1>
        <div
          className="chat-graph"
          style={{
            display: "flex",
            alignItems: "flex-end",
            border: "1px solid #ccc",
            height: "300px",
            width: "500px",
            position: "relative",
          }}
        >
          {data.map((value, index) => (
            <div
              key={index}
              title={labels[index]} // Show the label on hover
              style={{
                height: `${(value / maxValue) * 100}%`, // Scale height based on max value
                width: "20px", // Width of each bar
                backgroundColor: "blue", // Color of the bars
                margin: "0 5px", // Spacing between bars
                transition: "height 0.3s ease", // Smooth transition for height
              }}
            />
          ))}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "500px",
          }}
        >
          {labels.map((label, index) => (
            <div key={index} style={{ width: "20px", textAlign: "center" }}>
              {label} {/* Display the label under each bar */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BarChart;
