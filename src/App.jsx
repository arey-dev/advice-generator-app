import { Card } from "./components/card";

function App() {
  const advice =
    "It is easy to sit up and take notice, what's difficult is getting up and taking action ";
  const id = 117;

  return <Card advice={advice} id={id} />;
}

export default App;
