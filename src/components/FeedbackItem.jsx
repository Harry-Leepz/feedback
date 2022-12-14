import Card from "./shared/Card";
import { FaTimesCircle } from "react-icons/fa";

const FeedbackItem = ({ text, rating }) => {
  return (
    <Card>
      <div className='num-display'>{rating}</div>
      <button className='close'>
        <FaTimesCircle color='black' />
      </button>
      <div className='text-display'>{text}</div>
    </Card>
  );
};

export default FeedbackItem;
