import { useState } from "react";
import "./App.css";
import Description from "./components/description/Description";
import Options from "./components/options/Options";
import Feedback from "./components/feedback/Feedback";

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    setFeedback((lastFeedback) => ({
      ...lastFeedback,
      [feedbackType]: lastFeedback[feedbackType] + 1,
    }));
  };

  return (
    <>
      <Description />
      <Options onOptions={updateFeedback} />
      <Feedback
        good={feedback.good}
        neutral={feedback.neutral}
        bad={feedback.bad}
      />
    </>
  );
}

export default App;
