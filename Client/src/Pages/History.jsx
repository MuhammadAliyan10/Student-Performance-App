import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const History = ({ children }) => {
  const history = useHistory();
  const [historyStack, setHistoryStack] = useState([]);

  useEffect(() => {
    const unlisten = history.listen((location) => {
      setHistoryStack((prevStack) => [...prevStack, location.pathname]);
    });

    return () => unlisten();
  }, [history]);

  const goBack = () => {
    if (historyStack.length > 1) {
      historyStack.pop(); // Remove the current page
      const previousPage = historyStack.pop(); // Get the previous page
      history.push(previousPage);
      setHistoryStack([...historyStack]); // Update the stack
    } else {
      // If there's only one page in the stack, navigate to the home page
      history.push("/");
    }
  };

  return (
    <div className="container">
      <button onClick={goBack}>Go Back</button>
      {children}
    </div>
  );
};

export default History;
