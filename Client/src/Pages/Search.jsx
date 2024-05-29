import React, { useEffect, useState } from "react";
import "../assets/Css/Search.css";
import studentData from "../Data/studentData";
import BinarySearch from "../Algorithm/BinarySearch";
import { Stack } from "../Algorithm/Stack";
import { useStudentContext } from "../Context/StudentContext";
import { Link } from "react-router-dom";

const Search = () => {
  const { currentUser } = useStudentContext();
  const [lastSearches, setLastSearches] = useState(new Stack(100));
  const [search, setSearch] = useState("");
  const [searchedStudent, setSearchedStudent] = useState([]);

  const searchStudent = () => {
    const sgpa = parseFloat(search);
    if (isNaN(sgpa)) {
      console.log("Invalid input. Please enter a number.");
      return;
    }
    const indices = BinarySearch(studentData, sgpa);
    if (indices !== -1) {
      const students = indices.map((index) => studentData[index]);
      setSearchedStudent(students);
      lastSearches.push(sgpa);
      setSearch("");
    } else {
      setSearchedStudent([]);
      console.log("No students found with the given SGPA.");
    }
  };

  const navigateBack = async () => {
    const previousSearch = lastSearches.pop();
    if (previousSearch !== null && previousSearch !== undefined) {
      setSearch(previousSearch);
    } else {
      console.log("No previous searches.");
    }
  };

  return (
    <div className="container">
      <div className="search">
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
            <button onClick={navigateBack} className="btn__primary">
              Last User
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
                    Name:{" "}
                    <span>
                      <Link to={`/userProfile/${student.id}`}>
                        {student.fullName}
                      </Link>
                      {currentUser == student.id && " - You"}
                    </span>
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
