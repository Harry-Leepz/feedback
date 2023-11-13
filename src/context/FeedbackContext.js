import { useState, createContext, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchFeedbackData();
  }, []);

  // fetch feedback
  const fetchFeedbackData = async () => {
    setIsLoading(true);
    const response = await fetch("/feedback");
    const data = await response.json();
    setFeedback(data);
    setIsLoading(false);
  };

  // delete a feedback item
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      // filter feedback to act as a delete
      const filteredFeedback = feedback.filter((item) => item.id !== id);
      setFeedback(filteredFeedback);
    }
  };

  // add feedback
  const addFeedback = async (newFeedback) => {
    const response = await fetch("/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();
    // using spread operator to add the new feedback to the previous state
    setFeedback([data, ...feedback]);
  };

  // set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  // update a feedback item
  const updateFeedback = (id, updatedFeedback) => {
    setFeedback(
      feedback.map((item) =>
        item.id === id ? { ...item, ...updatedFeedback } : item
      )
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
        isLoading,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
