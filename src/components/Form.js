import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';
import '../styles/Form.css';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title.trim() || !author.trim()) return;
    const bookData = {
      item_id: uuidv4(),
      title,
      author,
    };
    dispatch(addBook(bookData));
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={submitHandler}>
        <input type="text" placeholder="Title" onChange={onTitleChange} required />
        <input type="text" placeholder="Author" onChange={onAuthorChange} required />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default Form;
