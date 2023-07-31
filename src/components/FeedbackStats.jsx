import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackStats = () => {
  const { feedback } = useContext(FeedbackContext);
  // Calculate average ratings
  let average =
    feedback.reduce((acc, current) => {
      return acc + current.rating;
    }, 0) / feedback.length;

  // set avergae to one deciaml place and
  // have any .0 replace by a single figure
  average = average.toFixed(1).replace(/[.,]$0/, "");

  return (
    <div className='feedback-stats'>
      <h4> {feedback.length} Reviews</h4>
      <h4> Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
};

export default FeedbackStats;
