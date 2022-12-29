import React from 'react';
import './Wallchart.css';

const Wallchart = () => {
  return (
    <>
      <div className="main-section">
      <div className="section-column1">
        <div className="employee-short-desc">
          <div className="employee-name-image">
            <img src="images/wallchart-avatar.png" alt="Emplyee Avatar" />
            <div className="emplyee-name-designation">
              <div className="employee-name">Faisal Fiaz</div>
              <div className="employee-designation">React-Developer</div>
            </div>
          </div>
          <div className="availability-details">
            <div className="col col-1">
              <div className="details-title">Year to Date</div>
              <div className="value value1">PTO</div>
            </div>
            <div className="col col-2">
              <div className="details-title">Days Available</div>
              <div className="value value2">5</div>
            </div>
            <div className="col col-3">
              <div className="details-title">Days Used</div>
              <div className="value value3">8</div>
            </div>
          </div>
        </div>

        <section className="pto-main-section">
          <div className="pto-section1">
            <h2>Paid Time Off (PTO)</h2>
            <div className="pending-icon-button">
              <button>
                <i className="fa-regular fa-clock"></i>
                Pending
              </button>
            </div>
          </div>

          <div className="pto-section2">
            <div className="date-from-to">
              <div className="date-from date-box">
                <div className="day">Monday</div>
                <div className="month-year">
                  <div className="month">August 8</div>
                  <div className="year">2020</div>
                </div>
              </div>

              <div className="between-icon">
                <i className="fa-solid fa-arrow-right"></i>
              </div>

              <div className="date-to date-box">
                <div className="day">Thursday</div>
                <div className="month-year">
                  <div className="month">August 11</div>
                  <div className="year">2020</div>
                </div>
              </div>
            </div>

            <div className="pto-section-2-column3">
              <div className="requested-days">4 Work Days Requested</div>
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
              My Child is out of school for break and I need to stay home for
              childcare
            </div>
          </div>

          <div className="pto-section4">
            <div className="mng-form-title">Note from Management</div>
            <div className="input-note">
               <textarea
                name="input-note"
                placeholder="Please enter your reason for approving or denying the request."
              />
              <textarea
                name="input-note"
                id=""
                cols="30"
                rows="3"
                placeholder="Please enter your reason for approving or denying the request."
              ></textarea>
            </div>
          </div>

          <div className="pto-section5">
            <button className="btn-reject-request">Reject Request</button>
            <button className="btn-approve-request">Approve Request</button>
          </div>
        </section>
      </div>

      <div className="sidebar">
        <h2 className="sidebar-title">Upcoming Public Holidays</h2>
        <div className="holiday">
          <table>
            <tr className="holiday-row">
              <td className="holiday-date-day">
                <div className="holiday-date">Jul 08, 2022</div>
                <div className="holiday-day">Friday</div>
              </td>
              <td className="holiday-name">Arafat Day</td>
            </tr>

            <tr className="holiday-row">
              <td className="holiday-date-day">
                <div className="holiday-date">Jul 09, 2022</div>
                <div className="holiday-day">Saturday</div>
              </td>
              <td className="holiday-name">Eid-al-Adha</td>
            </tr>

            <tr className="holiday-row">
              <td className="holiday-date-day">
                <div className="holiday-date">Jul 10, 2022</div>
                <div className="holiday-day">Sunday</div>
              </td>
              <td className="holiday-name">Eid-al-Adha Holiday</td>
            </tr>

            <tr className="holiday-row">
              <td className="holiday-date-day">
                <div className="holiday-date">Jul 11, 2022</div>
                <div className="holiday-day">Monday</div>
              </td>
              <td className="holiday-name">Eid-al-Adha Holiday</td>
            </tr>

            <tr className="holiday-row">
              <td className="holiday-date-day">
                <div className="holiday-date">Jul 30, 2022</div>
                <div className="holiday-day">Saturday</div>
              </td>
              <td className="holiday-name">Islamic New Year</td>
            </tr>

            <tr className="holiday-row">
              <td className="holiday-date-day">
                <div className="holiday-date">Oct 08, 2022</div>
                <div className="holiday-day">Saturday</div>
              </td>
              <td className="holiday-name">Prophet Birthday</td>
            </tr>

            <tr className="holiday-row">
              <td className="holiday-date-day">
                <div className="holiday-date">Dec 01, 2022</div>
                <div className="holiday-day">Thursday</div>
              </td>
              <td className="holiday-name">Commemoration Day</td>
            </tr>

            <tr className="holiday-row">
              <td className="holiday-date-day">
                <div className="holiday-date">Dec 02, 2022</div>
                <div className="holiday-day">Friday</div>
              </td>
              <td className="holiday-name">National Day</td>
            </tr>

            <tr className="holiday-row">
              <td className="holiday-date-day">
                <div className="holiday-date">Dec 03, 2022</div>
                <div className="holiday-day">Saturday</div>
              </td>
              <td className="holiday-name">National Day Holiday</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    </>
  )
}

export default Wallchart