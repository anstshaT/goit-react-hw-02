import s from "./Feedback.module.css";

const Feedback = ({ good, bad, neutral }) => {
  return (
    <div className={s.feedback}>
      <p className={s.feedbackText}>
        Good: <span className={s.feedbackNumber}>{good}</span>
      </p>
      <p className={s.feedbackText}>
        Neutral: <span className={s.feedbackNumber}>{neutral}</span>
      </p>
      <p className={s.feedbackText}>
        Bad: <span className={s.feedbackNumber}>{bad}</span>
      </p>
    </div>
  );
};

export default Feedback;
