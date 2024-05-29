import React from "react";
import { useParams } from "react-router-dom";
import studentData from "../Data/studentData";
import "../assets/Css/Profile.css";
import { useStudentContext } from "../Context/StudentContext";

const UserProfile = () => {
  const { currentUser } = useStudentContext();
  const { userId } = useParams();
  const data = studentData.find(
    (student) => student.id === (userId ? parseInt(userId) : currentUser)
  );

  const showCurrentSemester = (semesterNumber) => {
    if (semesterNumber === 1) return `${semesterNumber}st`;
    if (semesterNumber === 2) return `${semesterNumber}nd`;
    if (semesterNumber === 3) return `${semesterNumber}rd`;
    return `${semesterNumber}th`;
  };

  if (!data) return <div>No student found</div>;

  return (
    <div className="single__student__data">
      <div className="container">
        <h2>Student Profile</h2>
        <div className="student__profile">
          <ul>
            <li>
              <h5>Full Name:</h5> <p>{data.fullName}</p>
            </li>
            <li>
              <h5>Registration Number:</h5> <p>{data.regNumber}</p>
            </li>
            <li>
              <h5>Current Semester:</h5>{" "}
              <p>{showCurrentSemester(data.currentSemester)}</p>
            </li>
            <li>
              <h5>Current Progress (Semester 3):</h5>{" "}
              <p>{data.progress.semester3.toFixed(2)}%</p>
            </li>
            <li>
              <h5>SGPA:</h5> <p>{data.sgpa}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
