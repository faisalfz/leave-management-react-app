import React from "react";
import PtoData from '../Data/PtoData'

const PTO = () => {
  return (
    <>
      <section className="pto-main-section">
        <div className="pto-section1">
          <h2>Paid Time Off (PTO)</h2>
          <div className="pending-icon-button">
            <button className="btn-status">
              <i className="fa-regular fa-clock"></i>
              {PtoData.status}
            </button>
          </div>
        </div>

        <div className="pto-section2">
          <div className="date-from-to">
            <div className="date-from date-box">
              <div className="day">{PtoData.dayFrom}</div>
              <div className="month-year">
                <div className="month">{PtoData.dateFrom}</div>
                <div className="year">{PtoData.yearFrom}</div>
              </div>
            </div>

            <div className="between-icon">
              <i className="fa-solid fa-arrow-right"></i>
            </div>

            <div className="date-to date-box">
              <div className="day">{PtoData.dayTo}</div>
              <div className="month-year">
                <div className="month">{PtoData.dateTo}</div>
                <div className="year">{PtoData.yearTo}</div>
              </div>
            </div>
          </div>

          <div className="pto-section-2-column3">
            <div className="requested-days">{PtoData.requestDays} Work Days Requested</div>
            <div className="btn-propose-change">
              <button>
                <i className="fa-solid fa-pen"></i>
                Propose Change
              </button>
            </div>
          </div>
        </div>

        <div className="pto-section3">
          <div className="pto-request-reason">
            {PtoData.purpose}
          </div>
        </div>

        <div className="pto-section4">
          <div className="mng-form-title">Note from Management</div>
          <div className="input-note">
            <textarea
              name="input-note"
              id=""
              cols="30"
              rows="1"
              placeholder="Please enter your reason for approving or denying the request."
            ></textarea>
          </div>
        </div>

        <div className="pto-section5">
          <button className="btn-reject-request">Reject Request</button>
          <button className="btn-approve-request">Approve Request</button>
        </div>
      </section>
    </>
  );
};

export default PTO;
