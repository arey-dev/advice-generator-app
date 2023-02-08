export function Advice({ advice, id }) {
  return (
    <div className="advice">
      <h1 className="title">advice #{id}</h1>
      <p>&ldquo; {advice} &rdquo;</p>
    </div>
  );
}
