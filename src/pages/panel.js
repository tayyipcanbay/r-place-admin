import React from "react";
import "../styles/panel.css"
import Nav from "../components/nav";
import Footer from "../components/footer";
import AreaChart from "../components/areaChart";
import BarChart from "../components/barChart";
import PieChart from "../components/pieChart";
import Events from "../components/events";
import Feed from "../components/feed";
import Path from "../components/path";

function Panel(){

    return(
        <div className="panel-body fixed-nav sticky-footer bg-dark" id="page-top">
            <Nav />
            <div className="content-wrapper">
                <div className="container-fluid">
                <Path />
                <Events />
                <AreaChart/>
                <div className="row">
                    <div className="col-lg-8">
                        <BarChart />
                    </div>
                    <div className="col-lg-4">
                    <PieChart />
                    <Feed />
                    </div>
                </div>
                
                </div>
                <Footer />
                <a className="scroll-to-top rounded" href="#page-top">
                <i className="fa fa-angle-up"></i>
                </a>
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                        <div className="modal-footer">
                            <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                            <a className="btn btn-primary" href="login.html">Logout</a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
export default Panel;

