import React, { useEffect, useState } from "react";
import studentData from "../Data/studentData";
import "../assets/Css/Standing.css";
import { ascendingStanding, descendingStanding } from "../Algorithm/QuickSort";
const Standing = () => {
  const [standing, setStanding] = useState(false);
  const [sortedRanking, setSortedRanking] = useState([]);
  const rank = (index) => {
    if (index == 1) {
      return "1st";
    } else if (index == 2) {
      return "2nd";
    } else if (index == 3) {
      return "3rd";
    } else {
      return index + "th";
    }
  };
  useEffect(() => {
    if (!standing) {
      setSortedRanking(descendingStanding(studentData));
    } else {
      setSortedRanking(ascendingStanding(studentData));
    }
  }, [standing]);

  return (
    <div className="standing">
      <div className="container">
        <div className="standing__heading">
          <h3>Standing</h3>
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              value={standing}
              onChange={() => setStanding(!standing)}
            />
            <label class="form-check-label" for="flexSwitchCheckDefault">
              Change Order
            </label>
          </div>
        </div>
        <div className="standing__table">
          <div className="table__header">
            <p>Full Name</p>
            <p>Registration Number</p>
            <p>SGPA</p>
          </div>
          {sortedRanking.map((student, index) => (
            <div className="table__row" key={student.id}>
              <p>{rank(index + 1)}</p>
              <p>{student.fullName}</p>
              <p>{student.regNumber}</p>
              <p>{student.sgpa.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Standing;
