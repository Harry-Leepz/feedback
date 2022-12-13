import { useState } from "react";
import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";

import feedbackData from "./data/FeedbackData";

function App() {
  const [feedback, setFeedback] = useState(feedbackData);
  return (
    <div className='App'>
      <Header />
      <div className='container'>
        <FeedbackItem />
      </div>
    </div>
  );
}

export default App;
