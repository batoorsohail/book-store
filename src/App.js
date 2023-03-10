import { Route, Routes } from 'react-router-dom';
import BookPage from './pages/BookPage';
import CategoriesPage from './pages/CategoriesPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<BookPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
      </Routes>
    </>
  );
}

export default App;
