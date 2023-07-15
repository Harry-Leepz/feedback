import { useState } from "react";
import Card from "../components/shared/Card";
import Button from "./shared/Button";

const FeedbackForm = () => {
  const [text, setText] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [message, setMessage] = useState("");

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

  return (
    <Card>
      <form>
        <h2>How would you rate your service with us ?</h2>
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
