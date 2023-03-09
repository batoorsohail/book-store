import Book from '../components/Book';
import Form from '../components/Form';
import '../styles/Book.css';

const BookPage = () => (
  <div>
    <ul>
      <li className="book-card-container">
        <Book title="The Hunger Games" author="Suzanne Collins" />
      </li>
      <li className="book-card-container">
        <Book title="Dune" author="Frank Herbert" />
      </li>
      <li className="book-card-container">
        <Book title="Capital in the Twenty-First Century" author="Suzanne Collins" />
      </li>
    </ul>
    <Form />
  </div>
);
export default BookPage;
