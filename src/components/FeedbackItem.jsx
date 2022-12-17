import Card from "./shared/Card";
import { FaTimesCircle } from "react-icons/fa";

const FeedbackItem = ({ item }) => {
  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button className='close'>
        <FaTimesCircle color='black' />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  );
};

export default FeedbackItem;
