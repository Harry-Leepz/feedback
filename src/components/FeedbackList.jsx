import FeedbackItem from "./FeedbackItem";

import { motion, AnimatePresence } from "framer-motion";

const FeedbackList = ({ data, onDeleteItem }) => {
  if (!data || data.length === 0) {
    return <p>No Feedback Yet...</p>;
  }

  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {data.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              key={item.id}
              item={item}
              onDeleteItem={onDeleteItem}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );

  // return (
  //   <div className='feedback-list'>
  //     {data.map((item) => (
  //       <FeedbackItem key={item.id} item={item} onDeleteItem={onDeleteItem} />
  //     ))}
  //   </div>
  // );
};

export default FeedbackList;
