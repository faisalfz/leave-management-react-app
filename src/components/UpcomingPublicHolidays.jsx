import React from "react";
import PublicHolidaysData from "../Data/PublicHolidaysData";

const UpcomingPublicHolidays = () => {
  return (
    <>
      <h2 className="sidebar-title">Upcoming Public Holidays</h2>
      <div className="holiday">
        <table>
        <tbody>
          {PublicHolidaysData.map((value, key) => {
            return (
              <tr className="holiday-row">
                <td className="holiday-date-day">
                  <div className="holiday-date">{value.date}</div>
                  <div className="holiday-day">{value.day}</div>
                </td>
                <td className="holiday-name">{value.holidayName}</td>
              </tr>
            );
          })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UpcomingPublicHolidays;
