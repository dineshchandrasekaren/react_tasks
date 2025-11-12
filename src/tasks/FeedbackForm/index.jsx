import React, { useState } from "react";
const reset = {
  username: "",
  rating: 0,
  comment: "",
};
const FeedbackForm = () => {
  const [feedbackInput, setFeedbackInput] = useState(reset);
  const [allFeedback, setAllFeedback] = useState([]);
  const handleChange = ({ target }) => {
    const { id, value } = target;
    setFeedbackInput((p) => ({ ...p, [id]: value }));
  };
  return (
    <>
      <form
        onSubmit={(_) => {
          const { username, rating, comment } = feedbackInput;
          _.preventDefault();
          if (username && rating && comment) {
            setAllFeedback((p) => [...p, feedbackInput]);
            setFeedbackInput(reset);
          } else {
            alert("Please fill all the values");
          }
        }}
      >
        <div>
          <label htmlFor="username">Username:</label>
          <br />
          <input
            type="text"
            id="username"
            placeholder="your name"
            value={feedbackInput.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="rating">Rating:</label>
          <br />
          <input
            value={feedbackInput.rating}
            type="range"
            id="rating"
            min={0}
            step={0.5}
            max={5}
            onChange={handleChange}
          />
          <span style={{ fontWeight: "bold" }}>{feedbackInput.rating}</span>
        </div>
        <div>
          <label htmlFor="comment">Comment:</label>
          <br />
          <textarea
            id="comment"
            placeholder="feedback description"
            value={feedbackInput.comment}
            rows={10}
            cols={40}
            onChange={handleChange}
          />
        </div>
        <input type="submit" value={"Submit Feedback"} />
      </form>

      <h1>Feedbacks:</h1>
      <div style={{ display: "flex", gap: "10px" }}>
        {allFeedback.map(({ username, rating, comment }) => (
          <fieldset>
            <legend style={{ fontWeight: "bold" }}>
              {username + "'s feedback"}
            </legend>
            <h4>{"rating: " + rating}</h4>
            <p>{comment}</p>
          </fieldset>
        ))}
      </div>
    </>
  );
};

export default FeedbackForm;
