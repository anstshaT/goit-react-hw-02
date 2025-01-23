import s from "./Options.module.css";

function Options({ onOptions, onReset, totalFeedback }) {
  return (
    <div className={s.options}>
      <button className={s.button} onClick={() => onOptions("good")}>
        Good
      </button>
      <button className={s.button} onClick={() => onOptions("neutral")}>
        Neutral
      </button>
      <button className={s.button} onClick={() => onOptions("bad")}>
        Bad
      </button>
      {totalFeedback >= 1 && (
        <button className={s.button} onClick={() => onReset()}>
          Reset
        </button>
      )}
    </div>
  );
}

export default Options;
