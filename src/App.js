import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";

import feedbackData from "./data/FeedbackData";

function App() {
  const [feedback, setFeedback] = useState(feedbackData);
  return (
    <div className='App'>
      <Header />
      <div className='container'>
        <FeedbackList data={feedback} />
      </div>
    </div>
  );
}

export default App;
