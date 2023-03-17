import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook, deleteBook } from '../redux/books/booksSlice';

const Book = ({ title, author, id }) => {
  const dispatch = useDispatch();

  const onRemoveBook = (e) => {
    const { id } = e.target.dataset;
    dispatch(removeBook(id));
    dispatch(deleteBook(id));
  };

  return (
    <li className="book-card">
      <div className="book-details">
        <div>
          <p className="category">Action</p>
          <p className="book-title">{title}</p>
          <p className="book-author">{author}</p>
        </div>
        <div className="btn-container">
          <button type="submit" className="btn">Comments</button>
          <button type="button" data-id={id} className="btn remove-btn" onClick={onRemoveBook}>Remove</button>
          <button type="submit" className="btn">Edit</button>
        </div>
      </div>
      <div className="book-chapter-container">
        <div className="book-progress">
          <div className="book-complete" />
          <div>
            <h3>100%</h3>
            <button type="submit" className="btn cpm-btn">Completed</button>
          </div>
        </div>
        <div className="line" />
        <div className="chapter">
          <div>
            <p className="title-chapter">Current Chapter</p>
            <p className="current-chapter">Chapter 17</p>
          </div>
          <button type="submit" className="btn-chapter">UPDATE PROGRESS</button>
        </div>
      </div>
    </li>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
