import Image from "next/image";
import { ImCancelCircle } from "react-icons/im";
import { MdUpdate } from "react-icons/md";
const BookCard = ({ name, cover, author, bookshelf }) => {
  return (
    <>
      <div
        className='text-sm relative rounded-xl bg-slate-50 p-10 
      shadow-lg hover:shadow-2xl hover:cursor-pointer 
      text-center m-10 max-w-max'
      >
        <Image
          className='hover:blur-sm rounded-lg '
          src='https://wallpaperaccess.com/full/625497.jpg'
          width='250'
          height='300'
          alt={name}
        />
        <p className='font-bold text-lg'>{name}</p>
        <p className='pt-3'>
          Author : <span className='font-semibold'>{author}</span>
        </p>
        <p>
          Bookshelf no:{" "}
          {bookshelf.map((e, i) => (
            <span className='font-semibold' key={Math.random()}>
              {i === 0 || ","}
              {e}
            </span>
          ))}
        </p>
        <ImCancelCircle
          size={50}
          className=' bg-slate-50 m-1 p-1 rounded-full absolute top-1/2 left-1/4'
        />
        <MdUpdate
          size={50}
          className=' bg-slate-50 m-1  rounded-full absolute top-1/2 right-1/4'
        />
      </div>
    </>
  );
};

export default BookCard;
