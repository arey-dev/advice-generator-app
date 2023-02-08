import { Advice } from "../advice";
import { Divider } from "../divider";
import { Button } from "../button";
import { Loader } from "../loaders";
import { useState, useEffect } from "react";

const URL = "https://api.adviceslip.com/advice";

export function Card() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  // request data from api
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClick = () => {
    fetchData();
  };

  return (
    <section className="card flex-col-align">
      {error && <div>Error: {error.message}</div>}
      {isLoading ? (
        <Loader />
      ) : (
        data && <Advice advice={data.slip.advice} id={data.slip.id} />
      )}
      <Divider />
      <Button onButtonClick={handleClick} />
    </section>
  );
}
