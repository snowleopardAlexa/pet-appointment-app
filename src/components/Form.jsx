import { useState, useEffect } from "react";

const Form1 = () => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    // storing input name
    localStorage.setItem("name", JSON.stringify(name));
    localStorage.setItem("author", JSON.stringify(author));
  }, [name, author]);



  return (
    <form>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Full name"
        aria-label="fullname"
      />
       <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Full name"
        aria-label="fullname"
      />
    </form>
  );
};

export default Form1;