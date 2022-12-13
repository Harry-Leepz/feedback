import FeedbackItem from "./FeedbackItem";

const FeedbackList = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>No Feedback Yet...</p>;
  }

  return (
    <div className='feedback-list'>
      {data.map((feedback) => (
        <FeedbackItem
          key={feedback.id}
          rating={feedback.rating}
          text={feedback.text}
        />
      ))}
    </div>
  );
};

export default FeedbackList;
