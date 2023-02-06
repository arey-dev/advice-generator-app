import { Advice } from "../advice";
import { Divider } from "../divider";

export function Card({ advice, id }) {
  return (
    <section className="card flex-col-align">
      <Advice advice={advice} id={id} />
      <Divider />
    </section>
  );
}
