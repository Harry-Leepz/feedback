import { v4 as uuidv4 } from "uuid"; // generate custom id for adding new feedback
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import About from "./pages/About";
import AboutIconLink from "./components/AboutIconLink";
import { FeedbackProvider } from "./context/FeedbackContext";

import feedbackData from "./data/FeedbackData";

function App() {
  const [feedback, setFeedback] = useState(feedbackData);

  const addItemHandler = (newFeedback) => {
    newFeedback.id = uuidv4();
    // using spread operator to add the new feedback to the previous state
    setFeedback([newFeedback, ...feedback]);
  };

  return (
    <div className='App'>
      <FeedbackProvider>
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
                    <FeedbackStats />
                    <FeedbackList />
                    <AboutIconLink />
                  </>
                }
              ></Route>
              <Route path='/about' element={<About />} />
            </Routes>
          </div>
        </Router>
      </FeedbackProvider>
    </div>
  );
}

export default App;
