import { useState, useEffect, useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import Card from "../components/shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";

const FeedbackForm = () => {
  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);
  const [text, setText] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(10);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setIsDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const textInputHandler = (event) => {
    setText(event.target.value);

    // check text input and set error message and submit button disbaled attribute
    if (text === "") {
      setMessage("");
      setIsDisabled(true);
    } else if (text !== "" && text.trim().length <= 10) {
      setMessage("Text must be atleast 10 characters!");
      setIsDisabled(true);
    } else {
      setMessage("");
      setIsDisabled(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };

      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }

      setText("");
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us ?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className='input-group'>
          <input
            onChange={textInputHandler}
            value={text}
            type='text'
            placeholder='Write a review'
          />
          <Button type='submit' isDisabled={isDisabled} version={"primary"}>
            Send
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
