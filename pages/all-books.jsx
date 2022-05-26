import connect from "../lib/connect-db";
import bookSchema from "../model/book-schema";
import BookCard from "../components/book-card";
const AllBooks = ({ data }) => {
  console.log(data);
  return (
    <div className='grid grid-cols-3'>
      {data.map((e) => (
        <BookCard
          key={e._id}
          name={e.name}
          author={e.author}
          bookshelf={e.bookshelf}
          cover={e.cover}
        />
      ))}
    </div>
  );
};

export default AllBooks;
export const getStaticProps = async () => {
  await connect();
  const books = bookSchema.find({});
  const data = (await books).map((e, i) => {
    const book = e.toObject();
    book._id = book._id.toString();
    return book;
  });

  return {
    props: { data },
  };
};
