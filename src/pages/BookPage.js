import { useSelector } from 'react-redux';
import Book from '../components/Book';
import Form from '../components/Form';
import '../styles/Book.css';

const BookPage = () => {
  const { books } = useSelector((state) => state.books);

  return (
    <div>
      <ul>
        {books.map((bk) => (
          <Book
            key={bk.item_id}
            title={bk.title}
            author={bk.author}
            id={bk.item_id}
          />
        ))}
      </ul>
      <Form />
    </div>
  );
};
export default BookPage;
