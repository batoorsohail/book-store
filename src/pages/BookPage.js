import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import Form from '../components/Form';
import '../styles/Book.css';
import { getBooks } from '../redux/books/booksSlice';

const BookPage = () => {
  const { books, isLoading } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  let output;
  if (isLoading) output = <h3>Wait Loading...</h3>;

  if (books?.length > 0) {
    output = books.map((bk) => (
      <Book
        key={bk.item_id}
        title={bk.title}
        author={bk.author}
        id={bk.item_id}
      />
    ));
    if (!isLoading && books?.length === 0) {
      output = <h3>No books to display</h3>;
    }
  }

  return (
    <div>
      <ul>
        {output}
      </ul>
      <Form />
    </div>
  );
};
export default BookPage;
