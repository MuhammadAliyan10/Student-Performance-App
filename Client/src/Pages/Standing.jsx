import React, { useEffect, useState } from "react";
import studentData from "../Data/studentData";
import "../assets/Css/Standing.css";
const Standing = () => {
  const [standing, setStanding] = useState(false);
  const [sortedRanking, setSortedRanking] = useState([]);
  const ascendingStanding = (studentArray) => {
    if (studentArray.length <= 1) {
      return studentArray;
    }
    let pivot = studentArray[0];
    let lesserArray = [];
    let greaterArray = [];

    for (let i = 1; i < studentArray.length; i++) {
      if (studentArray[i].sgpa <= pivot.sgpa) {
        lesserArray.push(studentArray[i]);
      } else {
        greaterArray.push(studentArray[i]);
      }
    }

    return [
      ...ascendingStanding(lesserArray),
      pivot,
      ...ascendingStanding(greaterArray),
    ];
  };
  const descendingStanding = (studentArray) => {
    if (studentArray.length <= 1) {
      return studentArray;
    }

    let pivot = studentArray[0];
    let lesserArray = [];
    let greaterArray = [];

    for (let i = 1; i < studentArray.length; i++) {
      if (studentArray[i].sgpa >= pivot.sgpa) {
        lesserArray.push(studentArray[i]);
      } else {
        greaterArray.push(studentArray[i]);
      }
    }

    return [
      ...descendingStanding(lesserArray),
      pivot,
      ...descendingStanding(greaterArray),
    ];
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
              <p>{index + 1}</p>
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
