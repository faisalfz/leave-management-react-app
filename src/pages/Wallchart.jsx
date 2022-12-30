import React from "react";
import EmployeeShortInfo from "../components/EmployeeShortInfo";
import PTO from "../components/PTO";
import UpcomingPublicHolidays from '../components/UpcomingPublicHolidays'
import "./Wallchart.css";

const Wallchart = () => {
  return (
    <div className="wallchart-body">
      <div className="main-section">
        <div className="section-column1">
          <EmployeeShortInfo />

          <PTO />
        </div>

        <div className="sidebar">
          <UpcomingPublicHolidays/>
        </div>
      </div>
    </div>
  );
};

export default Wallchart;
