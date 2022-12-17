import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";

import feedbackData from "./data/FeedbackData";

function App() {
  const [feedback, setFeedback] = useState(feedbackData);

  const deleteItemHandler = (id) => {
    console.log(id);
  };

  return (
    <div className='App'>
      <Header />
      <div className='container'>
        <FeedbackList data={feedback} onDeleteItem={deleteItemHandler} />
      </div>
    </div>
  );
}

export default App;
