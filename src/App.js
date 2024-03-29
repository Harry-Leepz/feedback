import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import About from "./pages/About";
import AboutIconLink from "./components/AboutIconLink";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
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
                    <FeedbackForm />
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
