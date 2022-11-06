import React from "react";
import { Chart } from "chart.js";

function PieChart(){
    return(
        <div className="card mb-3">
            <div className="card-header">
            <i className="fa fa-pie-chart"></i> Pie Chart Example</div>
            <div className="card-body">
            <canvas id="myPieChart" width="100%" height="100"></canvas>
            </div>
            <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
        </div>

    )
}
export default PieChart;