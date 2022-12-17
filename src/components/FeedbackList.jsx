import FeedbackItem from "./FeedbackItem";

const FeedbackList = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>No Feedback Yet...</p>;
  }

  return (
    <div className='feedback-list'>
      {data.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default FeedbackList;
