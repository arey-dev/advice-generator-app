import { useState, useEffect } from "react";
import div from "./pattern-divider-desktop.svg";
import divMb from "./pattern-divider-mobile.svg";

export function Divider() {
  const [viewportWidth, setViewportWidth] = useState(
    document.documentElement.clientWidth
  );

  useEffect(() => {
    const handleResize = () =>
      setViewportWidth(document.documentElement.clientWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div className="img-wrapper">
      <img src={viewportWidth >= 375 ? div : divMb} alt="" aria-hidden />
    </div>
  );
}
