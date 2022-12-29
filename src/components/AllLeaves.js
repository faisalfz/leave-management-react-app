import React from "react";
import LeaveData from "../Data/leaveData";
import "./AllLeaves.css";

const AllLeaves = () => {
  return (
    <>
      <h2 class="leaves-summary-title">Leaves Summary</h2>
      <div className="allLeaves">
        <div class="leave firstLeave">
          <div class="whitePart">
            <p class="leaveLabel">Total employees</p>
            <div class="secondRow">
              <span class="leaveTotal">{LeaveData.totalEmployee}</span>
              <span class="iconPercent">
                <i class="fa-solid fa-arrow-trend-up leaveIcon"></i>
                <b class="leavePercent">{LeaveData.employeePercent}%</b>
              </span>
            </div>
          </div>

          <div class="blackPart">
            <p class="leaveMessage">
              {LeaveData.applicationReviewPending} applications need review
            </p>
          </div>
        </div>

        <div class="leave secondLeave">
          <div class="whitePart">
            <p class="leaveLabel">Total overtime</p>
            <div class="secondRow">
              <span class="leaveTotal">{LeaveData.totalOvertime}</span>
              <span class="iconPercent">
                <i class="fa-solid fa-arrow-trend-up leaveIcon"></i>
                <b class="leavePercent">{LeaveData.overtimePercent}%</b>
              </span>
            </div>
          </div>

          <div class="blackPart">
            <p class="leaveMessage">
              {LeaveData.overtimeApprovalPending} overtime schedules need
              approval
            </p>
          </div>
        </div>

        <div class="leave thirdLeave">
          <div class="whitePart">
            <p class="leaveLabel">Total leave</p>
            <div class="secondRow">
              <span class="leaveTotal">{LeaveData.totalLeave}</span>
              <span class="iconPercent">
                <i class="fa-solid fa-arrow-trend-down"></i>
                <b class="leavePercent">{LeaveData.leavePercent}%</b>
              </span>
            </div>
          </div>

          <div class="blackPart">
            <p class="leaveMessage">
              {LeaveData.leaveApprovalPending} paid leave plans need approval
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllLeaves;
