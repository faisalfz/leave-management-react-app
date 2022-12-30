import React from "react";
import EmployeeShortData from '../Data/EmployeeShortData'

const EmployeeShortInfo = () => {
  return (
    <>
      <div className="employee-short-desc">
        <div className="employee-name-image">
          <img src={EmployeeShortData.userImg} alt="Emplyee Image" />
          <div className="emplyee-name-designation">
            <div className="employee-name">{EmployeeShortData.userName}</div>
            <div className="employee-designation">{EmployeeShortData.userDesignation}</div>
          </div>
        </div>
        <div className="availability-details">
          <div className="col col-1">
            <div className="details-title">Year to Date</div>
            <div className="value value1">{EmployeeShortData.yearToDate}</div>
          </div>
          <div className="col col-2">
            <div className="details-title">Days Available</div>
            <div className="value value2">{EmployeeShortData.daysAvailable}</div>
          </div>
          <div className="col col-3">
            <div className="details-title">Days Used</div>
            <div className="value value3">{EmployeeShortData.daysUsed}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeShortInfo;
