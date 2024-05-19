import React from "react";
import ProgressChart from "../Components/ProgressChart";
import studentData from "../Data/studentData";
const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <h2 className="mb-5">Home</h2>
        <h3 className="mb-3">Welcome {studentData[0]["fullName"]}</h3>
        <div className="whole__report">
          <div className="row">
            <div className="col-sm-9">
              <ProgressChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
