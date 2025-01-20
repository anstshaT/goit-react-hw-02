import s from "./Options.module.css";

function Options({ onOptions }) {
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
    </div>
  );
}

export default Options;
