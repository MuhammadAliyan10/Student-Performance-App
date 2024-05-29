import { createContext, useContext, useState } from "react";

const studentContext = createContext();

export function useStudentContext() {
  return useContext(studentContext);
}

const StudentContext = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(0);
  const contextValue = { currentUser };
  return (
    <studentContext.Provider value={contextValue}>
      {children}
    </studentContext.Provider>
  );
};

export default StudentContext;
