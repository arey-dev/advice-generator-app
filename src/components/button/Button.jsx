import dice from "./icon-dice.svg";

export function Button({ onButtonClick }) {
  return (
    <div className="button-dice" aria-label="Button" onClick={onButtonClick}>
      <img src={dice} alt="" aria-hidden />
    </div>
  );
}
