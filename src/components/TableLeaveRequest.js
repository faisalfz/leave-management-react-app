import React from "react";
import "./TableLeaveRequest.css";
import TableRecord from "./TableRecord";
import TableData from "../Data/tableData";

const TableRow = (value, key) => {
  return (
    <TableRecord
      key={value.id}
      employeeImg={value.employeeImg}
      employeeName={value.employeeName}
      leaveType={value.leaveType}
      dateFrom={value.dateFrom}
      dateTo={value.dateTo}
    />
  );
};

const TableLeaveRequest = () => {
  return (
    <>
      <div className="table-container">
        <table className="table-leave-request">
          <thead>
            <tr className="table-heading-row">
              <th>Employee Name</th>
              <th>Leave Type</th>
              <th>From-To</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>{TableData.map(TableRow)};</tbody>
        </table>
      </div>
    </>
  );
};

export default TableLeaveRequest;
