import React from "react";
import AllLeaves from "../components/AllLeaves";
import TableLeaveRequest from "../components/TableLeaveRequest";
import Next7Days from "../components/Next7Days";
import "./Home.css";

const Home = () => {
  return (
    <>
      <section class="section1">
        <div class="section1-column1">
          <AllLeaves />
        </div>
        <div class="section1-column2">
          <Next7Days />
        </div>
      </section>
      <section class="section2">
        <h2 class="table-title"> Requests for leave</h2>
        <TableLeaveRequest />
      </section>
    </>
  );
};

export default Home;
