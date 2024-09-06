import { fetchJokes } from "../../Utils/Fetch";
import { useEffect, useState } from "react";

const Footer = () => {
  const [jokes, setJokes] = useState();

  const handleClick = async () => {
    const data = await fetchJokes("food");
    console.log(data);
    setJokes(data);
  };
  useEffect(() => {
    handleClick();
  }, []);

  return (
    <footer>
      <p>{jokes}</p>
      {/* test */}
    </footer>
  );
};
export default Footer;
