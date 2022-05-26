import { useRef, useState } from "react";
const AddBook = ({ data }) => {
  var nullify = {
    name: "",
    author: "",
    bookshelf: "",
    cover: "",
  };
  const [input, setInput] = useState(nullify);
  const formRef = useRef(null);
  const handleSubmit = (e) => {
    const form = formRef?.current;
    const object = {
      name: form.name.value,
      author: form.author.value,
      bookshelf: form.bookshelf.value,
      cover: form.cover.value,
    };
    fetch("/api/book", {
      method: "POST",
      body: JSON.stringify(object),
    });
    setInput(nullify);
    e.preventDefault();
  };
  return (
    <>
      <h1>testing</h1>
      <form
        ref={formRef}
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        method='post'
      >
        <input
          type='text'
          placeholder='NAME'
          onChange={function (e) {
            setInput(function (p) {
              return {
                ...p,
                name: e.target.value,
              };
            });
          }}
          name='name'
          value={input.name}
        />
        <input
          onChange={function (e) {
            setInput(function (p) {
              return {
                ...p,
                author: e.target.value,
              };
            });
          }}
          type='text'
          placeholder='Author'
          name='author'
          value={input.author}
        />
        <input
          onChange={function (e) {
            setInput(function (p) {
              return {
                ...p,
                bookshelf: e.target.value,
              };
            });
          }}
          type='text'
          placeholder='Bookshelf'
          name='bookshelf'
          value={input.bookshelf}
        />
        <input
          onChange={function (e) {
            setInput(function (p) {
              return {
                ...p,
                cover: e.target.value,
              };
            });
          }}
          type='text'
          placeholder='Cover'
          name='cover'
          value={input.cover}
        />
        <input type='submit' value='Submit' />
      </form>
    </>
  );
};

export default AddBook;
