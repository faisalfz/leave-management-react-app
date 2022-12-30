import React from 'react'
import './Submit.css'

const Submit = () => {
  return (
    <>
      <h1 id="page-title">Submit A Request</h1>
    <section class="submit-req-main-section">
      <h3>Type of Leave</h3>
      <form action="">
        <div class="leave-type-radio">
          <div class="option-row1">
            <div class="sr-leave-type-option option1">
              <input
                type="radio"
                id="pto"
                name="sr-leave-type"
                value="pto"
                class="type-radio-1"
              />
              <label for="pto">
                <div class="sr-option-title">Paid Time Off (PTO)</div>
                <div class="sr-option-desc">
                  Each Computercraft employee has 15 PTO days per year.
                </div>
              </label>
            </div>

            <div class="sr-leave-type-option option2">
              <input
                type="radio"
                id="telecommunication"
                name="sr-leave-type"
                value="telecommunication"
                class="type-radio-2"
              />
              <label for="telecommunication">
                <div class="sr-option-title">Telecommuting</div>
                <div class="sr-option-desc">
                  Working outside of the office during normal office hours.
                </div>
              </label>
            </div>
          </div>

          <div class="option-row2">
            <div class="sr-leave-type-option option3">
              <input
                type="radio"
                id="jury-duty"
                name="sr-leave-type"
                value="jury-duty"
                class="type-radio-3"
              />
              <label for="jury-duty">
                <div class="sr-option-title">Jury Duty</div>
                <div class="sr-option-desc">
                  Computercraft will compensate employees for upto 15 days of
                  Jury Duty.
                </div>
              </label>
            </div>

            <div class="sr-leave-type-option option4">
              <input
                type="radio"
                id="bereavement"
                name="sr-leave-type"
                value="bereavement"
                class="type-radio-4"
              />
              <label for="bereavement">
                <div class="sr-option-title">Bereavement</div>
                <div class="sr-option-desc">
                  If a close family member has passed away, please take time
                  with your family.
                </div>
              </label>
            </div>
          </div>
        </div>

        <div class="sr-date-range">
          <h3 class="sr-date-range-title">Date Range</h3>

          <div class="sr-date-start-end">
            <div class="sr-start-date sr-date-box">
              <label for="">Start Date</label>
              <input type="date" />
            </div>

            <div class="sr-between-icon">
              <i class="fa-solid fa-arrow-right"></i>
            </div>

            <div class="sr-end-date sr-date-box">
              <label for="">End Date</label>
              <input type="date" />
            </div>
          </div>
        </div>

        <div class="sr-mngmnt-note">
          <h3 class="sr-mngmnt-title">Note to Management</h3>
          <textarea
            name="management-note"
            id=""
            cols="30"
            rows="4"
            placeholder="Please enter any details that management should take into consideration."
          ></textarea>
        </div>
        <div class="right-last-btton">
          <button type="submit" class="sr-btn-submit">Submit Request</button>
        </div>
      </form>
    </section>
    </>
  )
}

export default Submit