import React from "react";
import { Chart } from "chart.js";

function BarChart(){    
    return(
        <div className="card mb-3">
            <div className="card-header">
            <i className="fa fa-bar-chart"></i> Bar Chart Example</div>
            <div className="card-body">
            <div className="row">
                <div className="col-sm-8 my-auto">
                <canvas id="myBarChart" width="100" height="50"></canvas>
                </div>
                <div className="col-sm-4 text-center my-auto">
                <div className="h4 mb-0 text-primary">$34,693</div>
                <div className="small text-muted">YTD Revenue</div>
                <hr></hr>
                <div className="h4 mb-0 text-warning">$18,474</div>
                <div className="small text-muted">YTD Expenses</div>
                <hr></hr>
                <div className="h4 mb-0 text-success">$16,219</div>
                <div className="small text-muted">YTD Margin</div>
                </div>
            </div>
            </div>
            <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
        </div>
    )
}
export default BarChart;