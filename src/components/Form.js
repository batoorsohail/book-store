import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook, postBook } from '../redux/books/booksSlice';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const categoryChangeHandler = (e) => {
    setCategory(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title.trim() || !author.trim()) return;
    const bookData = {
      item_id: uuidv4(),
      title,
      author,
      category,
    };
    dispatch(addBook(bookData));
    dispatch(postBook(bookData));
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  return (
    <div className="form-main-container">
      <div className="form-container">
        <hr className="line2" />
        <h2 className="add-book-title">Add a new book</h2>
        <form className="form" onSubmit={submitHandler}>
          <input type="text" placeholder="Title" onChange={onTitleChange} className="title-input" required />
          <input type="text" placeholder="Author" onChange={onAuthorChange} className="author-input" required />
          <select
            name="category"
            id="category"
            className="category-input"
            onChange={categoryChangeHandler}
            aria-label="Book category input"
            required
          >
            <option value="">Select Category</option>
            <option value="Fiction">Fiction</option>
            <option value="Technology">Technology</option>
            <option value="Life-style">Life-style</option>
            <option value="Economy">Economy</option>
            <option value="Politics">Politics</option>
            <option value="General">General</option>
          </select>
          <button type="submit" className="submit-btn">Add Book</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
