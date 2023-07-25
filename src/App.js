import { v4 as uuidv4 } from "uuid"; // generate custom id for adding new feedback
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import About from "./pages/About";
import AboutIconLink from "./components/AboutIconLink";

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

  const addItemHandler = (newFeedback) => {
    newFeedback.id = uuidv4();
    // using spread operator to add the new feedback to the previous state
    setFeedback([newFeedback, ...feedback]);
  };

  return (
    <div className='App'>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                  <FeedbackForm onAddItem={addItemHandler} />
                  <FeedbackStats data={feedback} />
                  <FeedbackList
                    data={feedback}
                    onDeleteItem={deleteItemHandler}
                  />
                </>
              }
            ></Route>
            <Route path='/about' element={<About />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </div>
  );
}

export default App;
