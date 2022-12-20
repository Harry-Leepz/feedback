import { useState } from "react";
import Card from "../components/shared/Card";
import Button from "./shared/Button";

const FeedbackForm = () => {
  const [text, setText] = useState("");

  const textInputHandler = (event) => {
    setText(event.target.value);
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
          <Button type='submit' disabled={false} version={"primary"}>
            Send
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default FeedbackForm;
