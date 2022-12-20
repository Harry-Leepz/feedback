import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

import feedbackData from "./data/FeedbackData";

function App() {
  const [feedback, setFeedback] = useState(feedbackData);

  const deleteItemHandler = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      // filter feedback to act as a delete
      const filteredFeedback = feedback.filter((item) => item.id !== id);
      setFeedback(filteredFeedback);
    }
  };

  return (
    <div className='App'>
      <Header />
      <div className='container'>
        <FeedbackForm />
        <FeedbackStats data={feedback} />
        <FeedbackList data={feedback} onDeleteItem={deleteItemHandler} />
      </div>
    </div>
  );
}

export default App;
