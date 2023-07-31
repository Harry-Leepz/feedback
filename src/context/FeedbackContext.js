import { useState, createContext } from "react";
import { v4 as uuidv4 } from "uuid"; // generate custom id for adding new feedback
import FeedbackData from "../data/FeedbackData";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  // delete a feedback item
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      // filter feedback to act as a delete
      const filteredFeedback = feedback.filter((item) => item.id !== id);
      setFeedback(filteredFeedback);
    }
  };

  // add feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    // using spread operator to add the new feedback to the previous state
    setFeedback([newFeedback, ...feedback]);
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
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
