import React from "react";

const TableRecord = (props) => {
  return (
    <>
      <tr class="leave-detail-row">
        <td data-label="Employee Name">
          <img src={props.employeeImg} alt="user avatar" class="avatar-image" />
          <span class="avatar-name">{props.employeeName}</span>
        </td>

        <td data-label="Leave Type" class="leave-type">
          <span>{props.leaveType}</span>
        </td>

        <td data-label="From-To" class="from-to">
          <span class="date-from">{props.dateFrom} - </span>
          <span class="date-to">{props.dateTo}</span>
        </td>

        <td class="btn-approve-or-not">
          <div class="three-buttons">
            <button id="dissapprove">Dissapprove</button>
            <button id="approve">Approve</button>
            <button id="more">More...</button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default TableRecord;
