import React, { useState } from "react";
import "../assets/Css/Search.css";
import studentData from "../Data/studentData";
import BinarySearch from "../Algorithm/BinarySearch";

const Search = () => {
  const [search, setSearch] = useState("");
  const [searchedStudent, setSearchedStudent] = useState([]);

  const searchStudent = () => {
    const sgpa = parseFloat(search);
    const indices = BinarySearch(studentData, sgpa);
    if (indices !== -1) {
      const students = indices.map((index) => studentData[index]);
      setSearchedStudent(students);
    } else {
      setSearchedStudent([]);
    }
  };
  console.log(searchedStudent);
  return (
    <div className="search">
      <div className="container">
        <h3>Search</h3>
        <div className="search__box my-5">
          <div className="input__box">
            <input
              type="number"
              value={search}
              onChange={(e) => setSearch(Number(e.target.value))}
              placeholder="Search with SGPA"
            />
            <button onClick={searchStudent} className="btn__primary">
              Search
            </button>
          </div>
        </div>
        {searchedStudent.length > 0 ? (
          <div className="searched__result">
            <h4>Search Result:</h4>
            {searchedStudent.map((student) => {
              return (
                <div key={student.id} className="single_search">
                  <p>
                    Name: <span>{student.fullName}</span>
                  </p>
                  <p>
                    Registration Number: <span>{student.regNumber}</span>
                  </p>
                  <p>
                    SGPA: <span>{student.sgpa}</span>
                  </p>
                  <hr />
                </div>
              );
            })}
          </div>
        ) : (
          <>
            {!search.length > 0 ? (
              <p>No student found.</p>
            ) : (
              <p>Enter cgpa to find</p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Search;
