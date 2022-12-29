import React from "react";
import Next7DaysRecordRow from "./Next7DaysRecordRow";
import Next7DaysData from "../Data/Next7DaysData";
import "./Next7Days.css";

const EmployeeLeaveInfo = (value, key) => {
  return (
    <Next7DaysRecordRow
      key={value.id}
      date={value.date}
      employeeImg={value.employeeImg}
      employeeName={value.employeeName}
      leaveType={value.leaveType}
      Days={value.Days}
    />
  );
};

const UniqueDates = new Set(
  Next7DaysData.map((value) => {
    return value.date;
  })
);

const Next7Days = () => {
  return (
    <>
      <div class="column-next-7-day">
        <div class="title">
          <h1>In next 7 days</h1>
        </div>
        <div className="next-week-container">
          <div class="date firstDate">
            <p>Friday 02/11/2018</p>
          </div>
          <div class="dateUsers firstDateUsers">
            {Next7DaysData.map(EmployeeLeaveInfo)};
          </div>

          <div class="date secondDate">
            <p>Monday 05/11/2018</p>
          </div>
          <div class="dateUsers secondDateUsers">
            {Next7DaysData.map(EmployeeLeaveInfo)};
          </div>
        </div>
      </div>

      {UniqueDates}
    </>
  );
};

export default Next7Days;
