import div from "./pattern-divider-desktop.svg";

export function Divider() {
  return (
    <div className="img-wrapper">
      <img src={div} alt="" aria-hidden />
    </div>
  );
}
