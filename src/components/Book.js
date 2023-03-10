import PropTypes from 'prop-types';

const Book = ({ title, author }) => (
  <div className="book-card">
    <p>{title}</p>
    <p>{author}</p>
    <button type="button" className="remove-btn">Remove</button>
  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
