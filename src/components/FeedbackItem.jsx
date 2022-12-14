import Card from "./shared/Card";

const FeedbackItem = ({ text, rating }) => {
  return (
    <Card>
      <div className='num-display'>{rating}</div>
      <div className='text-display'>{text}</div>
    </Card>
  );
};

export default FeedbackItem;
