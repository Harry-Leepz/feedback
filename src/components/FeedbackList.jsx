import FeedbackItem from "./FeedbackItem";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import { motion, AnimatePresence } from "framer-motion";
import Loading from "./shared/Loading";

const FeedbackList = () => {
  const { feedback, isLoading } = useContext(FeedbackContext);

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No Feedback Yet...</p>;
  }

  return isLoading ? (
    <Loading />
  ) : (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );

  // NONE FRAMER MOTION COMPONENT

  // return (
  //   <div className='feedback-list'>
  //     {data.map((item) => (
  //       <FeedbackItem key={item.id} item={item} onDeleteItem={onDeleteItem} />
  //     ))}
  //   </div>
  // );
};

export default FeedbackList;
