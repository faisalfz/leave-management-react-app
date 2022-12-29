import React from "react";

const Next7DaysRecordRow = (props) => {
  return (
    <>
      
        <div class="user user1">
          <div class="col1">
            <div class="userImg user1img">
              <img src={props.employeeImg} alt="user1" />
            </div>

            <div class="nameTime">
              <p class="userName">{props.employeeName}</p>
              <p class="timeRange">{props.Days} Days</p>
            </div>
          </div>

          <div class="col2">
            <p class="userStatus">{props.leaveType}</p>
          </div>
        </div>
    </>
  );
};

export default Next7DaysRecordRow;
